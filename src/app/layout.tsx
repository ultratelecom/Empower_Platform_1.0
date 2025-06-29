import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EMPOWER - Tobago Creative Development Program',
  description: 'Join Tobago\'s premier creative development program. Learn from industry experts, build your skills, and transform your artistic vision into a thriving career.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script 
          async 
          src="https://tally.so/widgets/embed.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          id="tally-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
            `
          }}
        />
      </body>
    </html>
  )
} 