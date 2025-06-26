export default function EnglishAcademy() {
  const sections = [
    {
      title: "Başlangıç Seviyesi",
      emoji: "🔤",
      href: "/english/beginner",
      gradient: "from-sky-400/80 to-blue-500/90",
    },
    {
      title: "Orta Seviye",
      emoji: "💬",
      href: "/english/intermediate",
      gradient: "from-green-400/80 to-emerald-500/90",
    },
    {
      title: "İleri Seviye",
      emoji: "🚀",
      href: "/english/advanced",
      gradient: "from-fuchsia-400/80 to-pink-500/90",
    },
    {
      title: "Günlük Konuşma",
      emoji: "🗣️",
      href: "/english/conversation",
      gradient: "from-yellow-400/80 to-orange-500/90",
    },
    {
      title: "Telaffuz Rehberi",
      emoji: "🔊",
      href: "/english/pronunciation",
      gradient: "from-indigo-400/80 to-purple-500/90",
    },
    {
      title: "Hızlı Öğrenme",
      emoji: "⚡",
      href: "/english/fast-learning",
      gradient: "from-cyan-400/80 to-teal-500/90",
    },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-4 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-8 sm:p-16 max-w-3xl w-full border border-[#292c3f] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">🇬🇧</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-300 drop-shadow mb-2">İngilizce Akademi</h1>
          <p className="text-lg text-gray-300 text-center max-w-xl">
            Seviyene uygun bölümü seç: interaktif alıştırmalar, konuşma pratikleri ve daha fazlası!
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {sections.map((sec) => (
            <a
              key={sec.href}
              href={sec.href}
              className={`group relative inline-block px-6 py-3 font-semibold rounded-xl bg-gradient-to-r ${sec.gradient} text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400`}
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