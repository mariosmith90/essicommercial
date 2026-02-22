output "bucket_name" {
  description = "Name of the GCS media bucket"
  value       = google_storage_bucket.media.name
}

output "bucket_url" {
  description = "Base URL to access objects in the bucket"
  value       = "https://storage.googleapis.com/${google_storage_bucket.media.name}"
}

output "media_reader_email" {
  description = "Service account email used for signed URL generation"
  value       = google_service_account.media_reader.email
}

output "firebase_site_id" {
  description = "Firebase Hosting site ID"
  value       = google_firebase_hosting_site.site.site_id
}

output "firebase_essi_web_app_id" {
  description = "Firebase Web App ID for EssiCommercial"
  value       = google_firebase_web_app.essi.app_id
}

output "firebase_hosting_default_url" {
  description = "Default Firebase Hosting URL"
  value       = "https://${google_firebase_hosting_site.site.site_id}.web.app"
}

output "github_deployer_email" {
  description = "Service account email for GitHub Actions deployment"
  value       = google_service_account.github_deployer.email
}
