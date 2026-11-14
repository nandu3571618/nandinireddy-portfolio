#!/usr/bin/env node

/**
 * AWS S3 & CloudFront Deployment Helper
 * Automates the build and sync to AWS S3, followed by a CloudFront cache invalidation.
 *
 * Usage:
 *   node aws/scripts/deploy-s3.js --bucket YOUR_S3_BUCKET_NAME --distribution YOUR_DISTRIBUTION_ID
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function getArg(name) {
  const index = args.indexOf(`--${name}`);
  if (index !== -1 && args[index + 1]) return args[index + 1];
  return process.env[name.toUpperCase().replace(/-/g, '_')] || '';
}

const bucket = getArg('bucket') || process.env.AWS_S3_BUCKET;
const distributionId = getArg('distribution') || process.env.CLOUDFRONT_DISTRIBUTION_ID;
const region = getArg('region') || process.env.AWS_REGION || 'us-east-1';

console.log('\n🚀 Starting Nandini Portfolio Deployment to AWS...\n');

// 1. Build the production React application
console.log('📦 Step 1: Building Vite production bundle...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// 2. Verify dist folder
const distPath = path.resolve(process.cwd(), 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ Error: dist/ directory not found after build.');
  process.exit(1);
}

if (!bucket) {
  console.log('⚠️  No S3 bucket specified. Build created at: ./dist');
  console.log('\nTo deploy to AWS S3 & CloudFront, run:');
  console.log('  node aws/scripts/deploy-s3.js --bucket <YOUR-BUCKET-NAME> --distribution <YOUR-DISTRIBUTION-ID>\n');
  console.log('Or use the AWS CLI directly:');
  console.log('  aws s3 sync dist/ s3://<YOUR-BUCKET-NAME> --delete');
  console.log('  aws cloudfront create-invalidation --distribution-id <YOUR-DISTRIBUTION-ID> --paths "/*"\n');
  process.exit(0);
}

// 3. Sync to S3
console.log(`☁️ Step 2: Syncing dist/ assets to s3://${bucket}...`);
try {
  const s3Cmd = `aws s3 sync dist/ s3://${bucket} --delete --region ${region}`;
  console.log(`Running: ${s3Cmd}`);
  execSync(s3Cmd, { stdio: 'inherit' });
  console.log('✅ S3 sync finished successfully!\n');
} catch (error) {
  console.error('❌ S3 sync failed. Ensure AWS CLI is configured (aws configure):', error.message);
  process.exit(1);
}

// 4. Invalidate CloudFront cache
if (distributionId) {
  console.log(`🔄 Step 3: Creating CloudFront invalidation for distribution ${distributionId}...`);
  try {
    const cfCmd = `aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`;
    console.log(`Running: ${cfCmd}`);
    execSync(cfCmd, { stdio: 'inherit' });
    console.log('✅ CloudFront invalidation triggered successfully!\n');
  } catch (error) {
    console.error('❌ CloudFront invalidation failed:', error.message);
  }
} else {
  console.log('ℹ️  No CloudFront distribution ID provided. Skipping cache invalidation.');
}

console.log('🎉 Deployment complete! Your portfolio is live on AWS.\n');
