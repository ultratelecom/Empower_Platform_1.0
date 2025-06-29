'use client'

import React from 'react'
import Link from 'next/link'

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header with Login Link */}
      <header className="absolute top-0 right-0 p-6">
        <Link 
          href="/login" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Login
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img src="/logo.png" alt="EMPOWER Logo" className="h-32 md:h-40 w-auto mx-auto" />
          </div>

          {/* Hero Text */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empower Your Creative Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join Tobago's premier creative development program. Learn from industry experts, 
              build your skills, and transform your artistic vision into a thriving career.
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Register now for exclusive access to masterclasses, workshops, and creative resources.
            </p>
            
            {/* Tally Form Embed */}
            <div className="w-full">
              <iframe 
                data-tally-src="https://tally.so/embed/nPNB0b?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="310" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Empower - Tobago Creatives"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Masterclasses</h3>
              <p className="text-gray-600">Learn from industry professionals with proven track records</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Development</h3>
              <p className="text-gray-600">Build the skills and network needed for creative success</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌴</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tobago Community</h3>
              <p className="text-gray-600">Connect with fellow creatives in our vibrant island community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2024 EMPOWER - Tobago Creative Development Program. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 