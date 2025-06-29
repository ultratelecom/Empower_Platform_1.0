'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login page
    router.push('/login')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="EMPOWER Logo" className="h-48 w-auto" />
        </div>
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    </div>
  )
} 