import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Pua Gonzalo',
  description: 'Hi! This is my portfolio projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/djngnnxvp/image/upload/v1695910559/onlylogo_j5wxiv.png" />
        <meta property="og:title" content="Portfolio | Pua Gonzalo" />
        <meta property="og:description" content={metadata.description!} />
        <meta property="og:image" content="https://res.cloudinary.com/djngnnxvp/image/upload/v1695910120/completelogo_pikj3i.png" />
      </head>

      <body className={inter.className}>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
