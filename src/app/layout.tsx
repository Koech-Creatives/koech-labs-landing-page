import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilmer = localFont({
  src: [
    {
      path: '../../public/fonts/Gilmer-Heavy.otf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-gilmer',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Koech Labs - Professional Social Media Design Platform",
  description: "Create stunning social media content with our professional design platform. Frames, Stacks, and Muse - everything you need for engaging content.",
};

import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta SEO Essentials */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Create stunning social media content with our professional design platform. Frames, Stacks, and Muse - everything you need for engaging content." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Koech Labs Team" />
        <meta name="theme-color" content="#002e51" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="Koech Labs | Custom Software, SaaS, Mobile App & Web Development Agency" />
        <meta property="og:description" content="Koech Labs specializes in custom software development, SaaS products, mobile app solutions, and web design for visionary businesses." />
        <meta property="og:url" content="https://koechlabs.com/" />
        <meta property="og:image" content="https://koechlabs.com/logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Koech Labs | Custom Software, SaaS, Mobile App & Web Development Agency" />
        <meta name="twitter:description" content="Koech Labs specializes in custom software development, SaaS products, mobile app solutions, and web design for visionary businesses." />
        <meta name="twitter:image" content="https://koechlabs.com/logo.png" />
        <meta name="twitter:site" content="@koechlabs" />

        {/* --- Organization Schema --- */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Koech Labs",
            "url": "https://koechlabs.com",
            "logo": "https://koechlabs.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254-XXX-XXXXXX",
              "contactType": "Customer Support"
            },
            "sameAs": [
              "https://linkedin.com/company/koech-labs",
              "https://twitter.com/koechlabs"
            ]
          }
        `}</Script>

        {/* --- WebSite with Sitelinks SearchAction --- */}
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://koechlabs.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://koechlabs.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</Script>

        {/* --- BreadcrumbList example --- */}
        <Script id="ld-breadcrumb" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://koechlabs.com/" }
            ]
          }
        `}</Script>

        {/* --- ContactPoint (can add/duplicate where needed) --- */}
        <Script id="ld-contact" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "telephone": "+254-XXX-XXXXXX",
            "contactType": "customer support",
            "email": "info@koechlabs.com",
            "url": "https://koechlabs.com/contact"
          }
        `}</Script>

        {/* --- AggregateRating example (update as needed) --- */}
        <Script id="ld-agg-rating" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Koech Labs",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "24"
            }
          }
        `}</Script>

        {/* --- Service schema (for all primary services as examples) --- */}
        <Script id="ld-service-saas" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "SaaS Product Development",
            "provider": { "@type": "Organization", "name": "Koech Labs" },
            "areaServed": "Nairobi, Kenya",
            "description": "Custom SaaS development for growing enterprises."
          }
        `}</Script>
        <Script id="ld-service-mobile" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Mobile App Development",
            "provider": { "@type": "Organization", "name": "Koech Labs" },
            "areaServed": "Nairobi, Kenya",
            "description": "End-to-end iOS & Android app development for businesses. Native and cross-platform mobile solutions, from design to deployment."
          }
        `}</Script>
        <Script id="ld-service-web" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Website Design and Development",
            "provider": { "@type": "Organization", "name": "Koech Labs" },
            "areaServed": "Nairobi, Kenya",
            "description": "Responsive websites, e-commerce stores, landing pages, brand sites, and web portals that drive results."
          }
        `}</Script>
        <Script id="ld-service-automation" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Business Process Automation",
            "provider": { "@type": "Organization", "name": "Koech Labs" },
            "areaServed": "Nairobi, Kenya",
            "description": "We automate workflows and business processes with SaaS, custom integrations, and low-code solutions to boost productivity."
          }
        `}</Script>

        {/* --- SoftwareApplication schema (main SaaS app) --- */}
        <Script id="ld-softwareapp" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Frames SaaS Design Canvas",
            "operatingSystem": "Web",
            "applicationCategory": "DesignApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "26"
            }
          }
        `}</Script>

        {/* --- Product/Offer schema (example for SaaS/free plan) --- */}
        <Script id="ld-product-offer" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Frames (SaaS Design Tool)",
            "image": "https://koechlabs.com/logo.png",
            "description": "Launch, design, and optimize content with Frames by Koech Labs.",
            "brand": { "@type": "Brand", "name": "Koech Labs" },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "url": "https://koechlabs.com/"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "26"
            }
          }
        `}</Script>

        {/* --- FAQPage schema --- */}
        <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Koech Labs provide?",
                "acceptedAnswer": { "@type": "Answer", "text": "We offer custom software, SaaS, mobile apps, and website design for enterprise clients." }
              },
              {
                "@type": "Question",
                "name": "Where is Koech Labs located?",
                "acceptedAnswer": { "@type": "Answer", "text": "We are based in Nairobi, Kenya and serve global clients remotely." }
              },
              {
                "@type": "Question",
                "name": "Do you build mobile apps?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, we develop custom iOS and Android apps for business growth." }
              }
            ]
          }
        `}</Script>

        {/* --- HowTo schema --- */}
        <Script id="ld-howto" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Start a SaaS Project with Koech Labs",
            "step": [
              { "@type": "HowToStep", "name": "Contact Us", "text": "Reach out via our website or email for a discovery meeting." },
              { "@type": "HowToStep", "name": "Get a Proposal", "text": "We’ll recommend a solution and give you a quote." },
              { "@type": "HowToStep", "name": "Kickoff Workshop", "text": "Your digital transformation begins with our team." }
            ]
          }
        `}</Script>

        {/* --- BlogPosting/Article example --- */}
        <Script id="ld-blogposting" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Why Choose Custom Software for Your Business?",
            "author": { "@type": "Person", "name": "Koech Labs Team" },
            "datePublished": "2025-07-09",
            "description": "Discover the advantages of custom software, SaaS, and digital solutions.",
            "image": "https://koechlabs.com/logo.png"
          }
        `}</Script>

        {/* --- ImageObject and VideoObject schema (examples) --- */}
        <Script id="ld-imageobj" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": "https://koechlabs.com/logo.png",
            "caption": "Koech Labs Logo"
          }
        `}</Script>
        <Script id="ld-videoobj" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Koech Labs SaaS Explainer",
            "description": "Learn how Koech Labs solves business challenges with custom SaaS.",
            "thumbnailUrl": "https://koechlabs.com/logo.png",
            "uploadDate": "2025-07-09"
          }
        `}</Script>
      </head>
      <body
        className={`${gilmer.variable} antialiased`}
        style={{ fontFamily: 'var(--font-gilmer), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
