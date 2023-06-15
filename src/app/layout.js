import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-Js',
  description: 'Next-Js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
       </nav>
        {children}
        <footer>Footer</footer>
        </body>
    </html>
  )
}
