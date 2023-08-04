import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  authors: {
    name: "Claire Squire",
  },
  description: 'Search for the weather in any city',
  keywords: ["weather", "search", "local", "city"],
  title: 'Weather for ducks?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
