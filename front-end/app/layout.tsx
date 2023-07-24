import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '30MinShop',
  description: 'Welcome to 30MinShop - Your Ultimate Store Builder Solution! Create your dream online store effortlessly and in record time with our intuitive platform. Explore an array of customizable templates, seamless integrations, and user-friendly tools, empowering you to showcase and sell your products with ease. Launch your business in just 30 minutes, and unlock the potential to reach millions of customers worldwide. Experience the future of e-commerce with 30MinShop today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
