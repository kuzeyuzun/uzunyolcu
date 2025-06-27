import Link from "next/link";

export default function QuizPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Quiz ve Pratik Alıştırmalar`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an harflerini, tecvid kurallarını ve okuma bilgisini pekiştirmek için interaktif quizler ve pratik alıştırmalar! Her seviye için hazırlanmış sorular ve uygulamalı testlerle bilgini ölç, yanlışlarını gör ve kendini geliştir.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Quiz Konuları`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Elifba ve Arap harflerinin bilgisi`}</li>
          <li>{`Harf birleştirme ve heceleme uygulamaları`}</li>
          <li>{`Hareke, şedde, cezm testleri`}</li>
          <li>{`Temel tecvid kuralları ve örnekler`}</li>
          <li>{`Kur’an’dan kısa ayet okuma ve anlam testi`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Quizler hem başlangıç hem de ileri seviyeye uygun olacak şekilde hazırlanmıştır. Her yanlış cevaptan sonra doğru açıklama gösterilmektedir.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Online Quizler ve Uygulamalar`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://elifba.diyanet.gov.tr/Quiz"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Elifba Quiz`}
            <div className="text-xs text-gray-400 mt-1">{`Harf bilgisi ve temel okuma quizleri`}</div>
          </a>
          <a
            href="https://www.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Online Uygulamalar`}
            <div className="text-xs text-gray-400 mt-1">{`Kur’an eğitimi için çeşitli test ve uygulamalar`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Tavsiye ve Bilgilendirme`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Quizleri düzenli tekrar ederek ilerlemenizi kontrol edin.`}
          </li>
          <li>
            {`Yanlış cevaplarda açıklamaları dikkatle inceleyin ve eksik bilgileri tekrar edin.`}
          </li>
          <li>
            {`Soruları farklı zamanlarda çözerek bilgilerinizi pekiştirebilirsiniz.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Tüm quizler Diyanet ve güvenilir eğitim kaynaklarından alınmıştır. Bilgi seviyenizi ölçmek için istediğiniz sıklıkta kullanabilirsiniz!`}
        </p>
      </div>
    </section>
  );
}