# Koech Labs Landing Page

A modern landing page for Koech Labs showcasing "One Design to All Platforms" concept.

## Local Development

To run the site locally:

```bash
python -m http.server
```

Then visit `http://localhost:8000` in your browser.

## Deployment on Render

This site is configured for easy deployment on [Render](https://render.com).

### Automatic Deployment

1. Fork or push this repository to your GitHub account
2. Sign up for a Render account if you don't have one
3. In Render dashboard, click "New" and select "Blueprint"
4. Connect your GitHub account and select this repository
5. Render will automatically detect the `render.yaml` configuration
6. Click "Apply" to deploy the site

### Manual Deployment

1. Sign up for a Render account if you don't have one
2. In Render dashboard, click "New" and select "Static Site"
3. Connect your GitHub account and select this repository
4. Configure the following settings:
   - **Name**: koech-labs-landing (or your preferred name)
   - **Build Command**: Leave empty (or `echo "Static site, no build needed"`)
   - **Publish Directory**: `.` (root directory)
5. Click "Create Static Site"

## Custom Domain

To use a custom domain with your Render deployment:

1. Go to your site's dashboard in Render
2. Click on "Settings" and then "Custom Domain"
3. Follow the instructions to add and verify your domain 