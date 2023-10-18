import Navbar from './components/navbar'
import './globals.css'
import { Rubik } from 'next/font/google'
import Footer from './section/footer/footer'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Bikick',
  description: 'the best bycicle in the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
