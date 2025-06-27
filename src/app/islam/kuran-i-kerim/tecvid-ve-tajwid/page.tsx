import Link from "next/link";

export default function TecvidVeTajwidPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Tecvid ve Tajwid (Okuma Sanatı)`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Tecvid, Kur’an-ı Kerim’in doğru telaffuz ve kurallarına uygun şekilde okunmasını sağlayan ilim dalıdır. Bu bölümde harflerin mahreçleri, uygulamalı tecvid kuralları ve sesli-videolu örneklerle okuma sanatını detaylıca keşfedebilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Tecvidin Temel Konuları`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Arap harflerinin mahreç ve sıfatları`}</li>
          <li>{`Hareke, med, şedde, cezım uygulamaları`}</li>
          <li>{`İdgam, ihfa, izhar, iklab gibi tecvid kuralları`}</li>
          <li>{`Tilavet âdâbı ve Kur’an okumanın edebi`}</li>
          <li>{`Pratik alıştırmalar ve sesli örnekler`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Tecvid eğitimi, Kur’an’ın lafzını korumak ve doğru anlamak için kritik öneme sahiptir. Tüm dersler uygulamalı anlatımlarla desteklenmiştir.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Konu Başlıkları ve Uygulamalar`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/islam/kuran-i-kerim/tecvid-ve-tajwid/mahrec"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Harflerin Mahreçleri`}
            <div className="text-xs text-gray-400 mt-1">{`Arapça harflerin çıkış noktaları ve ses örnekleri`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/tecvid-ve-tajwid/temel-kurallar"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Temel Tecvid Kuralları`}
            <div className="text-xs text-gray-400 mt-1">{`Med, idgam, izhar, ihfa ve diğer kurallar`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/tecvid-ve-tajwid/tilavet-adabi"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Tilavet Âdâbı ve Edebi`}
            <div className="text-xs text-gray-400 mt-1">{`Kur’an okuma adabı ve manevi hazırlıklar`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/tecvid-ve-tajwid/sesli-ornekler"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Sesli ve Videolu Uygulamalar`}
            <div className="text-xs text-gray-400 mt-1">{`Kur’an okuyuşunda canlı örnekler`}</div>
          </Link>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Kaynaklar ve Online Eğitimler`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            <a href="https://kuran.diyanet.gov.tr/tecvid" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet Tecvid Portalı`}
            </a>
          </li>
          <li>
            <a href="https://elifba.diyanet.gov.tr/tecvid" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Elifba ve Tecvid Online`}
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@diyanetkuranokumalar" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet YouTube Tecvid Dersleri`}
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