import Link from "next/link";

export default function OkumaBelgelendirmeVeIlerlemeTakibiPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Okuma Belgelendirme ve İlerleme Takibi`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an okumayı öğrenme sürecinizde ilerlemenizi takip etmek ve başarılarınızı belgelendirmek için çeşitli yöntemler! Online sınavlar, belge ve sertifika imkanları ile motivasyonunuzu artırabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Nasıl Takip Edebilirim?`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Düzenli quiz ve uygulama sınavları ile gelişim ölçümü`}</li>
          <li>{`Kendi okuma kayıtlarınızı saklayarak ilerlemenizi izleme`}</li>
          <li>{`Diyanet ve resmi kurslardan alınan dijital veya basılı sertifikalar`}</li>
          <li>{`Kurs hocaları tarafından verilen başarı belgeleri`}</li>
          <li>{`Online eğitim portallarında otomatik ilerleme takibi`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Belgelendirme ve ilerleme takibi motivasyonunuzu artırır, eksiklerinizi fark etmenize yardımcı olur. Özellikle çocuklar ve yeni başlayanlar için teşvik edicidir.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Online Belgelendirme ve Takip Kaynakları`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://kurankursu.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Online Kur’an Kursları`}
            <div className="text-xs text-gray-400 mt-1">{`Kurs sonunda resmi katılım ve başarı belgeleri`}</div>
          </a>
          <a
            href="https://elifba.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Elifba Portalı`}
            <div className="text-xs text-gray-400 mt-1">{`Dijital ilerleme takibi ve interaktif sertifika`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Tavsiyeler ve Ek Bilgilendirme`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Her aşamayı tamamladığınızda küçük hedefler belirleyin ve başarılarınızı kutlayın.`}
          </li>
          <li>
            {`Kendi sesli kayıtlarınızı veya quiz sonuçlarınızı saklayarak ilerlemenizi görselleştirin.`}
          </li>
          <li>
            {`Diyanet ve resmi platformlardan alınan belgeler, ilerde yeni seviyelere geçerken avantaj sağlar.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu bölümdeki bilgiler Diyanet ve güvenilir İslami eğitim portallarından alınmıştır. Başarılarınızın belgelenmesi motivasyonunuzu artıracaktır!`}
        </p>
      </div>
    </section>
  );
}