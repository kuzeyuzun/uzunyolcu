import Link from "next/link";

export default function SssPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Sıkça Sorulan Sorular (SSS)`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an okumayı öğrenme sürecinde sık karşılaşılan soruların cevapları bu bölümde! Temel kavramlardan teknik detaylara, uygulamadan belgelendirmeye kadar birçok konuda pratik bilgiler.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Sık Sorulan Sorular`}</h2>
        <div className="space-y-6">
          <div>
            <div className="font-bold text-emerald-200">Kur’an okumayı öğrenmek için kaç yaşında olmak gerekir?</div>
            <div className="text-gray-300">Her yaşta Kur’an okumayı öğrenmek mümkündür. Çocuklar için genellikle 4-5 yaş uygun görülse de, yetişkinler de her yaşta başlayabilir.</div>
          </div>
          <div>
            <div className="font-bold text-emerald-200">Hiç Arapça bilmeden Kur’an okunur mu?</div>
            <div className="text-gray-300">Evet, Kur’an okumak için Arapça anlam bilmek gerekmez. Elifba ve temel okuma kuralları öğrenilerek Kur’an harfleriyle okumak mümkündür.</div>
          </div>
          <div>
            <div className="font-bold text-emerald-200">En hızlı nasıl öğrenebilirim?</div>
            <div className="text-gray-300">Günlük kısa tekrarlar, sesli pratik ve video derslerle desteklenen sistemli bir çalışma en hızlı öğrenme yoludur. Hoca veya rehber eşliğinde ilerlemek de faydalıdır.</div>
          </div>
          <div>
            <div className="font-bold text-emerald-200">Belge veya sertifika alabilir miyim?</div>
            <div className="text-gray-300">Evet, Diyanet’in online kursları ve resmi programları sonunda başarı belgesi veya katılım sertifikası alınabilir.</div>
          </div>
          <div>
            <div className="font-bold text-emerald-200">Okuma sırasında en sık yapılan hatalar nelerdir?</div>
            <div className="text-gray-300">Harf mahreci, şedde, hareke, med ve tecvid kurallarının yanlış uygulanması en sık yapılan hatalardır. Bu hatalar pratik ve video izleyerek kolayca düzeltilebilir.</div>
          </div>
          <div>
            <div className="font-bold text-emerald-200">Online kaynaklar güvenli mi?</div>
            <div className="text-gray-300">Diyanet ve benzeri güvenilir resmi platformlardan alınan içerikler güvenilirdir. Kişisel blog ve rastgele videolarda dikkatli olunmalıdır.</div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Daha Fazla Bilgi ve Destek`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://elifba.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Elifba Portalı`}
            <div className="text-xs text-gray-400 mt-1">{`Online eğitim, quiz ve uygulamalar`}</div>
          </a>
          <a
            href="https://kurankursu.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Online Kur’an Kursları`}
            <div className="text-xs text-gray-400 mt-1">{`Canlı ders ve resmi sertifika imkânı`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Ek Tavsiyeler`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Herhangi bir sorunuzda hocalara veya resmi platformlara danışmaktan çekinmeyin.`}
          </li>
          <li>
            {`Online kaynakları kullanırken mutlaka resmi ve güvenilir siteleri tercih edin.`}
          </li>
          <li>
            {`Kendi öğrenme hızınızı dikkate alın, acele etmeyin ve bol tekrar yapın.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`SSS bölümü düzenli olarak güncellenmektedir. Eksik gördüğünüz veya merak ettiğiniz soruları bize iletebilirsiniz.`}
        </p>
      </div>
    </section>
  );
}