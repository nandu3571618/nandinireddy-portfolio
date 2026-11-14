# Nandini Sharma — Full Stack Developer & AWS Cloud Portfolio 🚀

A modern, high-performance portfolio featuring interactive 3D particle constellations, glassmorphism, responsive animations, and an end-to-end **AWS Serverless Cloud** backend.

![Portfolio Preview](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80)

---

## ✨ Features & Highlights

- **Interactive 3D Particle Constellation**: Canvas-based background reacting dynamically to mouse movement and ambient physics without degrading FPS.
- **Glassmorphic UI Design**: Tailored cyberpunk/cloud aesthetic featuring cyan, violet, and AWS amber gradients with blur backdrops.
- **Interactive AWS Architecture Visualizer**: Click-to-inspect diagram illustrating Route 53, CloudFront CDN, S3, API Gateway, Lambda, and DynamoDB. Includes a **"Simulate Live Request"** animation button that triggers real-time visual packet flow.
- **Interactive Terminal Emulator**: Hero terminal showcasing simulated AWS CLI commands (`aws cloudfront get-distribution`, `curl -X POST /contact`).
- **Serverless Contact Form**:
  - **Zero-Config Demo Mode**: Works straight out of the box with realistic latency and celebration confetti (`canvas-confetti`).
  - **AWS Lambda Production Mode**: Ready to plug directly into an AWS API Gateway endpoint (`VITE_AWS_API_GATEWAY_URL`) to persist leads in **DynamoDB** and notify via **Amazon SES**.
- **Case Study Modal**: In-depth modal with key metrics, cloud architecture patterns, and tech tags.
- **Automated AWS Deployment & CI/CD**: One-click scripts and GitHub Actions workflows for continuous deployment to AWS S3 & CloudFront with automated cache invalidation.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS, Lucide Icons, Canvas API, Canvas Confetti
- **AWS Cloud**:
  - **Amazon CloudFront**: Global edge CDN with TLS 1.3 & Brotli compression
  - **Amazon S3**: Origin asset bucket secured with Origin Access Control (OAC)
  - **Amazon API Gateway**: HTTP API with CORS and rate throttling
  - **AWS Lambda**: Node.js 20.x serverless backend
  - **Amazon DynamoDB**: On-demand NoSQL database for contact dispatches
  - **Amazon SES**: Automated email notifications
  - **AWS CloudFormation**: Complete Infrastructure as Code (IaC) blueprint
- **CI/CD**: GitHub Actions workflow (`.github/workflows/deploy.yml`)

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized, tree-shaken static assets inside the `dist/` directory.

---

## ☁️ AWS Cloud Deployment Guide

### Option A: Automated CloudFormation Setup (Recommended)

1. Provision the entire AWS infrastructure using the template in `aws/cloudformation/template.yaml`:
   ```bash
   aws cloudformation deploy \
     --template-file aws/cloudformation/template.yaml \
     --stack-name nandini-portfolio \
     --capabilities CAPABILITY_IAM \
     --parameter-overrides ProjectName=nandini-portfolio NotificationEmail=your-email@example.com
   ```

2. Retrieve the provisioned endpoints and bucket:
   ```bash
   aws cloudformation describe-stacks --stack-name nandini-portfolio --query "Stacks[0].Outputs"
   ```

3. Update your `.env` file with your API Gateway endpoint:
   ```env
   VITE_AWS_API_GATEWAY_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/contact
   ```

4. Deploy the frontend using the automated deployment script:
   ```bash
   node aws/scripts/deploy-s3.js --bucket YOUR_S3_BUCKET_NAME --distribution YOUR_DISTRIBUTION_ID
   ```

---

### Option B: Continuous Deployment with GitHub Actions

Add the following repository secrets in **GitHub > Settings > Secrets and variables > Actions**:

| Secret Name | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM User Access Key |
| `AWS_SECRET_ACCESS_KEY` | IAM User Secret Key |
| `AWS_REGION` | e.g., `us-east-1` |
| `AWS_S3_BUCKET` | The S3 bucket name created by CloudFormation |
| `CLOUDFRONT_DISTRIBUTION_ID` | Your CloudFront distribution ID |
| `VITE_AWS_API_GATEWAY_URL` | Your API Gateway URL (optional) |

Whenever you push to `main`, GitHub Actions will automatically test, compile, sync to S3, and invalidate CloudFront caches.

---

## 🎨 Customizing Content

All data is decoupled and centralized in `src/data/portfolioData.js`:
- Personal Bio & Tagline
- Skills & Proficiency Bars
- AWS Architecture telemetry & node details
- Featured Projects & Case Studies
- Work Experience & Milestones
- Social Links & Contact Information

Simply edit `src/data/portfolioData.js` to update any section without touching component markup.
