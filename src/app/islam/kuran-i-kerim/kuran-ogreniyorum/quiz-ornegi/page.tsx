import Link from "next/link";

export default function QuizOrnegiPage() {
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
          <Link
            href="/islam/kuran-i-kerim/kuran-ogreniyorum/quiz"
            className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition font-semibold"
          >
            {`Quiz ve Pratikler`}
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-emerald-300">{`Quiz Örneği: Temel Kur’an Bilgisi`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Aşağıda, Kur’an harfleri, heceleme ve tecvid konularında örnek sorular bulabilirsiniz. Quizler, hem bilgilerinizi ölçmek hem de yanlışlarınızı görerek kendinizi geliştirmek için hazırlanmıştır.`}
      </p>

      <div className="mb-8">
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-6 text-gray-100">
          {`Cevaplar bölümünün altında her sorunun doğru cevabı ve kısa açıklaması yer almaktadır.`}
        </div>
        <ol className="list-decimal list-inside text-gray-300 space-y-4">
          <li>
            <div className="mb-2">{`Aşağıdakilerden hangisi Arap alfabesindeki harflerden biridir?`}</div>
            <ul className="space-y-1 ml-4">
              <li>A) ب</li>
              <li>B) Ç</li>
              <li>C) P</li>
              <li>D) Ş</li>
            </ul>
            <div className="text-sm text-emerald-300 mt-1">{`Cevap: A — "ب" (Be) harfi Arap alfabesindendir.`}</div>
          </li>
          <li>
            <div className="mb-2">{`"Med" kuralı Kur’an okurken hangi harf veya hareke ile ilgilidir?`}</div>
            <ul className="space-y-1 ml-4">
              <li>A) Şedde</li>
              <li>B) Uzatma (ا - و - ي)</li>
              <li>C) Cezm</li>
              <li>D) Sukun</li>
            </ul>
            <div className="text-sm text-emerald-300 mt-1">{`Cevap: B — Med, uzatma harfleriyle ilgilidir: ا (Elif), و (Vav), ي (Ya).`}</div>
          </li>
          <li>
            <div className="mb-2">{`Aşağıdakilerden hangisi tecvid kurallarından biri değildir?`}</div>
            <ul className="space-y-1 ml-4">
              <li>A) İdgam</li>
              <li>B) İhlas</li>
              <li>C) İhfa</li>
              <li>D) İzhar</li>
            </ul>
            <div className="text-sm text-emerald-300 mt-1">{`Cevap: B — "İhlas", bir sure adıdır. Diğerleri tecvid kurallarıdır.`}</div>
          </li>
          <li>
            <div className="mb-2">{`"شَدَّة" (Şedde) harfi bir kelimede neyi gösterir?`}</div>
            <ul className="space-y-1 ml-4">
              <li>A) Harfin iki defa okunacağını</li>
              <li>B) Uzatılacağını</li>
              <li>C) Sessiz olacağını</li>
              <li>D) Harekeli olacağını</li>
            </ul>
            <div className="text-sm text-emerald-300 mt-1">{`Cevap: A — Şedde, harfin iki defa okunacağını gösterir.`}</div>
          </li>
        </ol>
      </div>

      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Daha Fazla Quiz ve Uygulama`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://elifba.diyanet.gov.tr/Quiz"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Elifba Quiz`}
            <div className="text-xs text-gray-400 mt-1">{`Daha fazla interaktif test ve uygulama`}</div>
          </a>
          <a
            href="https://www.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Resmî Web Sitesi`}
            <div className="text-xs text-gray-400 mt-1">{`Kur’an eğitimi için ek kaynaklar`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Ek Bilgi ve Tavsiyeler`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Her quiz sonrası yanlışlarınızı gözden geçirin ve konuları tekrar edin.`}
          </li>
          <li>
            {`Kendi sorularınızı hazırlayarak bilgilerinizi pekiştirebilirsiniz.`}
          </li>
          <li>
            {`Düzenli tekrar ve pratik ile Kur’an okuma bilginiz hızla artacaktır.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu örnek quizler eğitim amaçlıdır ve Diyanet kaynaklarından derlenmiştir. Başarılar!`}
        </p>
      </div>
    </section>
  );
}