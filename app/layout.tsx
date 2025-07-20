import { type Metadata } from 'next'
import {
  ClerkProvider,
} from '@clerk/nextjs'


import './globals.css'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'Bhinochats',
  description: 'Safe and Fast is right here',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` antialiased`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}