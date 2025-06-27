import Link from "next/link";

export default function OkumaPratikleriPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Okuma Pratikleri ve Alıştırmalar`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an harflerini, hecelemeyi ve tecvid kurallarını pekiştirmek için örnek kelime, cümle ve kısa ayetlerle uygulamalı okuma pratikleri! Her seviyeye uygun metinlerle kendinizi geliştirin.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Pratik Başlıkları`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Harf birleştirme ve heceleme metinleri`}</li>
          <li>{`Farklı hareke ve şeddeli kelimeler`}</li>
          <li>{`Kısa cümleler ile ritmik okuma`}</li>
          <li>{`Kısa ayetlerle uygulama`}</li>
          <li>{`Sesli ve videolu okuma örnekleri`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Pratikler sayesinde hızlı okuma, doğru telaffuz ve anlamı kavrama beceriniz gelişir. Sık tekrar ve sesli okuma önerilir.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Online Alıştırmalar ve Kaynaklar`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://elifba.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Elifba Portalı`}
            <div className="text-xs text-gray-400 mt-1">{`Okuma alıştırmaları ve sesli örnekler`}</div>
          </a>
          <a
            href="https://www.youtube.com/@diyanetkuranokumalar"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet YouTube: Okuma Pratikleri`}
            <div className="text-xs text-gray-400 mt-1">{`Okuma ve uygulama videoları`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Tavsiyeler ve Ek Bilgilendirme`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Her gün kısa süreli tekrarlarla okuma hızınızı ve doğruluğunuzu artırabilirsiniz.`}
          </li>
          <li>
            {`Sesli okuma ve kayıt dinleme, yanlışlarınızı görmenize yardımcı olur.`}
          </li>
          <li>
            {`Farklı seviyedeki metinlerle sürekli pratik yapın.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Tüm pratikler Diyanet ve güvenilir İslami kaynaklardan alınmıştır. Pratik yaptıkça kendinize güveniniz artacaktır!`}
        </p>
      </div>
    </section>
  );
}