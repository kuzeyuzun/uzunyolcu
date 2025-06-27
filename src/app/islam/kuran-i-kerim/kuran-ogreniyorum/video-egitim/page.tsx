import Link from "next/link";

export default function VideoEgitimPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Video Eğitim ve Canlı Dersler`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an-ı Kerim’i en etkili şekilde öğrenmek için hazırlanan video eğitimler ve canlı dersler burada! Diyanet ve güvenilir eğitim platformlarından alınan içeriklerle, harflerden tecvid uygulamalarına kadar tüm seviyeler için görsel anlatımlar bulabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Bölümde Neler Var?`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Harflerin doğru yazılışı ve telaffuzu (video ile)`}</li>
          <li>{`Heceleme, hareke, şedde, cezm uygulamaları`}</li>
          <li>{`Kelime ve ayet okuma pratiği`}</li>
          <li>{`Tecvid ve tilavet kuralları video anlatımı`}</li>
          <li>{`Canlı dersler ve soru-cevap seansları`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Video eğitimler, öğrenmeyi hızlandırır ve kalıcı hale getirir. Geri sarıp tekrar izleyerek eksiklerinizi kolayca tamamlayabilirsiniz.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Online Video ve Canlı Kaynaklar`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://www.youtube.com/@diyanetkuranokumalar"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet YouTube: Kur’an Okuma Videoları`}
            <div className="text-xs text-gray-400 mt-1">{`Başlangıçtan ileri düzeye video dersler`}</div>
          </a>
          <a
            href="https://elifba.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Elifba Portalı`}
            <div className="text-xs text-gray-400 mt-1">{`Video ve sesli harf, kelime, ayet eğitimleri`}</div>
          </a>
          <a
            href="https://kurankursu.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Online Kur’an Kursları`}
            <div className="text-xs text-gray-400 mt-1">{`Canlı dersler, soru-cevap ve uygulama seansları`}</div>
          </a>
          <a
            href="https://www.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Resmî Web Sitesi`}
            <div className="text-xs text-gray-400 mt-1">{`Duyurular, canlı yayın ve ek materyaller`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Ek Bilgi ve Tavsiyeler`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Öğrendiğiniz konuları tekrar tekrar izleyin ve sesli tekrar yapın.`}
          </li>
          <li>
            {`Canlı derslere katılarak uzmanlardan doğrudan destek alın.`}
          </li>
          <li>
            {`Aynı dersi farklı kaynaklardan izleyerek çeşitlilik kazanın.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu bölümdeki video ve canlı ders kaynakları Diyanet ve güvenilir İslami eğitim platformlarından alınmıştır. Video tekrarları ile öğrenme hızınız artacaktır!`}
        </p>
      </div>
    </section>
  );
}