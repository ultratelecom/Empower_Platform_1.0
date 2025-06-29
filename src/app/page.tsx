'use client'

import React from 'react'
import Link from 'next/link'

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header with Login Link */}
      <header className="absolute top-0 right-0 p-4 z-10">
        <Link 
          href="/login" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
        >
          Login
        </Link>
      </header>

      {/* Main Content - Responsive Layout */}
      <div className="min-h-screen flex flex-col justify-center px-4 md:px-6 py-20 md:py-8">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Top Section: Logo + Hero */}
          <div className="text-center mb-6 md:mb-4">
            <img src="/logo.png" alt="EMPOWER Logo" className="h-14 md:h-20 w-auto mx-auto mb-3" />
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Empower Your Creative Journey
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mb-4 max-w-3xl mx-auto px-2">
              Join Tobago's premier creative development program and transform your artistic vision into a thriving career.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start mb-4">
            
            {/* Left: Registration Form */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-5 order-2 lg:order-1">
              <h2 className="text-base md:text-xl font-bold text-gray-900 mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-3 text-xs md:text-sm">
                Register now for exclusive access to masterclasses and creative resources.
              </p>
              
              {/* Tally Form Embed */}
              <div className="w-full">
                <iframe 
                  data-tally-src="https://tally.so/embed/nPNB0b?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="200" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Empower - Tobago Creatives"
                  className="rounded-lg md:h-60"
                />
              </div>
            </div>

            {/* Right: Features */}
            <div className="space-y-2 md:space-y-3 order-1 lg:order-2">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">What You'll Get:</h3>
              
              <div className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-lg">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">Expert Masterclasses</h4>
                  <p className="text-gray-600 text-xs hidden md:block">Learn from industry professionals with proven track records</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-lg">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">Career Development</h4>
                  <p className="text-gray-600 text-xs hidden md:block">Build the skills and network needed for creative success</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-lg">🌴</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">Tobago Community</h4>
                  <p className="text-gray-600 text-xs hidden md:block">Connect with fellow creatives in our vibrant island community</p>
                </div>
              </div>

              {/* Topics Preview Section */}
              <div className="mt-3 md:mt-4">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Topics We'll Cover:</h3>
                <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                  <div className="bg-purple-50 px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-center">
                    <div className="text-sm md:text-lg mb-1">🌐</div>
                    <span className="text-xs font-medium text-purple-800">Website Design</span>
                  </div>
                  <div className="bg-purple-50 px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-center">
                    <div className="text-sm md:text-lg mb-1">💰</div>
                    <span className="text-xs font-medium text-purple-800">Collect Royalties</span>
                  </div>
                  <div className="bg-purple-50 px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-center">
                    <div className="text-sm md:text-lg mb-1">🎵</div>
                    <span className="text-xs font-medium text-purple-800">Music Production</span>
                  </div>
                  <div className="bg-purple-50 px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-center">
                    <div className="text-sm md:text-lg mb-1">🏆</div>
                    <span className="text-xs font-medium text-purple-800">Brand Building</span>
                  </div>
                  <div className="bg-purple-50 px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-center">
                    <div className="text-sm md:text-lg mb-1">📱</div>
                    <span className="text-xs font-medium text-purple-800">Social Media</span>
                  </div>
                  <div className="bg-purple-50 px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-center">
                    <div className="text-sm md:text-lg mb-1">⚖️</div>
                    <span className="text-xs font-medium text-purple-800">Copyright Law</span>
                  </div>
                  <div className="bg-purple-50 px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-center">
                    <div className="text-sm md:text-lg mb-1">🎤</div>
                    <span className="text-xs font-medium text-purple-800">Live Performance</span>
                  </div>
                  <div className="bg-purple-50 px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-center">
                    <div className="text-sm md:text-lg mb-1">💼</div>
                    <span className="text-xs font-medium text-purple-800">Business Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Quick Stats or CTA */}
          <div className="text-center mt-4 md:mt-6">
            <p className="text-xs text-gray-500 px-2">
              &copy; 2025 EMPOWER - Tobago Creative Development Program • Made in Tobago with ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 