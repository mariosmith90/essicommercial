#!/usr/bin/env bash
# One-time bootstrap: provisions Firebase Hosting site + deployer service account
# via Terraform, then downloads a key for GitHub Actions.
#
# Prerequisites:
#   - gcloud CLI authenticated as mario@brighthornmedia.com
#   - terraform installed: brew install terraform
#   - firebase-tools installed: npm install -g firebase-tools && firebase login
#
# Run once from repo root:  bash infra/setup.sh
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
KEY_OUT="$ROOT_DIR/firebase-service-account.json"

PROJECT_ID="organic-spirit-488116-e2"
SA_NAME="essicommercial-deployer"
SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

export PATH="/opt/homebrew/share/google-cloud-sdk/bin:$PATH"

echo "▸ Setting active GCP project: $PROJECT_ID"
gcloud config set project "$PROJECT_ID" --quiet

echo "▸ Running terraform init..."
cd "$SCRIPT_DIR"
terraform init

echo "▸ Running terraform apply..."
terraform apply -auto-approve

echo "▸ Applying Firebase Hosting target..."
cd "$ROOT_DIR"
firebase target:apply hosting site essicommercial --project "$PROJECT_ID"

echo "▸ Downloading service account key for GitHub Actions..."
gcloud iam service-accounts keys create "$KEY_OUT" \
  --iam-account="$SA_EMAIL" \
  --project="$PROJECT_ID"

echo ""
echo "✓ Done! Key saved to firebase-service-account.json"
echo ""
echo "✓ Next steps:"
echo "  1. Copy the CONTENTS of firebase-service-account.json as a GitHub secret:"
echo "       Repo → Settings → Secrets → Actions → New secret"
echo "       Name: FIREBASE_SERVICE_ACCOUNT"
echo "  2. Delete firebase-service-account.json after uploading (it is gitignored)"
echo "  3. Push to main — GitHub Actions will build and deploy automatically"
echo ""
cd "$SCRIPT_DIR"
terraform output
