import Link from "next/link";

export default function UserYorumlariVeIlhamVericiHikayelerPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Kullanıcı Yorumları ve İlham Verici Hikayeler`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an okumayı öğrenme serüveninde motivasyonunuzu artıracak; gerçek kullanıcı deneyimleri, ilham verici başarı hikayeleri ve öneriler! Her seviyeden katılımcının yolculuğu, sizin de başarabileceğinizi gösteriyor.`}
      </p>

      <div className="mb-10">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Gerçek Kullanıcı Yorumları`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>
            <span className="italic text-emerald-200">“Hiç Arapça bilmeden başladım, Diyanet’in online kursları ve video derslerle kısa sürede Kur’an okumayı öğrendim. Şimdi çocuklarıma da örnek oluyorum.”</span>
            <span className="block text-xs text-gray-400 mt-1">— Ayşe, 38 yaşında</span>
          </li>
          <li>
            <span className="italic text-emerald-200">“Başlangıçta harfleri ayırt etmekte zorlandım ama online quizler ve sesli pratiklerle çok ilerledim. Hocaların yönlendirmesi çok değerliydi.”</span>
            <span className="block text-xs text-gray-400 mt-1">— Mehmet, 24 yaşında</span>
          </li>
          <li>
            <span className="italic text-emerald-200">“Kur’an okumayı yaşlıyken öğrenmenin de mümkün olduğunu gördüm. Kurs sonunda sertifika almak motivasyonumu artırdı.”</span>
            <span className="block text-xs text-gray-400 mt-1">— Zeynep Teyze, 67 yaşında</span>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`İlham Verici Hikayeler`}</h2>
        <div className="space-y-6">
          <div>
            <div className="font-semibold text-sky-300">“Çocuklarla Birlikte Öğrenmek”</div>
            <div className="text-gray-300">
              {`Bir anne ve iki çocuğu, online Kur’an kurslarına birlikte katılarak her akşam pratik yapmış. Ailece düzenli tekrarlarla kısa sürede okuma becerilerini geliştirmişler. Anne, “Çocuklarımla birlikte öğrenmek hem beni hem onları çok mutlu etti,” diyor.`}
            </div>
          </div>
          <div>
            <div className="font-semibold text-sky-300">“İleri Yaşta Kur’an Okumak”</div>
            <div className="text-gray-300">
              {`Emekli olduktan sonra Kur’an okumayı öğrenmeye karar veren bir dede, “Yaşım ilerlemişti ama isteyince her şey oluyor,” diyerek başarısını paylaşıyor. Hocasıyla birebir dersler ve online videolar sayesinde hedefini gerçekleştirmiş.`}
            </div>
          </div>
          <div>
            <div className="font-semibold text-sky-300">“Engelleri Aşan Başarı”</div>
            <div className="text-gray-300">
              {`Görme engelli bir öğrenci, sesli okuma uygulamaları ve Diyanet’in rehberliği sayesinde Kur’an okumayı öğrenmiş. “Her engelin bir çözümü var, yeter ki vazgeçmeyin,” diyor.`}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-lg font-bold text-sky-300 mb-4">{`Siz de Yorum veya Hikayenizi Paylaşın!`}</h2>
        <p className="text-gray-400 mb-3">
          {`Kur’an’ı öğrenme yolculuğunuzda yaşadığınız deneyimi, tavsiyelerinizi veya başarı hikayenizi paylaşmak isterseniz iletişim sayfamızdan bize ulaşabilirsiniz. Sizin hikayeniz de başkalarına ilham kaynağı olabilir!`}
        </p>
        <Link
          href="/islam/kuran-i-kerim/kuran-ogreniyorum/iletisim-ve-destek"
          className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition font-semibold"
        >
          İletişim ve Destek
        </Link>
      </div>
    </section>
  );
}