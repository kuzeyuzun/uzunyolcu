import Link from "next/link";

export default function EkKaynaklarVeLinklerPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Ek Kaynaklar ve Linkler`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an okumayı öğrenme sürecinizde yararlanabileceğiniz güvenilir ve faydalı ek kaynaklar, portallar ve uygulamalar! Gelişiminizi destekleyecek online araçlara ve rehberlere kolayca ulaşabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Önerilen Online Kaynaklar`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4">
          <li>
            <a
              href="https://elifba.diyanet.gov.tr/"
              target="_blank"
              className="underline hover:text-emerald-200"
            >
              Diyanet Elifba Portalı
            </a>
            <span className="text-xs text-gray-400 ml-1">
              — Heceleme, quiz, okuma ve uygulamalar
            </span>
          </li>
          <li>
            <a
              href="https://kurankursu.diyanet.gov.tr/"
              target="_blank"
              className="underline hover:text-emerald-200"
            >
              Diyanet Online Kur’an Kursları
            </a>
            <span className="text-xs text-gray-400 ml-1">
              — Canlı ders, rehberlik ve sertifika
            </span>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@diyanetkuranokumalar"
              target="_blank"
              className="underline hover:text-emerald-200"
            >
              Diyanet YouTube: Kur’an Okuma Videoları
            </a>
            <span className="text-xs text-gray-400 ml-1">
              — Video anlatım, pratik ve düzeltme örnekleri
            </span>
          </li>
          <li>
            <a
              href="https://kuran.diyanet.gov.tr/"
              target="_blank"
              className="underline hover:text-emerald-200"
            >
              Diyanet Kur’an Portalı
            </a>
            <span className="text-xs text-gray-400 ml-1">
              — Kur’an metni, meali ve tefsir kaynakları
            </span>
          </li>
          <li>
            <a
              href="https://www.diyanet.gov.tr/"
              target="_blank"
              className="underline hover:text-emerald-200"
            >
              Diyanet Resmî Web Sitesi
            </a>
            <span className="text-xs text-gray-400 ml-1">
              — Güncel duyurular, iletişim ve destek
            </span>
          </li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Sadece güvenilir, resmi ve alanında uzman kaynakları kullanmak öğrenme sürecinde en doğru adım olacaktır.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Faydalı Mobil Uygulamalar ve Araçlar`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4">
          <li>
            <span className="font-semibold">Diyanet Kur’an-ı Kerim Uygulaması</span>
            <span className="text-xs text-gray-400 ml-1">
              — Harf ve kelime okuma, sesli uygulamalar (App Store, Google Play)
            </span>
          </li>
          <li>
            <span className="font-semibold">Kur’an Hattı Öğrenme Uygulamaları</span>
            <span className="text-xs text-gray-400 ml-1">
              — Arap harflerinin yazılışı ve mahreç çalışmaları
            </span>
          </li>
          <li>
            <span className="font-semibold">Quiz ve Test Uygulamaları</span>
            <span className="text-xs text-gray-400 ml-1">
              — Bilgi ölçme ve pekiştirme araçları
            </span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Ek Tavsiyeler ve Bilgilendirme`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Bilgi kirliliğine karşı yalnızca Diyanet ve benzeri kurumların kaynaklarını kullanın.`}
          </li>
          <li>
            {`Güncel uygulamalar için düzenli olarak App Store ve Google Play’i kontrol edin.`}
          </li>
          <li>
            {`Ek kaynaklardan edindiğiniz bilgileri hocalarınızla paylaşarak doğruluğunu teyit edin.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu bölümdeki linkler ve kaynaklar sürekli güncellenmektedir. Güvenilirlik için resmi adresleri tercih edin.`}
        </p>
      </div>
    </section>
  );
}