import type { Metadata } from 'next'
import { Inter, Squada_One } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const squada_one = Squada_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: 'Memealo',
  description: 'The best meme cards game!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-martinique-950'>
      <body className={`${inter.className} ${squada_one.className}`}>
        {children}
      </body>
    </html>
  )
}
