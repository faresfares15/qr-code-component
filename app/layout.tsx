import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QR Code Challenge',
  description: 'Frontend Mentor QR Code Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-outfit bg-[#D2E1F1]">{children}</body>
    </html>
  )
}
