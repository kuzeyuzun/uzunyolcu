export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-4 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-8 sm:p-16 max-w-5xl w-full border border-[#292c3f] flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Sol Blok */}
        <aside className="flex flex-col gap-8 w-full md:w-1/2">
          {/* Tree Icon + Başlık */}
          <div className="flex items-center gap-3">
            <span className="inline-block">
              {/* Custom SVG Tree Icon */}
              <svg width={56} height={56} viewBox="0 0 56 56" fill="none" className="text-green-400" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="26" r="12" fill="#4ade80" opacity="0.65"/>
                <ellipse cx="28" cy="36" rx="18" ry="8" fill="#22d3ee" opacity="0.18"/>
                <rect x="25" y="36" width="6" height="12" rx="2" fill="#a3e635"/>
              </svg>
            </span>
            <span className="text-2xl font-bold text-green-300 tracking-tight">UzunYolcu</span>
          </div>
          {/* Features */}
          <ul className="flex flex-col gap-3 mt-2 text-lg">
            <li className="flex items-center gap-2 text-gray-200">
              <span className="text-pink-400 text-2xl">{"</>"}</span>
              <span>Temiz kod ve açık kaynak odaklı içerikler</span>
            </li>
            <li className="flex items-center gap-2 text-gray-200">
              <span className="text-sky-400 text-2xl">🌍</span>
              <span>Basit, erişilebilir ve güvenilir bilgi</span>
            </li>
          </ul>
          {/* Animasyonlu Butonlar */}
          <nav className="flex flex-wrap gap-3 mt-8">
            <a href="/about"
              className="group relative inline-block px-6 py-2 font-semibold rounded-xl bg-gradient-to-r from-sky-400/70 to-sky-600/80 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-sky-300 hover:to-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span className="relative z-10">Hakkımızda</span>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </a>
            <a href="mailto:seydauzun@gmail.com"
              className="group relative inline-block px-6 py-2 font-semibold rounded-xl bg-gradient-to-r from-pink-400/70 to-pink-600/80 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-pink-300 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <span className="relative z-10">İletişim</span>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </a>
            <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kuzeyseydauzun"
              target="_blank" rel="noopener"
              className="group relative inline-block px-6 py-2 font-semibold rounded-xl bg-gradient-to-r from-lime-400/70 to-lime-600/80 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-lime-300 hover:to-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
            >
              <span className="relative z-10">LinkedIn</span>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </a>
            <a href="/islam"
              className="group relative inline-block px-6 py-2 font-semibold rounded-xl bg-gradient-to-r from-green-400/70 to-green-600/80 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-300 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <span className="relative z-10">İslam</span>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </a>
            <a href="/en"
              className="group relative inline-block px-6 py-2 font-semibold rounded-xl bg-gradient-to-r from-cyan-400/70 to-cyan-600/80 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-cyan-300 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span className="relative z-10">English</span>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </a>
            <a href="/blog"
              className="group relative inline-block px-6 py-2 font-semibold rounded-xl bg-gradient-to-r from-purple-400/70 to-purple-600/80 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-300 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <span className="relative z-10">Blog</span>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </a>
            <a href="/resources"
              className="group relative inline-block px-6 py-2 font-semibold rounded-xl bg-gradient-to-r from-yellow-400/70 to-yellow-600/80 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <span className="relative z-10">Kaynaklar</span>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </a>
          </nav>
        </aside>

        {/* Sağ Blok */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold text-sky-300 mb-4 drop-shadow">UzunYolcu</h1>
          <p className="text-2xl md:text-3xl text-gray-200 font-medium mb-2 text-center">
            Modern Yazılım ve Dijital İçerik Platformu
          </p>
          <p className="text-lg text-gray-400 font-normal text-center max-w-md">
            Kod, topluluk ve bilgiye birlikte ulaşalım. Ayrıca İslami bilgiler ve İngilizce eğitim de burada....
          </p>
        </div>
      </section>
      {/* Test Bloğu */}
      <div className="bg-red-600 text-white p-12 text-5xl font-bold text-center mt-8">
        TAILWIND AKTİF Mİ? <span className="text-yellow-300">TEST</span>
      </div>
    </main>
  );
}