import Link from "next/link";

export default function KuranTarihiVeBilimiPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Kur’an Tarihi ve Bilimi`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an-ı Kerim’in vahiy süreci, mushaflaşması, korunması ve asırlar boyunca ilim dünyasına kazandırdığı bilimsel katkılar bu bölümde detaylıca ele alınır.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Kur’an’ın Tarihsel Yolculuğu`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`610 yılında ilk vahyin Hira Mağarası’nda inmesi`}</li>
          <li>{`23 yılda parça parça inen ayetler ve sureler`}</li>
          <li>{`Hz. Muhammed’in (s.a.s.) sağlığında hafızlar ve vahiy kâtipleri tarafından korunması`}</li>
          <li>{`Hz. Ebubekir ve Hz. Osman dönemlerinde mushaf haline getirilip çoğaltılması`}</li>
          <li>{`Orijinal metnin günümüze kadar değişmeden ulaşması ve evrenselliği`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Kur’an’ın tarihteki serüveni, hem dini hem kültürel olarak insanlığın ortak mirasıdır. Mushaflar ve hafızlar zinciriyle korunmuştur.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Kur’an ve Bilim`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Kur’an’da evrenin yaratılışı, canlıların çeşitliliği ve tabiat olayları`}</li>
          <li>{`Bilimle çelişmeyen ayetler ve insanlığa ilham veren keşifler`}</li>
          <li>{`Matematik, astronomi, tıp ve psikoloji gibi alanlarda Kur’an’dan esinlenen bilim adamları`}</li>
          <li>{`Kur’an’ın mucizevi yapısı ve dilsel üstünlüğü`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-sky-400 rounded mb-4 text-gray-100">
          {`Kur’an, bilimsel gelişmelerin önünü açan evrensel ilkeler sunar. Bilimsel gerçeklerle çelişmeyen ve insanı düşünmeye sevk eden bir mesaj taşır.`}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Kaynaklar ve Detaylı Okuma`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            <a href="https://islamansiklopedisi.org.tr/kuran" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`TDV İslam Ansiklopedisi - Kur’an`}
            </a>
          </li>
          <li>
            <a href="https://www.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet İşleri Başkanlığı - Kur’an Tarihi`}
            </a>
          </li>
          <li>
            <a href="https://www.kuranvebilim.com/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Kur’an ve Bilim Portalı`}
            </a>
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu bölümdeki bilgiler Diyanet, TDV ve güvenilir İslam kaynaklarından derlenmiştir. Bilimsel gelişmeler ve Kur’an ilişkisi için güncel kaynaklar eklenmektedir.`}
        </p>
      </div>
    </section>
  );
}