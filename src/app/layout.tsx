import './globals.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export const metadata = {
  title: 'UzunYolcu',
  description: 'Öğrenmek isteyen herkes için sade ve güvenilir kaynaklar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-slate-100 font-sans transition-colors duration-500">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-8 animate-fadein">{children}</main>
        <Footer />
      </body>
    </html>
  )
}