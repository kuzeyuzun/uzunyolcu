import Link from "next/link";

export default function EnglishMainPage() {
  const sections = [
    {
      title: "Online Dersler",
      emoji: "💻",
      href: "/english/lessons",
      gradient: "from-sky-400/80 to-blue-500/90",
      description: "Her seviyeye uygun ücretsiz interaktif dersler",
    },
    {
      title: "Kelime & Telaffuz",
      emoji: "🔊",
      href: "/english/vocabulary",
      gradient: "from-indigo-400/80 to-cyan-500/90",
      description: "Konu başlıklarına göre kelime listeleri, telaffuzlar",
    },
    {
      title: "Pratik & Konuşma",
      emoji: "🗣️",
      href: "/english/practice",
      gradient: "from-green-400/80 to-emerald-500/90",
      description: "Günlük konuşma kalıpları, diyaloglar, örnek cümleler",
    },
    {
      title: "Sınav Hazırlık",
      emoji: "📝",
      href: "/english/exam",
      gradient: "from-orange-400/80 to-yellow-500/90",
      description: "YDS, TOEFL, IELTS ve diğer sınavlara özel kaynaklar",
    },
    {
      title: "Dinleme & İzleme",
      emoji: "🎧",
      href: "/english/listening",
      gradient: "from-fuchsia-400/80 to-pink-500/90",
      description: "Podcast, video ve sesli içeriklerle dinleme gelişimi",
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
          <span className="text-5xl">🇬🇧</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-300 drop-shadow mb-2">
            İngilizce Akademi
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-xl">
            Sıfırdan ileri seviyeye İngilizce eğitim içerikleri, sınav hazırlık, pratik ve daha fazlası.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {sections.map((sec) => (
            <Link
              key={sec.href}
              href={sec.href}
              className={`group relative inline-block px-6 py-3 font-semibold rounded-xl bg-gradient-to-r ${sec.gradient} text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400`}
            >
              <span className="mr-2 text-xl">{sec.emoji}</span>
              <span className="relative z-10">{sec.title}</span>
              <div className="text-xs text-gray-100 mt-1">{sec.description}</div>
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-20 transition bg-white"></span>
            </Link>
          ))}
        </nav>
        <div className="text-center mt-10 text-gray-400 text-sm">
          © 2025 İngilizce Akademi
        </div>
      </section>
    </main>
  );
}