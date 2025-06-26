export default function WellnessMainPage() {
  const sections = [
    {
      title: "Evde Egzersiz",
      emoji: "🏋️‍♂️",
      href: "/wellness/home-exercise",
      gradient: "from-teal-400/80 to-green-500/90",
    },
    {
      title: "Sağlıklı Beslenme",
      emoji: "🥗",
      href: "/wellness/nutrition",
      gradient: "from-lime-400/80 to-emerald-500/90",
    },
    {
      title: "Bitkisel Takviyeler",
      emoji: "🌿",
      href: "/wellness/supplements",
      gradient: "from-yellow-400/80 to-amber-500/90",
    },
    {
      title: "Postür Düzeltme",
      emoji: "🪑",
      href: "/wellness/posture",
      gradient: "from-blue-400/80 to-sky-500/90",
    },
    {
      title: "Göz Sağlığı",
      emoji: "👀",
      href: "/wellness/eyes",
      gradient: "from-indigo-400/80 to-purple-500/90",
    },
    {
      title: "Stres Yönetimi",
      emoji: "🧘‍♂️",
      href: "/wellness/stress",
      gradient: "from-pink-400/80 to-fuchsia-500/90",
    },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-4 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-8 sm:p-16 max-w-3xl w-full border border-[#292c3f] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">💻</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-300 drop-shadow mb-2">Masa Başı Sağlık</h1>
          <p className="text-lg text-gray-300 text-center max-w-xl">
            Uzun süre masa başında çalışanlar için egzersiz, beslenme, postür ve daha fazlası!
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {sections.map((sec) => (
            <a
              key={sec.href}
              href={sec.href}
              className={`group relative inline-block px-6 py-3 font-semibold rounded-xl bg-gradient-to-r ${sec.gradient} text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400`}
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