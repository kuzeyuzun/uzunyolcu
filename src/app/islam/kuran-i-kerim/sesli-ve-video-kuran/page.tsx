import Link from "next/link";

export default function SesliVeVideoKuranPage() {
  return (
    <section className="max-w-3xl mx-auto mt-10 p-8 rounded-xl bg-[#23263a] shadow-lg border border-[#292c3f]">
      {/* Breadcrumb */}
      <div className="flex flex-wrap justify-between items-center mb-8 gap-2">
        <div className="flex gap-2">
          <Link
            href="/"
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition font-semibold"
          >
            {`Ana Sayfa`}
          </Link>
          <Link
            href="/islam"
            className="px-4 py-2 bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600 transition font-semibold"
          >
            {`İslam Menüsü`}
          </Link>
          <Link
            href="/islam/kuran-i-kerim"
            className="px-4 py-2 bg-fuchsia-500 text-white rounded-lg shadow hover:bg-fuchsia-600 transition font-semibold"
          >
            {`Kur'an-ı Kerim`}
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-emerald-300">{`Sesli ve Videolu Kur’an Eğitimleri`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an-ı Kerim’i sesli ve görüntülü olarak dinlemek, doğru telaffuz ve tecvid kurallarını öğrenmek için zengin içerikler bu bölümde! Diyanet’in ve güvenilir platformların hazırladığı sesli, videolu derslere ve tilavetlere buradan ulaşabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Dinle ve İzle: En İyi Kaynaklar`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Kıraat alimlerinden sesli Kur’an okuma örnekleri`}</li>
          <li>{`Diyanet onaylı video ve sesli eğitim içerikleri`}</li>
          <li>{`Tecvidli ve yavaş okuma pratikleri`}</li>
          <li>{`Çocuklar ve yetişkinler için seviye seviye dersler`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Kur’an’ın lafzını doğru telaffuz için sesli tilavet ve video dersler en faydalı kaynaklardır. Her seviyeye uygun içerikler düzenli olarak güncellenmektedir.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Seçili Video ve Sesli Kaynaklar`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://kuran.diyanet.gov.tr/kurani-kerim-dinle"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Kur’an Dinleme Portalı`}
            <div className="text-xs text-gray-400 mt-1">{`Tüm sureler ve farklı kıraatlerle sesli tilavet`}</div>
          </a>
          <a
            href="https://www.youtube.com/@diyanetkuranokumalar"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet YouTube: Kur’an Okuma Videoları`}
            <div className="text-xs text-gray-400 mt-1">{`Tecvidli ve adım adım video dersler`}</div>
          </a>
          <a
            href="https://elifba.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Elifba Portalı`}
            <div className="text-xs text-gray-400 mt-1">{`Çocuklar ve yeni başlayanlar için video ve sesli alıştırmalar`}</div>
          </a>
          <a
            href="https://www.kuranmeali.com/kuran-dinle/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Kur’an Meali: Sesli Dinleme`}
            <div className="text-xs text-gray-400 mt-1">{`Okunaklı meal ve Arapça tilavet`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Ek Kaynaklar ve Uyarılar`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            <a href="https://www.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet Resmî Sitesi`}
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@diyanettv" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet TV YouTube Videoları`}
            </a>
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Tüm videolar, sesli dosyalar ve uygulamalar Diyanet ve güvenilir İslami kaynaklardan derlenmiştir. Doğru telaffuz için uzman hocaların rehberliğinde çalışmanız önerilir.`}
        </p>
      </div>
    </section>
  );
}