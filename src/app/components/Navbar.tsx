import Link from "next/link"

export function Navbar() {
  return (
    <nav className="flex gap-6 items-center py-6 justify-center bg-transparent">
      <Link href="/" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 text-2xl hover:scale-110 transition-transform">UzunYolcu</Link>
      <Link href="/ingilizce" className="hover:text-sky-400 transition-colors">İngilizce</Link>
      <Link href="/islam" className="hover:text-purple-300 transition-colors">İslam</Link>
      <Link href="/saglik" className="hover:text-green-300 transition-colors">Sağlık</Link>
      <Link href="/digital" className="hover:text-yellow-300 transition-colors">Dijital</Link>
      <Link href="/about" className="hover:text-orange-300 transition-colors">Hakkımızda</Link>
    </nav>
  )
}