import Link from "next/link";

export default function HomePage() {
  const sections = [
    {
      title: "İslam Rehberi",
      emoji: "🕌",
      href: "/islam",
      gradient: "from-emerald-400/80 to-green-500/90",
      description: "Elifba, Kur’an, dua, hadis, ayet, mucizeler ve çok daha fazlası",
    },
    {
      title: "İngilizce Akademi",
      emoji: "🇬🇧",
      href: "/english",
      gradient: "from-sky-400/80 to-blue-500/90",
      description: "Online dersler, kelime, pratik, sınav hazırlık ve daha fazlası",
    },
    {
      title: "Sağlık & Yaşam",
      emoji: "💪",
      href: "/health",
      gradient: "from-red-400/80 to-pink-500/90",
      description: "Güncel sağlık bilgisi, spor, beslenme, yaşam tüyoları",
    },
    {
      title: "Kişisel Gelişim",
      emoji: "🚀",
      href: "/selfdev",
      gradient: "from-orange-400/80 to-yellow-500/90",
      description: "Motivasyon, verimlilik, eğitim, hedef yönetimi, psikoloji",
    },
    {
      title: "Online Gelir",
      emoji: "💸",
      href: "/online-income",
      gradient: "from-indigo-400/80 to-purple-500/90",
      description: "Evden para kazanma, yatırım, girişimcilik, yeni trendler",
    },
    // Daha fazla ana kategori eklemek isterseniz bu listeye ekleyin.
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-4 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-8 sm:p-16 max-w-3xl w-full border border-[#292c3f] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">🌟</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-300 drop-shadow mb-2 text-center">
            Uzun Yolcu Bilgi Evreni
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-xl">
            Hayatınızı kolaylaştıracak rehber içerikler, modern İslami bilgi, eğitim, kişisel gelişim ve daha fazlası burada!
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {sections.map((sec) => (
            <Link
              key={sec.href}
              href={sec.href}
              className={`group relative inline-block px-6 py-3 font-semibold rounded-xl bg-gradient-to-r ${sec.gradient} text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400`}
            >
              <span className="mr-2 text-xl">{sec.emoji}</span>
              <span className="relative z-10">{sec.title}</span>
              <div className="text-xs text-gray-100 mt-1">{sec.description}</div>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </Link>
          ))}
        </nav>
        <div className="text-center mt-10 text-gray-400 text-sm">
          © 2025 Uzun Yolcu Bilgi Evreni
        </div>
      </section>
    </main>
  );
}