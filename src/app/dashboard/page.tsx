'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import { FileUpload } from '../../components/ui'

export default function DashboardPage() {
  const [form, setForm] = useState({
    fullName: '',
    stageName: '',
    photos: [] as File[],
    instagram: '',
    youtube: '',
    spotify: '',
    apple: '',
    website: '',
    managerContact: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    if (files) {
      setForm({ ...form, [name]: Array.from(files) })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    // Redirect to masterclasses page after successful submission
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

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Artist Profile Upload Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Artist Profile Upload</h2>
          <p className="text-gray-600 mb-8">Complete your profile to unlock masterclasses and grow your career</p>
          
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="stageName" className="block text-sm font-medium text-gray-700 mb-2">
                  Stage Name / Artist Name
                </label>
                <input
                  id="stageName"
                  name="stageName"
                  type="text"
                  placeholder="Enter your artist name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={form.stageName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Professional Photos (2-3 photos)
              </label>
              <FileUpload
                onFilesChange={(files) => setForm({ ...form, photos: files })}
                accept="image/*"
                multiple={true}
                maxFiles={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram Handle
                </label>
                <input
                  id="instagram"
                  name="instagram"
                  type="text"
                  placeholder="@yourusername"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={form.instagram}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="youtube" className="block text-sm font-medium text-gray-700 mb-2">
                  YouTube Link
                </label>
                <input
                  id="youtube"
                  name="youtube"
                  type="url"
                  placeholder="https://youtube.com/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={form.youtube}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="spotify" className="block text-sm font-medium text-gray-700 mb-2">
                  Spotify Link
                </label>
                <input
                  id="spotify"
                  name="spotify"
                  type="url"
                  placeholder="https://open.spotify.com/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={form.spotify}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="apple" className="block text-sm font-medium text-gray-700 mb-2">
                  Apple Music Link
                </label>
                <input
                  id="apple"
                  name="apple"
                  type="url"
                  placeholder="https://music.apple.com/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={form.apple}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Personal Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="managerContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Manager Contact Info
                </label>
                <input
                  id="managerContact"
                  name="managerContact"
                  type="text"
                  placeholder="manager@email.com or phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={form.managerContact}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Submit Profile
              </button>
              <button
                type="button"
                onClick={() => window.location.href = '/masterclasses'}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Skip for now - Go to Masterclasses
              </button>
            </div>
          </form>
        </div>


      </div>
    </div>
  )
} 