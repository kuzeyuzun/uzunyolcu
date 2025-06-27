import Link from "next/link";

export default function ElifbaPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-4 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-8 sm:p-14 max-w-2xl w-full border border-[#292c3f] flex flex-col items-center gap-10">
        {/* Breadcrumb */}
        <div className="w-full flex flex-wrap gap-2 items-center mb-2">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition"
          >
            {`Ana Sayfa`}
          </Link>
          <span className="text-gray-400 font-bold mx-2">{`/`}</span>
          <Link
            href="/islam"
            className="px-4 py-2 rounded-lg bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 transition"
          >
            {`İslam Menüsü`}
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">{`🔠`}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-300 drop-shadow mb-2">
            {`Elifba Öğrenimi`}
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-xl">
            {`Kur’an-ı Kerim’in Arapça harflerini sıfırdan öğren, sesli ve görsel örneklerle harfleri, hecelemeyi, kelime oluşturmayı keşfet.`}
          </p>
        </div>
        <div className="w-full flex flex-col gap-8">
          <section>
            <h2 className="text-xl font-bold text-sky-300 mb-3">{`Elifba Nedir?`}</h2>
            <p className="text-gray-200 mb-2">
              {`Elifba, Arap alfabesindeki harflerin okunuşunu ve yazılışını öğrenmek için hazırlanan temel kaynaktır. Kur’an okumayı öğrenmek isteyenler için ilk adımdır.`}
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-emerald-200 mb-2">{`Harfler Listesi`}</h2>
            <div className="flex flex-wrap gap-2 justify-center text-2xl text-emerald-400">
              {`ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن و ه ي`.split(" ").map((h, i) => (
                <span key={i} className="border-b border-emerald-700 px-2">{h}</span>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-2 text-center">{`Her harfin okunuşunu ve örnekli sesli gösterimini alt modüllerde inceleyebilirsiniz.`}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-sky-200 mb-2">{`Elifba ile Kur’an Okumaya Giriş`}</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>{`Harflerin mahreci (çıkış noktası) ve örnek seslendirmeleri`}</li>
              <li>{`Harflerin başta, ortada, sonda yazımı`}</li>
              <li>{`Harekeler (a, e, i, o, u sesleri)`}</li>
              <li>{`Hece ve kelime oluşturma`}</li>
              <li>{`Harf birleştirme alıştırmaları`}</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-emerald-200 mb-2">{`Kaynaklar`}</h2>
            <ul className="list-disc list-inside text-gray-400 text-sm">
              <li>
                <a href="https://kurankursu.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
                  {`Diyanet Kuran Kursları - Online Elifba`}
                </a>
              </li>
              <li>
                <a href="https://elifba.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
                  {`Diyanet Elifba Portalı`}
                </a>
              </li>
            </ul>
          </section>
        </div>
        {/* Üst kategori ve ana sayfa butonları */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="/islam"
            className="px-5 py-2 rounded-lg bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 transition"
          >
            {`İslam Menüsü`}
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition"
          >
            {`Ana Sayfa`}
          </Link>
        </div>
      </section>
    </main>
  );
}