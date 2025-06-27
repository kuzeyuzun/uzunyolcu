import Link from "next/link";

export default function RisaleNurTefsiriPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Risale-i Nur Tefsirlerinden Seçmeler`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Risale-i Nur Külliyatı, Bediüzzaman Said Nursi'nin Kur’an ayetlerine getirdiği çağdaş ve derin yorumları içerir. Bu sayfada, Risale-i Nur eserlerinden Kur’an tefsiriyle ilgili bölüm ve pasajlara kolayca ulaşabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Risale-i Nur’un Tefsirdeki Yeri`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Kur’an’ın temel hakikatlerini günümüz insanına anlaşılır kılar.`}</li>
          <li>{`İman, tevhid, ahiret ve hikmet konularında derin açıklamalar sunar.`}</li>
          <li>{`Modern bilim ve felsefe ile Kur’an arasındaki köprüleri kurar.`}</li>
          <li>{`Ayetlerin manalarını sosyal ve psikolojik boyutlarıyla açıklar.`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Risale-i Nur tefsirleri doğrudan klasik tefsir gibi ayet ayet değil, konular üzerinden açıklamalar yapar. Külliyatta her ayetin işaret edildiği bölümler özenle seçilmiştir.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Tefsir Eserlerinden Seçkiler`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="https://www.risaleinur.org/icerik/sozler"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Sözler`}
            <div className="text-xs text-gray-400 mt-1">{`İman ve tevhid hakikatleri, ayetlerden ilham`}</div>
          </Link>
          <Link
            href="https://www.risaleinur.org/icerik/lemalar"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Lem’alar`}
            <div className="text-xs text-gray-400 mt-1">{`Kur’an’ın çeşitli meseleleri ve ayetleri`}</div>
          </Link>
          <Link
            href="https://www.risaleinur.org/icerik/mektubat"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Mektubat`}
            <div className="text-xs text-gray-400 mt-1">{`Ayetlerin hayat ve topluma yansımaları`}</div>
          </Link>
          <Link
            href="https://www.risaleinur.org/icerik/asayir"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Asa-yı Musa`}
            <div className="text-xs text-gray-400 mt-1">{`Mucizeler ve iman delilleri`}</div>
          </Link>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Dış Kaynaklar ve PDF`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            <a href="https://www.risaleinur.org/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Risale-i Nur Külliyatı Online (tam metin, arama, PDF)`}
            </a>
          </li>
          <li>
            <a href="https://www.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet: Risale-i Nur ve Kur’an Tefsirleri`}
            </a>
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Buradaki bağlantılar ve içerikler Diyanet ve Risale-i Nur resmî portallarından alınmaktadır.`}
        </p>
      </div>
    </section>
  );
}