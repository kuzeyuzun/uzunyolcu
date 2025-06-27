import Link from "next/link";

export default function IslamMainPage() {
  const sections = [
    {
      title: "Elifba Öğrenimi",
      emoji: "🔠",
      href: "/islam/elifba",
      gradient: "from-emerald-400/80 to-green-500/90",
    },
    {
      title: "Kur’an-ı Kerim",
      emoji: "📖",
      href: "/islam/kuran-i-kerim",
      gradient: "from-sky-400/80 to-blue-500/90",
    },
    {
      title: "Peygamber Mucizeleri",
      emoji: "🕋",
      href: "/islam/peygamber-mucizeleri",
      gradient: "from-yellow-400/80 to-amber-500/90",
    },
    {
      title: "Ayetler Hazinesi",
      emoji: "💎",
      href: "/islam/ayetler-hazinesi",
      gradient: "from-fuchsia-400/80 to-pink-500/90",
    },
    {
      title: "Hadis-i Şerifler",
      emoji: "📜",
      href: "/islam/hadisler-hazinesi",
      gradient: "from-orange-400/80 to-amber-500/90",
    },
    {
      title: "Dua ve Zikirler",
      emoji: "🙏",
      href: "/islam/dua-ve-zikirler",
      gradient: "from-indigo-400/80 to-purple-500/90",
    },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-4 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-8 sm:p-16 max-w-3xl w-full border border-[#292c3f] flex flex-col items-center gap-10">
        {/* Breadcrumb */}
        <div className="w-full flex justify-start mb-2">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition"
          >
            Ana Sayfa
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">🕌</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-300 drop-shadow mb-2">
            İslami Bilgiler
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-xl">
            Kur’an’dan hadis ve dualara, temel dini bilgileri kolayca keşfet.
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
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </Link>
          ))}
        </nav>
        {/* Alt kısımda da ana sayfa butonu */}
        <div className="mt-8 flex gap-4">
          <Link
            href="/"
            className="px-5 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition"
          >
            Ana Sayfa
          </Link>
        </div>
      </section>
    </main>
  );
}