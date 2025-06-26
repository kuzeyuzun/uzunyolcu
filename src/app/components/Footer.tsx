export function Footer() {
  return (
    <footer className="mt-16 text-center text-slate-400 py-8">
      &copy; {new Date().getFullYear()} UzunYolcu | <a href="/about" className="text-sky-400 hover:text-sky-300">Hakkımızda</a>
    </footer>
  )
}