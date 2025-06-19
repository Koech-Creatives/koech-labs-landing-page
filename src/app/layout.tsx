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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilmer.variable} antialiased`}
        style={{ fontFamily: 'var(--font-gilmer), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
