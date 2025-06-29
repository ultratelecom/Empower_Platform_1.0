'use client';

import React, { useState } from 'react'
import Link from 'next/link'

interface Module {
  id: number
  title: string
  duration: string
  completed?: boolean
}

interface Masterclass {
  id: number
  title: string
  description: string
  modules: Module[]
  unlocked: boolean
  icon: string
}

export default function MasterclassesPage() {
  const [expandedClass, setExpandedClass] = useState<number | null>(null)

  const masterclasses: Masterclass[] = [
    {
      id: 1,
      title: 'Website Design Masterclass',
      description: 'Learn to build a professional website that converts visitors into fans and customers.',
      unlocked: true,
      icon: '🌐',
      modules: [
        { id: 1, title: 'Planning Your Website Strategy', duration: '45 min' },
        { id: 2, title: 'Choosing the Right Platform', duration: '30 min' },
        { id: 3, title: 'Design Principles for Musicians', duration: '60 min' },
        { id: 4, title: 'Content That Converts', duration: '50 min' },
        { id: 5, title: 'Launch and Optimization', duration: '40 min' }
      ]
    },
    {
      id: 2,
      title: 'Facebook Targeted Marketing',
      description: 'Master Facebook and Instagram advertising to reach your ideal audience and grow your fanbase.',
      unlocked: false,
      icon: '📱',
      modules: [
        { id: 1, title: 'Understanding Your Audience', duration: '35 min' },
        { id: 2, title: 'Creating Compelling Ad Content', duration: '45 min' },
        { id: 3, title: 'Advanced Targeting Strategies', duration: '55 min' },
        { id: 4, title: 'Budget Optimization', duration: '40 min' },
        { id: 5, title: 'Analytics and Scaling', duration: '50 min' }
      ]
    },
    {
      id: 3,
      title: 'Collecting All Your Royalties',
      description: 'Ensure you receive every penny owed to you from streaming, radio, and performance royalties.',
      unlocked: false,
      icon: '💰',
      modules: [
        { id: 1, title: 'Understanding Royalty Types', duration: '40 min' },
        { id: 2, title: 'Setting Up Collection Societies', duration: '35 min' },
        { id: 3, title: 'Digital Platform Royalties', duration: '45 min' },
        { id: 4, title: 'International Royalty Collection', duration: '50 min' },
        { id: 5, title: 'Maximizing Your Earnings', duration: '45 min' }
      ]
    },
    {
      id: 4,
      title: 'Building a Strong Fan Base',
      description: 'Develop authentic connections with fans and build a community that supports your music career.',
      unlocked: false,
      icon: '👥',
      modules: [
        { id: 1, title: 'Fan Psychology and Engagement', duration: '50 min' },
        { id: 2, title: 'Social Media Community Building', duration: '45 min' },
        { id: 3, title: 'Email Marketing for Musicians', duration: '40 min' },
        { id: 4, title: 'Live Event Engagement', duration: '55 min' },
        { id: 5, title: 'Retention and Loyalty Strategies', duration: '45 min' }
      ]
    },
    {
      id: 5,
      title: 'Selling Yourself Internationally',
      description: 'Expand your reach globally and navigate international music markets successfully.',
      unlocked: false,
      icon: '🌍',
      modules: [
        { id: 1, title: 'International Market Research', duration: '45 min' },
        { id: 2, title: 'Cultural Adaptation Strategies', duration: '50 min' },
        { id: 3, title: 'Global Distribution Channels', duration: '40 min' },
        { id: 4, title: 'International Collaboration', duration: '55 min' },
        { id: 5, title: 'Touring and Promotion Abroad', duration: '60 min' }
      ]
    }
  ]

  const toggleExpansion = (classId: number) => {
    if (!masterclasses.find(mc => mc.id === classId)?.unlocked) return
    setExpandedClass(expandedClass === classId ? null : classId)
  }

  const startMasterclass = (classId: number) => {
    if (classId === 1) {
      window.location.href = '/masterclasses/website-design/enrollment'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo.png" alt="EMPOWER Logo" className="h-20 w-auto" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Artist</span>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Masterclasses</h1>
          <p className="text-gray-600">Accelerate your music career with our comprehensive training programs</p>
        </div>

        <div className="space-y-4">
          {masterclasses.map((masterclass) => (
            <div
              key={masterclass.id}
              className={`border rounded-lg transition-all duration-200 ${
                masterclass.unlocked
                  ? 'border-gray-200 hover:border-purple-300 bg-white'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              {/* Masterclass Header */}
              <div
                className={`p-6 ${masterclass.unlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                onClick={() => toggleExpansion(masterclass.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      masterclass.unlocked ? 'bg-purple-100' : 'bg-gray-100'
                    }`}>
                      <span className="text-2xl">{masterclass.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className={`text-xl font-semibold ${
                          masterclass.unlocked ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {masterclass.title}
                        </h3>
                        {masterclass.unlocked ? (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Available
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-full text-xs font-medium">
                            🔒 Locked
                          </span>
                        )}
                      </div>
                      <p className={`mt-1 ${
                        masterclass.unlocked ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {masterclass.description}
                      </p>
                    </div>
                  </div>
                  
                  {masterclass.unlocked && (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          startMasterclass(masterclass.id)
                        }}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                      >
                        Start Course
                      </button>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          expandedClass === masterclass.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded Modules */}
              {expandedClass === masterclass.id && masterclass.unlocked && (
                <div className="border-t border-gray-200 bg-gray-50">
                  <div className="p-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Course Modules</h4>
                    <div className="space-y-3">
                      {masterclass.modules.map((module, index) => (
                        <div
                          key={module.id}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 text-sm font-medium">{index + 1}</span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{module.title}</p>
                              <p className="text-sm text-gray-500">{module.duration}</p>
                            </div>
                          </div>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m2 4h10a2 2 0 002-2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 