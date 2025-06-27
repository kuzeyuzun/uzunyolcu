import Link from "next/link";

export default function AyetVeTematikOkumaPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Tematik Ayet Okuma ve Kıssalar`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an-ı Kerim’de geçen tematik ayetler ve peygamber kıssaları, hayatın her alanına ışık tutar. Bu bölümde; korku, sabır, şifa, aile, ticaret, dua ve pek çok başlık altında ayetler ve kısa açıklamalar bulabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Tematik Başlıklar`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Korku ve Teselli Ayetleri`}</li>
          <li>{`Sabır ve Dayanma`}</li>
          <li>{`Şifa ve Sağlık`}</li>
          <li>{`Aile ve Toplum`}</li>
          <li>{`Ticaret ve Helal Kazanç`}</li>
          <li>{`Dua ve Yakarma`}</li>
          <li>{`Peygamber Kıssaları`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Her başlık altında, ilgili ayetlerin Arapça metni, Türkçe anlamı ve kısa açıklamaları verilmiştir. Kıssalar kısmında ise özetler ve bağlantılı ayetler sunulmaktadır.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Başlığa Göre Ayet Seçimi`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/islam/kuran-i-kerim/ayet-ve-tematik-okuma/korku"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Korku ve Teselli`}
            <div className="text-xs text-gray-400 mt-1">{`Zorluk ve korku anında okunacak ayetler`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/ayet-ve-tematik-okuma/sabir"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Sabır ve Dayanma`}
            <div className="text-xs text-gray-400 mt-1">{`Sabır ve sebatla ilgili ayetler`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/ayet-ve-tematik-okuma/sifa"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Şifa ve Sağlık`}
            <div className="text-xs text-gray-400 mt-1">{`Şifa ve hastalıklara dair ayetler`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/ayet-ve-tematik-okuma/aile"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Aile ve Toplum`}
            <div className="text-xs text-gray-400 mt-1">{`Aile saadeti ve toplumsal huzur ayetleri`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/ayet-ve-tematik-okuma/ticaret"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Ticaret ve Helal Kazanç`}
            <div className="text-xs text-gray-400 mt-1">{`Helal kazanç, ticaret ve bereket ayetleri`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/ayet-ve-tematik-okuma/dua"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Dua ve Yakarma`}
            <div className="text-xs text-gray-400 mt-1">{`Dua ve yakarış içeren ayetler`}</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/ayet-ve-tematik-okuma/kissalar"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Peygamber Kıssaları`}
            <div className="text-xs text-gray-400 mt-1">{`Kur’an’da geçen kıssalar ve dersler`}</div>
          </Link>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Kaynaklar ve Detaylı Okuma`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            <a href="https://kuran.diyanet.gov.tr/kategoriler/konulara-gore-ayetler" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet - Konulara Göre Ayetler`}
            </a>
          </li>
          <li>
            <a href="https://islamansiklopedisi.org.tr/ayet" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`TDV İslam Ansiklopedisi - Ayet`}
            </a>
          </li>
          <li>
            <a href="https://www.kuranmeali.com/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Kur’an Meali ve Tematik Aramalar`}
            </a>
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu sayfadaki tematik ayet seçkileri Diyanet, TDV ve güvenilir İslami kaynaklardan derlenmiştir.`}
        </p>
      </div>
    </section>
  );
}