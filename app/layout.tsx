import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Enviro-Hub',
  description: 'Enviro-Hub is a platform for learning about environmental issues and how to live a more sustainable life.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
