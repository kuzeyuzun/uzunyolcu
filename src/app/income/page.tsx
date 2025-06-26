export default function IncomeMainPage() {
  const sections = [
    {
      title: "E-ticaret Başlangıç",
      emoji: "🛒",
      href: "/income/commerce",
      gradient: "from-amber-400/80 to-yellow-600/90",
    },
    {
      title: "Pazaryeri Stratejileri",
      emoji: "🏷️",
      href: "/income/marketplace",
      gradient: "from-blue-400/80 to-sky-500/90",
    },
    {
      title: "YouTube Kanalı",
      emoji: "🎥",
      href: "/income/youtube",
      gradient: "from-pink-400/80 to-fuchsia-500/90",
    },
    {
      title: "Yapay Zeka Araçları",
      emoji: "🤖",
      href: "/income/ai-tools",
      gradient: "from-green-400/80 to-emerald-500/90",
    },
    {
      title: "Dijital Pazarlama",
      emoji: "📈",
      href: "/income/marketing",
      gradient: "from-indigo-400/80 to-purple-500/90",
    },
    {
      title: "Freelance İşler",
      emoji: "💼",
      href: "/income/freelance",
      gradient: "from-cyan-400/80 to-teal-500/90",
    },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-4 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-8 sm:p-16 max-w-3xl w-full border border-[#292c3f] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">💰</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 drop-shadow mb-2">Online Gelir</h1>
          <p className="text-lg text-gray-300 text-center max-w-xl">
            Dijital çağda gelir elde etmenin yolları: E-ticaret, YouTube, freelance ve çok daha fazlası burada!
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {sections.map((sec) => (
            <a
              key={sec.href}
              href={sec.href}
              className={`group relative inline-block px-6 py-3 font-semibold rounded-xl bg-gradient-to-r ${sec.gradient} text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400`}
            >
              <span className="mr-2 text-xl">{sec.emoji}</span>
              <span className="relative z-10">{sec.title}</span>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}