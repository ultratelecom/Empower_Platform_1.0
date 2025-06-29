'use client'

import React from 'react'
import Link from 'next/link'

export default function SplashPage() {
  return (
    <div className="h-screen bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      {/* Header with Login Link */}
      <header className="absolute top-0 right-0 p-4 z-10">
        <Link 
          href="/login" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
        >
          Login
        </Link>
      </header>

      {/* Main Content - Single Screen Layout */}
      <div className="h-screen flex flex-col justify-center px-4 md:px-6">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Top Section: Logo + Hero */}
          <div className="text-center mb-6">
            <img src="/logo.png" alt="EMPOWER Logo" className="h-20 md:h-24 w-auto mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Empower Your Creative Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Join Tobago's premier creative development program and transform your artistic vision into a thriving career.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left: Registration Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Register now for exclusive access to masterclasses and creative resources.
              </p>
              
              {/* Tally Form Embed */}
              <div className="w-full">
                <iframe 
                  data-tally-src="https://tally.so/embed/nPNB0b?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="280" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Empower - Tobago Creatives"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Right: Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Get:</h3>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Masterclasses</h4>
                  <p className="text-gray-600 text-sm">Learn from industry professionals with proven track records</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Career Development</h4>
                  <p className="text-gray-600 text-sm">Build the skills and network needed for creative success</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌴</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tobago Community</h4>
                  <p className="text-gray-600 text-sm">Connect with fellow creatives in our vibrant island community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Quick Stats or CTA */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              &copy; 2025 EMPOWER - Tobago Creative Development Program • Made in Tobago with ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 