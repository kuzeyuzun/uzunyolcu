import Link from "next/link";

export default function KuranOgreniyorumPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Kur’an Öğreniyorum (Sıfırdan İleri Düzeye)`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an-ı Kerim’i okumayı sıfırdan öğrenmek isteyenler için hazırlanan bu bölümde, harflerin tanınmasından başlayıp, hecelemeye, kelime oluşturmaya, tecvidli okumaya ve ileri düzey pratiklere kadar tüm aşamaları bulabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Kapsamlı Öğrenme Adımları`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Arap harflerini ve mahreçlerini tanıma`}</li>
          <li>{`Harf birleştirme ve heceleme çalışmaları`}</li>
          <li>{`Hareke, şedde, cezm ve med uygulamaları`}</li>
          <li>{`Kelime ve ayet okuma`}</li>
          <li>{`Tecvid ve tilavet kurallarıyla okuma`}</li>
          <li>{`Sesli ve videolu örneklerle uygulama`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Her konu başlığı altında, hem teorik anlatımlar hem de uygulamalı örnekler yer almaktadır. İleri düzeyde interaktif quiz ve “dinle-oku” pratikleri de sunulmaktadır.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Bölüm İçeriği`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/islam/elifba"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Elifba (Arapça Harfler)`}
            <div className="text-xs text-gray-400 mt-1">{`Harfleri tanı, mahreç ve ses örnekleriyle öğren`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/kuran-ogreniyorum/heceleme"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Heceleme ve Harf Birleştirme`}
            <div className="text-xs text-gray-400 mt-1">{`Harfleri birleştirerek kelime oluşturma pratikleri`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/kuran-ogreniyorum/tecvid"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Tecvid ve Tilavet`}
            <div className="text-xs text-gray-400 mt-1">{`Doğru Kur’an okuma kuralları, uygulamalı anlatım`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/kuran-ogreniyorum/quiz"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Quiz ve Pratikler`}
            <div className="text-xs text-gray-400 mt-1">{`Bilgini test et, sesli ve yazılı alıştırmalar`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/kuran-ogreniyorum/video-egitim"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Video Eğitim ve Canlı Dersler`}
            <div className="text-xs text-gray-400 mt-1">{`Diyanet ve diğer kaynaklardan ücretsiz video dersler`}</div>
          </Link>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Kaynaklar ve Online Uygulamalar`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            <a href="https://kurankursu.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet Online Kur’an Kursları`}
            </a>
          </li>
          <li>
            <a href="https://elifba.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet Elifba Portalı`}
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@diyanetkuranokumalar" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet YouTube Kur’an Okuma Videoları`}
            </a>
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Tüm materyaller Diyanet İşleri Başkanlığı ve güvenilir İslami kaynaklardan derlenmiştir.`}
        </p>
      </div>
    </section>
  );
}