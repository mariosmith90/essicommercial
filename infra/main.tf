terraform {
  required_version = ">= 1.5"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 6.0"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "~> 6.0"
    }
  }
}

provider "google" {
  project               = var.project_id
  region                = var.region
  billing_project       = var.project_id
  user_project_override = true
}

provider "google-beta" {
  project               = var.project_id
  region                = var.region
  billing_project       = var.project_id
  user_project_override = true
}

# ── The Firebase project already exists (shared with brighthornmedia).
#    APIs are already enabled. We only add a new Hosting site, GCS bucket,
#    media-reader SA, and deployer SA.

# ── GCS Media Bucket ──────────────────────────────────────────────────────────

resource "google_storage_bucket" "media" {
  name                        = var.bucket_name
  location                    = var.bucket_location
  storage_class               = "STANDARD"
  uniform_bucket_level_access = true
  force_destroy               = false

  versioning {
    enabled = false
  }

  cors {
    origin          = var.allowed_origins
    method          = ["GET", "HEAD", "OPTIONS"]
    response_header = ["Content-Type", "Cache-Control"]
    max_age_seconds = 3600
  }

  lifecycle_rule {
    condition {
      age = 365
    }
    action {
      type          = "SetStorageClass"
      storage_class = "NEARLINE"
    }
  }

  labels = {
    project     = "essicommercial"
    environment = var.environment
    managed_by  = "terraform"
  }
}

# ── Service account for signed URL generation ─────────────────────────────────

resource "google_service_account" "media_reader" {
  account_id   = "essi-media-reader"
  display_name = "EssiCommercial Media Reader"
  description  = "Used by the Cloud Function to generate signed URLs for GCS objects"
  project      = var.project_id
}

resource "google_storage_bucket_iam_member" "media_reader_access" {
  bucket = google_storage_bucket.media.name
  role   = "roles/storage.objectViewer"
  member = "serviceAccount:${google_service_account.media_reader.email}"
}

# ── Bucket folders (placeholder objects) ─────────────────────────────────────

resource "google_storage_bucket_object" "folder_projects" {
  name    = "projects/.keep"
  content = " "
  bucket  = google_storage_bucket.media.name
}

# ── Firebase Web App for EssiCommercial ──────────────────────────────────────

resource "google_firebase_web_app" "essi" {
  provider     = google-beta
  project      = var.project_id
  display_name = var.firebase_web_app_display_name
}

# ── Firebase Hosting site for EssiCommercial ─────────────────────────────────

resource "google_firebase_hosting_site" "site" {
  provider = google-beta
  project  = var.project_id
  site_id  = var.firebase_site_id
}

# ── GitHub Actions / deploy service account ───────────────────────────────────

resource "google_service_account" "github_deployer" {
  account_id   = "essicommercial-deployer"
  display_name = "EssiCommercial GitHub Deployer"
  description  = "Used by GitHub Actions to deploy to Firebase Hosting and Functions"
  project      = var.project_id
}

resource "google_project_iam_member" "github_deployer_firebase" {
  project = var.project_id
  role    = "roles/firebase.admin"
  member  = "serviceAccount:${google_service_account.github_deployer.email}"
}

resource "google_project_iam_member" "github_deployer_viewer" {
  project = var.project_id
  role    = "roles/viewer"
  member  = "serviceAccount:${google_service_account.github_deployer.email}"
}

# Allow deployer to update Cloud Run services (needed for env var patches)
resource "google_project_iam_member" "github_deployer_run_admin" {
  project = var.project_id
  role    = "roles/run.admin"
  member  = "serviceAccount:${google_service_account.github_deployer.email}"
}

# ── Project metadata ──────────────────────────────────────────────────────────

data "google_project" "project" {}

# Allow deployer to act-as the default compute SA (required for Cloud Run deploys)
resource "google_service_account_iam_member" "deployer_act_as_compute" {
  service_account_id = "projects/${var.project_id}/serviceAccounts/${data.google_project.project.number}-compute@developer.gserviceaccount.com"
  role               = "roles/iam.serviceAccountUser"
  member             = "serviceAccount:${google_service_account.github_deployer.email}"
}

