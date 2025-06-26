import Image from "next/image"

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-10">
      {/* Hero Görseli ve Başlık */}
      <div className="text-center">
        <Image src="/next.svg" alt="UzunYolcu Logo" width={100} height={100} className="mx-auto animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-purple-400 text-transparent bg-clip-text mb-4">
          Hoşgeldiniz UzunYolcu!
        </h1>
        <p className="mb-4 text-lg text-slate-300">Güvenilir ve sade içeriklerle öğrenmeye başla.</p>
      </div>
      {/* Kategoriler */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <a href="/ingilizce" className="bg-gradient-to-br from-sky-900 to-sky-700 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2">İngilizce</h2>
          <p>Temel seviye ve günlük İngilizce kaynakları</p>
        </a>
        <a href="/islam" className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2">İslam</h2>
          <p>İslam hakkında temel bilgiler ve rehberler</p>
        </a>
        <a href="/saglik" className="bg-gradient-to-br from-green-900 to-green-700 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2">Sağlık</h2>
          <p>Doğal sağlık, egzersiz ve beslenme içerikleri</p>
        </a>
        <a href="/digital" className="bg-gradient-to-br from-yellow-900 to-yellow-600 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2">Dijital</h2>
          <p>Web, tasarım ve dijital araçlar kaynakları</p>
        </a>
      </div>
    </section>
  )
}