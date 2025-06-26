// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-4 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-8 sm:p-16 max-w-5xl w-full border border-[#292c3f] flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Sol Blok */}
        <aside className="flex flex-col gap-8 w-full md:w-1/2">
          {/* Tree Icon */}
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

          {/* Links */}
          <nav className="flex flex-col gap-2 mt-6">
            <a href="/about" className="text-base font-semibold text-sky-300 px-3 py-1 rounded-md hover:bg-sky-400/10 hover:text-sky-200 transition-all w-max">Hakkımızda</a>
            <a href="mailto:seydauzun@gmail.com" className="text-base font-semibold text-pink-300 px-3 py-1 rounded-md hover:bg-pink-400/10 hover:text-pink-200 transition-all w-max">İletişim</a>
            <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kuzeyseydauzun" target="_blank" rel="noopener" className="text-base font-semibold text-lime-300 px-3 py-1 rounded-md hover:bg-lime-400/10 hover:text-lime-200 transition-all w-max">LinkedIn</a>
          </nav>
        </aside>

        {/* Sağ Blok */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold text-sky-300 mb-4 drop-shadow">UzunYolcu</h1>
          <p className="text-2xl md:text-3xl text-gray-200 font-medium mb-2 text-center">
            Modern Yazılım ve Dijital İçerik Platformu
          </p>
          <p className="text-lg text-gray-400 font-normal text-center max-w-md">
            Kod, topluluk ve bilgiye birlikte ulaşalım.
          </p>
        </div>
      </section>
    </main>
  );
}