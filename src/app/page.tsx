export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-slate-100 font-sans px-4">
      <header className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">UzunYolcu</h1>
        <span className="text-lg text-sky-300">Güvenilir ve sade içeriklerle öğrenmeye başla.</span>
      </header>

      <nav className="w-full max-w-md space-y-6">
        <a href="/ingilizce" className="block p-4 rounded-lg bg-sky-900 hover:bg-sky-800 transition font-semibold text-xl shadow mb-2">
          İngilizce
          <div className="text-sky-200 font-normal text-base">Temel seviye ve günlük İngilizce kaynakları</div>
        </a>
        <a href="/islam" className="block p-4 rounded-lg bg-emerald-900 hover:bg-emerald-800 transition font-semibold text-xl shadow mb-2">
          İslam
          <div className="text-emerald-200 font-normal text-base">İslam hakkında temel bilgiler ve rehberler</div>
        </a>
        <a href="/saglik" className="block p-4 rounded-lg bg-lime-900 hover:bg-lime-800 transition font-semibold text-xl shadow mb-2">
          Sağlık
          <div className="text-lime-200 font-normal text-base">Doğal sağlık, egzersiz ve beslenme içerikleri</div>
        </a>
        <a href="/digital" className="block p-4 rounded-lg bg-indigo-900 hover:bg-indigo-800 transition font-semibold text-xl shadow">
          Dijital
          <div className="text-indigo-200 font-normal text-base">Web, tasarım ve dijital araçlar kaynakları</div>
        </a>
      </nav>
    </main>
  );
}