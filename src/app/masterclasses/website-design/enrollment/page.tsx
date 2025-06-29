'use client';

import React, { useState } from 'react'

export default function WebsiteDesignEnrollment() {
  const [formData, setFormData] = useState({
    hasDomain: '',
    domainName: '',
    hasWebsite: '',
    websiteStatus: '',
    noWebsiteReason: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Enrollment submitted:', formData)
    alert('Successfully enrolled in Website Design Masterclass!')
    // Redirect to masterclass content or dashboard
    window.location.href = '/masterclasses'
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

      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🌐</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Website Design Masterclass</h1>
              <p className="text-gray-600">Enrollment Form</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Before we begin your journey to creating a professional website, we need to understand your current situation. 
            This helps us customize the course content to your specific needs.
          </p>
        </div>

        {/* Enrollment Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-8 space-y-6">
          {/* Domain Question */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-4">
              Do you already have a domain name for your website?
            </label>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasDomain"
                  value="yes"
                  checked={formData.hasDomain === 'yes'}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  required
                />
                <span className="ml-3 text-gray-700">Yes, I have a domain</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasDomain"
                  value="no"
                  checked={formData.hasDomain === 'no'}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  required
                />
                <span className="ml-3 text-gray-700">No, I need to get one</span>
              </label>
            </div>
          </div>

          {/* Domain Name Input */}
          {formData.hasDomain === 'yes' && (
            <div>
              <label htmlFor="domainName" className="block text-sm font-medium text-gray-700 mb-2">
                What is your domain name?
              </label>
              <input
                type="text"
                id="domainName"
                name="domainName"
                placeholder="e.g., yourartistname.com"
                value={formData.domainName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
          )}

          {/* Website Question */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-4">
              Do you currently have a website?
            </label>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasWebsite"
                  value="yes"
                  checked={formData.hasWebsite === 'yes'}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  required
                />
                <span className="ml-3 text-gray-700">Yes, I have a website</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasWebsite"
                  value="no"
                  checked={formData.hasWebsite === 'no'}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  required
                />
                <span className="ml-3 text-gray-700">No, I don't have a website</span>
              </label>
            </div>
          </div>

          {/* Website Status */}
          {formData.hasWebsite === 'yes' && (
            <div>
              <label htmlFor="websiteStatus" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us why your website is or isn't working for you
              </label>
              <textarea
                id="websiteStatus"
                name="websiteStatus"
                rows={4}
                placeholder="Describe your current website's strengths and challenges. What would you like to improve?"
                value={formData.websiteStatus}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
          )}

          {/* No Website Reason */}
          {formData.hasWebsite === 'no' && (
            <div>
              <label htmlFor="noWebsiteReason" className="block text-sm font-medium text-gray-700 mb-2">
                Why don't you have a website yet?
              </label>
              <textarea
                id="noWebsiteReason"
                name="noWebsiteReason"
                rows={4}
                placeholder="Tell us what has prevented you from creating a website. This helps us address your specific concerns in the course."
                value={formData.noWebsiteReason}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Enroll in Website Design Masterclass
            </button>
          </div>
        </form>

        {/* Course Preview */}
        <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">What you'll learn:</h3>
          <ul className="space-y-2 text-purple-800">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span>Strategic website planning for musicians</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span>Platform selection and setup</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span>Design principles that convert visitors to fans</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span>Content creation and optimization</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span>Launch strategies and ongoing optimization</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 