'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleTryNow = () => {
    // Use environment variable for Frames app URL
    const framesUrl = process.env.NEXT_PUBLIC_FRAMES_URL || 'https://frames-koech-labs.onrender.com';
    window.location.href = framesUrl;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#002e51' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-2">
              <Image
                src="/logos/logo.png"
                alt="Koech Labs Logo"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <h1 className="text-xl font-bold text-white">Koech Labs</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About</a>
              <button
                onClick={handleTryNow}
                className="text-white px-3 py-2 rounded-lg hover:opacity-80 transition-all duration-200 font-semibold text-sm"
                style={{ backgroundColor: '#ff4940' }}
              >
                Try it now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <div className="inline-flex items-center px-3 py-1 backdrop-blur-sm rounded-full text-xs mb-4" style={{ backgroundColor: '#ff4940', color: 'white' }}>
              ⭐ Professional Design Platform
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Create Stunning
              <br />
              <span style={{ color: '#ff4940' }}>
                Social Media Content
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Design professional graphics for Instagram, LinkedIn, Twitter, and TikTok with our intuitive drag-and-drop canvas. No design experience required.
            </p>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-10">
            <button
              onClick={handleTryNow}
              className="group text-white px-6 py-3 rounded-lg text-lg font-bold hover:opacity-80 transition-all duration-200 transform hover:scale-102 shadow-xl flex items-center space-x-2"
              style={{ backgroundColor: '#ff4940' }}
            >
              <span>Try it now - Free</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>

          {/* Feature Preview Cards */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm rounded-lg p-4 border border-white/20" style={{ backgroundColor: '#003a63' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#ff4940' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-white text-base font-bold mb-2">Frames</h3>
              <p className="text-gray-300 text-sm mb-2">Professional design canvas with drag-and-drop functionality</p>
              <span className="inline-block text-white px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#28a745' }}>
                Available Now
              </span>
            </div>
            <div className="backdrop-blur-sm rounded-lg p-4 border border-white/10" style={{ backgroundColor: '#001a2e' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#6c757d' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-gray-300 text-base font-bold mb-2">Stacks</h3>
              <p className="text-gray-400 text-sm mb-2">AI-powered carousel builder for engaging content</p>
              <span className="inline-block text-white px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#ffc107' }}>
                Coming Soon
              </span>
            </div>
            <div className="backdrop-blur-sm rounded-lg p-4 border border-white/10" style={{ backgroundColor: '#001a2e' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#6c757d' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-gray-300 text-base font-bold mb-2">Muse</h3>
              <p className="text-gray-400 text-sm mb-2">AI content assistant for optimized posts</p>
              <span className="inline-block text-white px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#ffc107' }}>
                Coming Soon
              </span>
            </div>
          </div>
        </div>

        {/* Background Effects - Reduced */}
        <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(255, 73, 64, 0.08)' }}></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(0, 46, 81, 0.2)' }}></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#001a2e' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Professional Design Made Simple
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to create stunning social media content, all in one intuitive platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ff4940' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">Multi-Platform Design</h3>
                  <p className="text-gray-300 text-sm">Create content optimized for Instagram, LinkedIn, Twitter, and TikTok with pre-sized templates.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ff4940' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">Drag & Drop Interface</h3>
                  <p className="text-gray-300 text-sm">Intuitive design tools that anyone can use - no design experience required.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ff4940' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">Brand Management</h3>
                  <p className="text-gray-300 text-sm">Upload your brand assets, colors, and fonts to maintain consistent branding across all designs.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl p-6 backdrop-blur-sm border border-white/10" style={{ backgroundColor: '#003a63' }}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#ff4940' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">Ready to Create?</h3>
                  <p className="text-gray-300 mb-4 text-sm">Join creators worldwide who trust Koech Labs for their social media content.</p>
                  <button
                    onClick={handleTryNow}
                    className="text-white px-6 py-2 rounded-lg font-bold hover:opacity-80 transition-all duration-200 flex items-center space-x-2 mx-auto text-sm"
                    style={{ backgroundColor: '#ff4940' }}
                  >
                    <span>Start Designing Now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Built for Modern Creators
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Koech Labs is a comprehensive creator platform that combines professional design tools with AI-powered features. Start with <strong>Frames</strong>, our professional design canvas available now, and stay tuned for revolutionary AI tools coming soon.
          </p>
          <div className="rounded-xl p-6 backdrop-blur-sm border border-white/10" style={{ backgroundColor: '#003a63' }}>
            <h3 className="text-white text-xl font-bold mb-4">🚀 Coming Soon: AI-Powered Tools</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-bold text-base" style={{ color: '#ff4940' }}>Stacks - AI Carousel Builder</h4>
                <p className="text-gray-300 text-sm">Automatically generate engaging carousel posts with AI-powered content suggestions and smart layout optimization.</p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• AI content generation</li>
                  <li>• Smart layout suggestions</li>
                  <li>• Multi-slide optimization</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-base" style={{ color: '#ff4940' }}>Muse - AI Content Assistant</h4>
                <p className="text-gray-300 text-sm">Generate and optimize content with AI, integrate with social platforms for seamless publishing workflows.</p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• AI copywriting</li>
                  <li>• Content optimization</li>
                  <li>• Social platform integration</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={handleTryNow}
                className="text-white px-6 py-2 rounded-lg font-bold hover:opacity-80 transition-all duration-200 text-sm"
                style={{ backgroundColor: '#ff4940' }}
              >
                Try Frames Now - Available Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/logos/logo.png"
                alt="Koech Labs Logo"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-white font-bold text-lg">Koech Labs</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleTryNow}
                className="transition-colors font-semibold hover:opacity-80 text-sm"
                style={{ color: '#ff4940' }}
              >
                Try Frames
              </button>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-sm">© 2024 Koech Labs. All rights reserved.</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-xs">
              Professional design platform for modern creators. Start with Frames today.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
