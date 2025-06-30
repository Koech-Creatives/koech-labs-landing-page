# Koech Labs Landing Page

A modern landing page for Koech Labs showcasing "One Design to All Platforms" concept.

## Local Development

To run the site locally:

```bash
npm install
npm run dev
```

Then visit `http://localhost:5173` in your browser.

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

## Deployment on Render

This site is configured for easy deployment on [Render](https://render.com).

### Automatic Deployment (Recommended)

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
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Environment**: Static Site
5. Click "Create Static Site"

## Custom Domain

To use a custom domain with your Render deployment:

1. Go to your site's dashboard in Render
2. Click on "Settings" and then "Custom Domain"
3. Follow the instructions to add and verify your domain

## Troubleshooting Render Deployments

If you see errors during deployment:

1. Make sure your repository has the correct `render.yaml` configuration
2. Check that the `staticPublishPath` in `render.yaml` points to the correct build output folder (`./dist`)
3. Verify that your package.json has the necessary scripts for building the site
4. For static sites, no start script is needed - Render will serve the files directly 