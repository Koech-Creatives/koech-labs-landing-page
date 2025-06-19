# Koech Labs - Landing Page

A modern, professional landing page for the Koech Labs design platform. This serves as the main entry point that drives users to try the Frames design canvas.

## 🎯 Purpose

This landing page:
- Introduces visitors to the Koech Labs platform
- Showcases the available Frames design tool
- Builds anticipation for upcoming AI tools (Stacks & Muse)
- Drives conversions with prominent "Try it now" CTAs

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## 🔗 Connection to Canvas App

The landing page connects to your main canvas application through:

### CTA Button Function
```javascript
const handleTryNow = () => {
  // Update this URL to your actual canvas app
  window.open('https://koech-design-lab.vercel.app', '_blank');
};
```

### Current Connection Points
- **Header CTA**: "Try it now" button in navigation
- **Hero CTA**: Main "Try it now - Free" button in hero section
- **Features CTA**: "Start Designing Now" button in features section
- **About CTA**: "Try Frames Now" button in about section
- **Footer CTA**: "Try Frames" link in footer

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach
- **Modern Gradients**: Blue-to-purple theme matching canvas app
- **Interactive Elements**: Hover effects and smooth transitions
- **Clear Hierarchy**: Focused on driving users to try the canvas
- **Performance Optimized**: Fast loading with Next.js

## 📋 Content Structure

### Hero Section
- Compelling headline about social media design
- Clear value proposition
- Prominent CTA buttons
- Three-tool preview cards

### Features Section
- Multi-platform design capabilities
- Drag & drop interface highlights
- Brand management features
- Secondary CTA placement

### About Section
- Platform overview
- Coming soon AI tools preview
- Final conversion opportunity

## 🔧 Customization

### Update Canvas App URL
In `src/app/page.tsx`, update the URL in the `handleTryNow` function:

```javascript
const handleTryNow = () => {
  // Replace with your actual canvas app URL
  window.open('https://your-canvas-app-domain.com', '_blank');
};
```

### Branding Customization
- Update logo in navigation (`public/` folder)
- Modify colors in Tailwind classes
- Adjust messaging in content sections

## 🌐 Deployment

### Recommended: Vercel
```bash
# Connect to Vercel
vercel

# Follow prompts to deploy
```

### Alternative: Netlify
```bash
# Build for production
npm run build

# Deploy dist folder to Netlify
```

## 📊 Analytics Integration

Add analytics tracking to measure conversion from landing page to canvas app:

```javascript
// Google Analytics example
const handleTryNow = () => {
  gtag('event', 'try_frames', {
    'event_category': 'engagement',
    'event_label': 'landing_page_cta'
  });
  window.open('https://your-canvas-app.com', '_blank');
};
```

## 🎯 Success Metrics

Track these key metrics:
- **Landing page visits** → Canvas app conversions
- **CTA click rates** across different sections
- **Time on page** and engagement metrics
- **Mobile vs desktop** conversion rates

## 📱 Mobile Optimization

The landing page is fully responsive with:
- Touch-friendly CTA buttons
- Optimized text sizes
- Mobile-first design approach
- Fast loading on mobile networks

## 🔄 Future Updates

As you develop Stacks and Muse:
1. Update "Coming Soon" badges to "Available Now"
2. Add direct links to new tools
3. Create dedicated landing pages for each tool
4. A/B test different messaging approaches

---

## 🔗 Related Projects

- **Canvas App**: Your main design application (Frames)
- **Stacks**: AI Carousel Builder (coming soon)
- **Muse**: AI Content Assistant (coming soon)

## 📞 Support

For questions about the landing page setup or canvas app integration, refer to the main project documentation.
# koech-labs-landing-page
