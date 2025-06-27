import Link from "next/link";

export default function TecvidPage() {
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
          <Link
            href="/islam/kuran-i-kerim/kuran-ogreniyorum"
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition font-semibold"
          >
            {`Kur’an Öğreniyorum`}
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-emerald-300">{`Tecvid ve Tilavet (Kur’an Okuma Kuralları)`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an okumanın en önemli adımlarından biri tecvid kurallarını öğrenmektir. Bu bölümde; temel tecvid kuralları, uygulamalı örnekler, sesli ve videolu anlatımlar ile Kur’an’ı doğru ve güzel okumanın yolları anlatılmaktadır.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Temel Tecvid Konuları`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Mahreç ve harflerin doğru çıkarılması`}</li>
          <li>{`Med, idgam, ihfa, izhar, iklab gibi ana kurallar`}</li>
          <li>{`Hareke, şedde, cezm uygulamaları`}</li>
          <li>{`Tilavet âdâbı (Kur’an okuma adabı)`}</li>
          <li>{`Tecvidli okuma örnekleri ve sesli pratikler`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Tecvid kuralları, Kur’an’ın yanlışsız ve güzel okunmasını sağlar. Aşağıdaki kaynaklarla bolca pratik yapabilirsiniz.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Uygulamalı Kaynaklar ve Videolar`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://kuran.diyanet.gov.tr/tecvid"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Tecvid Portalı`}
            <div className="text-xs text-gray-400 mt-1">{`Uygulamalı tecvid dersleri ve örnekler`}</div>
          </a>
          <a
            href="https://www.youtube.com/@diyanetkuranokumalar"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet YouTube: Tecvid Videoları`}
            <div className="text-xs text-gray-400 mt-1">{`Adım adım tecvid ve tilavet anlatımı`}</div>
          </a>
          <a
            href="https://elifba.diyanet.gov.tr/tecvid"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Elifba ile Tecvid Uygulamaları`}
            <div className="text-xs text-gray-400 mt-1">{`Başlangıç seviyesinden ileriye interaktif uygulamalar`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Ek Tavsiyeler ve Bilgiler`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Her gün kısa süreli tekrarlarla tecvidli okuma pratiği yapın.`}
          </li>
          <li>
            {`Yanlış alışkanlık gelişmemesi için uzman eğitmen veya videolu kaynaklardan destek alın.`}
          </li>
          <li>
            {`Tecvid kurallarını öğrenirken, anlamı üzerinde de düşünmeye özen gösterin.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu bölümdeki kaynaklar Diyanet ve güvenilir İslami eğitim platformlarından derlenmiştir. Güzel okuma için bolca pratik önerilir!`}
        </p>
      </div>
    </section>
  );
}