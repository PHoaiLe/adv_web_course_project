import { Inter } from 'next/font/google'
import '../globals.css'
//import WebTopNavBar from '@/components/main/top_nav_bar/TopNavBar'
import Footer from '@/components/main/footer/Footer'
import TopNavBar from '@/components/main/top_nav_bar_2/TopNavBar'

const inter = Inter({ subsets: ['latin'] })
const top_nav_bar_key = "top_nav_bar_key"
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TopNavBar/>
        {children}
      </body>
      <Footer/>
    </html>
  )
}
