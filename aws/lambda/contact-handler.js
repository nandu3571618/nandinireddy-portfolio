/**
 * AWS Lambda Contact Form Handler (Node.js 20.x Runtime)
 * Handles incoming portfolio dispatches, saves to DynamoDB, and alerts via SES
 */

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const crypto = require('crypto');

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-1' });
const docClient = DynamoDBDocumentClient.from(ddbClient);
const sesClient = new SESClient({ region: process.env.AWS_REGION || 'us-east-1' });

const TABLE_NAME = process.env.DYNAMODB_TABLE || 'PortfolioInquiries';
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'nandini.devcloud@gmail.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
  'Access-Control-Allow-Methods': 'OPTIONS,POST',
};

exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  // Handle CORS preflight
  if (event.requestContext?.http?.method === 'OPTIONS' || event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'Preflight OK' }),
    };
  }

  try {
    let body;
    if (typeof event.body === 'string') {
      body = JSON.parse(event.body || '{}');
    } else {
      body = event.body || {};
    }

    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Missing required fields: name, email, and message are mandatory.' }),
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Invalid email address format.' }),
      };
    }

    const inquiryId = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const item = {
      inquiryId,
      createdAt,
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      subject: (subject || 'Portfolio Inquiry').trim().slice(0, 200),
      message: message.trim().slice(0, 3000),
      ipAddress: event.requestContext?.http?.sourceIp || event.requestContext?.identity?.sourceIp || 'unknown',
      userAgent: event.requestContext?.http?.userAgent || 'unknown',
    };

    // 1. Save to DynamoDB
    await docClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: item,
      })
    );
    console.log(`Saved inquiry ${inquiryId} to DynamoDB table ${TABLE_NAME}`);

    // 2. Dispatch email notification via Amazon SES (if verified)
    try {
      const emailParams = {
        Source: NOTIFICATION_EMAIL,
        Destination: { ToAddresses: [NOTIFICATION_EMAIL] },
        Message: {
          Subject: { Data: `[Portfolio Lead] ${item.subject} from ${item.name}` },
          Body: {
            Text: {
              Data: `New inquiry submitted on Nandini's Portfolio:\n\nName: ${item.name}\nEmail: ${item.email}\nSubject: ${item.subject}\nDate: ${createdAt}\n\nMessage:\n${item.message}`,
            },
          },
        },
      };
      await sesClient.send(new SendEmailCommand(emailParams));
      console.log('Dispatched notification email via Amazon SES');
    } catch (sesErr) {
      console.warn('SES email skipped or unverified (inquiry still saved to DynamoDB):', sesErr.message);
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        success: true,
        message: 'Inquiry received and processed successfully by AWS Lambda.',
        requestId: inquiryId,
        timestamp: createdAt,
      }),
    };
  } catch (error) {
    console.error('Lambda handler error:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: 'Internal server error while processing submission.',
        details: error.message,
      }),
    };
  }
};
