export default function HomePage() {
  const categories = [
    {
      title: "İslami Bilgiler",
      emoji: "🕌",
      href: "/islam",
      gradient: "from-emerald-400/80 to-green-500/90",
    },
    {
      title: "İngilizce Akademi",
      emoji: "🇬🇧",
      href: "/english",
      gradient: "from-pink-400/80 to-fuchsia-500/90",
    },
    {
      title: "Masa Başı Sağlık",
      emoji: "💻",
      href: "/wellness",
      gradient: "from-teal-400/80 to-green-500/90",
    },
    {
      title: "40+ Yaşam Rehberi",
      emoji: "🌟",
      href: "/over40",
      gradient: "from-yellow-400/80 to-orange-500/90",
    },
    {
      title: "Kendini Geliştir",
      emoji: "🎓",
      href: "/growth",
      gradient: "from-indigo-400/80 to-purple-500/90",
    },
    {
      title: "Online Gelir",
      emoji: "💰",
      href: "/income",
      gradient: "from-amber-400/80 to-yellow-600/90",
    },
    {
      title: "Hakkımızda",
      emoji: "ℹ️",
      href: "/about",
      gradient: "from-gray-400/80 to-gray-600/90",
    },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-4 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-8 sm:p-16 max-w-3xl w-full border border-[#292c3f] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">🧭</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-300 drop-shadow mb-2">Uzun Yolcu</h1>
          <p className="text-lg text-gray-300 text-center max-w-xl">
            Hayatın her alanında güvenilir bilgiler, pratik rehberler ve ilham verici içerikler!
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {categories.map((cat) => (
            <a
              key={cat.href}
              href={cat.href}
              className={`group relative inline-block px-6 py-3 font-semibold rounded-xl bg-gradient-to-r ${cat.gradient} text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400`}
            >
              <span className="mr-2 text-xl">{cat.emoji}</span>
              <span className="relative z-10">{cat.title}</span>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}