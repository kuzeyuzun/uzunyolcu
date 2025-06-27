import Link from "next/link";

export default function ArapcaTurkcePage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`5 Hatlı Kur’an: Arapça, Türkçe Okunuşu ve Meali`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Bu bölümde Kur’an ayetlerini Arapça orijinaliyle birlikte, Türkçe okunuşunu ve mealini yan yana görebilirsiniz. Özellikle harf birleştirme ve doğru telaffuz için her ayet satırı üçlü olarak hazırlanmıştır.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Nasıl Kullanılır?`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Ayetin Arapça metni sağdan sola ve orijinal mushaf hattı ile gösterilir.`}</li>
          <li>{`Hemen altında kolay Türkçe okunuşu (transkripsiyon).`}</li>
          <li>{`En altta ise anlamı (meal) yer alır.`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Kur’an’ı doğru okumak için öncelik her zaman harf-hareke bilgisi ve tecvid kurallarıdır. Bu kısım ise pratik ve hızlı öğrenme için yardımcıdır.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Süre Seçimi`}</h2>
        <p className="text-gray-300 mb-4">
          {`Aşağıdaki sure başlıklarından birine tıklayarak, ilgili surenin her ayetini 3’lü (Arapça, okunuş, anlamı) tablo halinde görebilirsiniz.`}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/islam/kuran-i-kerim/arapca-turkce/fatiha"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Fâtiha Suresi`}
          </Link>
          <Link
            href="/islam/kuran-i-kerim/arapca-turkce/ihlas"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`İhlâs Suresi`}
          </Link>
          <Link
            href="/islam/kuran-i-kerim/arapca-turkce/kevser"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Kevser Suresi`}
          </Link>
          <Link
            href="/islam/kuran-i-kerim/arapca-turkce/yasin"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Yâsîn Suresi`}
          </Link>
          {/* Diğer kısa sureler ve popüler bölümler de aynı mantıkla eklenebilir */}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Dış Kaynaklar ve PDF`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            <a href="https://kuran.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet Kur’an Portalı (Ayet, okunuş, meal)`}
            </a>
          </li>
          <li>
            <a href="https://www.kuranmeali.com/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Kur’an Meali Karşılaştırmalı`}
            </a>
          </li>
          <li>
            <a href="https://www.diyanetvakfi.org.tr/kitap/kuran-i-kerim-ve-turkce-anlami-1-cilt" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet Vakfı: Basılı/PDF Kur’an ve Türkçe Meali`}
            </a>
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu sayfadaki tablolar Diyanet’in ve güvenilir İslami kaynakların veritabanlarından hazırlanmıştır.`}
        </p>
      </div>
    </section>
  );
}