import Link from "next/link";

export default function EnglishLessonsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-2 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-6 sm:p-12 max-w-2xl w-full border border-[#292c3f] flex flex-col gap-8">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Link
            href="/"
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition font-semibold"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/english"
            className="px-4 py-2 bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600 transition font-semibold"
          >
            İngilizce Akademi
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">💻</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-sky-300 drop-shadow mb-2">
            Online İngilizce Dersler
          </h1>
          <p className="text-base text-gray-300 text-center max-w-xl">
            Her seviyeye uygun, pratik odaklı ve ücretsiz İngilizce dersleri. Günlük konuşmadan temel gramer konularına, interaktif alıştırmalara kadar hepsi burada!
          </p>
        </div>

        <section>
          <h2 className="text-lg font-semibold text-emerald-300 mb-2">Başlangıç Seviyesi</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Alfabe ve Telaffuz:</strong> İngilizce harfler, sesler ve doğru telaffuz örnekleri
            </li>
            <li>
              <strong>Temel Selamlaşmalar:</strong> Hello, How are you?, Good morning, Goodbye...
            </li>
            <li>
              <strong>Kendini Tanıtma:</strong> İsmini, yaşını, nereli olduğunu söyleme cümleleri
            </li>
            <li>
              <strong>Günlük Kalıplar:</strong> Basit soru-cevaplar, alışveriş, yol tarifi
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-sky-300 mb-2">Orta Seviye</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Temel Zamanlar:</strong> Present Simple, Past Simple, Future Tense ile örnekler
            </li>
            <li>
              <strong>Genişletilmiş Diyaloglar:</strong> Restoranda sipariş verme, arkadaşla buluşma
            </li>
            <li>
              <strong>Kısa Hikaye Anlatımı:</strong> Basit olay anlatımları, günlük yazma
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-fuchsia-300 mb-2">İleri Seviye & Pratik</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Gelişmiş Zamanlar ve Cümle Yapıları:</strong> Present Perfect, Conditional Sentences, Passive Voice
            </li>
            <li>
              <strong>Dinleme & Okuma Parçaları:</strong> Güncel makaleler, podcast, kısa metinler
            </li>
            <li>
              <strong>İleri Düzey Diyaloglar:</strong> İş görüşmesi, tartışma, seyahat planı
            </li>
          </ul>
        </section>

        <div className="bg-[#1f2133] rounded-lg p-4 text-xs text-gray-400">
          <strong>İpucu:</strong> Her dersin sonunda kısa quizler ve uygulamalar ile pratik yapmayı unutmayın.
        </div>

        <section>
          <h2 className="text-base font-semibold text-sky-200 mb-2">Ek Kaynaklar</h2>
          <ul className="list-disc list-inside text-gray-400 mb-1 space-y-1 text-sm">
            <li>
              <a href="https://www.duolingo.com/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
                Duolingo – Ücretsiz İngilizce Pratik
              </a>
            </li>
            <li>
              <a href="https://www.bbc.co.uk/learningenglish/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
                BBC Learning English
              </a>
            </li>
            <li>
              <a href="https://www.ted.com/talks?language=en" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
                TED Talks (Dinleme ve Anlama)
              </a>
            </li>
          </ul>
        </section>
        <div className="flex gap-2 mt-2">
          <Link
            href="/english"
            className="px-5 py-2 rounded-lg bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 transition"
          >
            İngilizce Akademi
          </Link>
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