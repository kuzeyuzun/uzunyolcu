import Link from "next/link";

export default function IletisimVeDestekPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`İletişim ve Destek`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an-ı Kerim öğrenme sürecinizde sorularınıza cevap bulmak, destek almak ve daha fazla bilgi için resmi platformlar ve iletişim kanalları! Uzman hocalardan, Diyanet’ten ve güvenilir kaynaklardan yardım alabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Destek ve Danışma Kanalları`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Diyanet çağrı merkezi ve destek hattı`}</li>
          <li>{`Online kuran kurslarında hoca ve rehber desteği`}</li>
          <li>{`Resmi e-posta ve iletişim formları`}</li>
          <li>{`Sıkça sorulan sorular ve rehber içerikler`}</li>
          <li>{`Yerel müftülükler ve Kur’an kursları ile yüz yüze iletişim`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Her türlü sorunuzda resmi platformlardan veya uzman hocalardan destek almak en doğru yoldur. Bilgi kirliliğinden korunmak için mutlaka güvenilir kaynaklara başvurun.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Online İletişim ve Destek Kaynakları`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://www.diyanet.gov.tr/iletisim"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet İletişim Formu`}
            <div className="text-xs text-gray-400 mt-1">{`Her türlü soru ve destek için resmi iletişim`}</div>
          </a>
          <a
            href="https://kurankursu.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Online Kur’an Kursları`}
            <div className="text-xs text-gray-400 mt-1">{`Canlı dersler ve hoca desteği`}</div>
          </a>
          <a
            href="https://www.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Resmî Web Sitesi`}
            <div className="text-xs text-gray-400 mt-1">{`Güncel duyurular ve destek bilgileri`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Tavsiyeler ve Bilgilendirme`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Soru ve sorunlarınızda resmi ve güvenilir platformlara başvurun.`}
          </li>
          <li>
            {`Bilgi kirliliğine karşı sadece uzmanlardan veya Diyanet’ten alınan bilgilerle hareket edin.`}
          </li>
          <li>
            {`Yüz yüze görüşme için yerel müftülükleri veya Kur’an kurslarını ziyaret edebilirsiniz.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu bölümdeki iletişim ve destek kaynakları Diyanet ve güvenilir kurumlardan alınmıştır. Sorularınız için her zaman danışabilirsiniz!`}
        </p>
      </div>
    </section>
  );
}