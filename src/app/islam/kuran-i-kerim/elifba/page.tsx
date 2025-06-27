import Link from "next/link";

export default function ElifbaPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Elifba (Arapça Harfler)`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an okumaya ilk adım: Elifba! Arap harflerini tanımak, doğru seslendirmek ve mahreçlerini öğrenmek için bu bölümde harfler, yazılışları, sesli örnekler ve pratikler bulabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Harfler ve Mahreçler`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Arap alfabesindeki 28 harfin şekilleri`}</li>
          <li>{`Her harfin mahreci (çıkış noktası) ve sesi`}</li>
          <li>{`Video ve sesli örneklerle pekiştirme`}</li>
          <li>{`Kolay ezberleme tabloları ve pratikler`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Her harfin üzerinde uzun süre çalışmak, doğru mahreç ve telaffuz için kritiktir. Aşağıdaki kaynaklarda video dersler ve sesli alıştırmalar bulabilirsiniz.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Elifba Kaynakları ve Uygulamalar`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://elifba.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Elifba Portalı`}
            <div className="text-xs text-gray-400 mt-1">{`Harf öğretimi, sesli & görsel alıştırmalar`}</div>
          </a>
          <a
            href="https://www.youtube.com/@diyanetkuranokumalar"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet YouTube: Elifba Videoları`}
            <div className="text-xs text-gray-400 mt-1">{`Her harf için video ve sesli örnekler`}</div>
          </a>
          <a
            href="https://kurankursu.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Online Kur’an Kursları`}
            <div className="text-xs text-gray-400 mt-1">{`Kur’an okumayı sıfırdan öğrenmek için`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Ek Bilgi ve Tavsiyeler`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Her harfi telaffuz ederken ağzınızın, dilinizin ve boğazınızın konumuna dikkat edin.`}
          </li>
          <li>
            {`Yanlış alışkanlıkların önüne geçmek için video ve sesli örnekleri tekrar tekrar dinleyin.`}
          </li>
          <li>
            {`Doğru telaffuz için bir hocadan veya uzman eğitmenden destek alınması tavsiye edilir.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu bölümdeki tüm içerikler Diyanet ve güvenilir İslami kaynaklardan alınmıştır. Pratik yaptıkça ilerlemeniz hızlanacaktır!`}
        </p>
      </div>
    </section>
  );
}