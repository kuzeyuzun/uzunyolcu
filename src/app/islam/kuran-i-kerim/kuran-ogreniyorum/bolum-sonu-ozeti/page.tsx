import Link from "next/link";

export default function BolumSonuOzetiPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Bölüm Sonu Özeti`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`“Kur’an Öğreniyorum” bölümü ile Kur’an harflerinden başlayarak tecvid, okuma pratikleri, quizler, video eğitimler ve ilerleme takibine kadar kapsamlı bir öğrenme süreci sunulmuştur. Bu süreçte, güvenilir kaynaklar ve resmi platformlarla desteklenmiş içeriklerle eksiksiz bir Kur’an okuma eğitimi hedeflenmiştir.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Ana Kazanımlar ve Hedefler`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Arap harflerini ve mahreçlerini doğru öğrenme`}</li>
          <li>{`Tecvid kurallarını kavrama ve uygulama pratiği`}</li>
          <li>{`Quiz ve uygulamalarla bilgiyi pekiştirme`}</li>
          <li>{`Video ve canlı derslerle görsel-işitsel destek`}</li>
          <li>{`Okuma hatalarını tanıyıp düzeltme alışkanlığı kazanma`}</li>
          <li>{`İlerleme takibi ve belgelendirme ile motivasyon sağlama`}</li>
          <li>{`Güvenilir kaynaklar ve destek platformlarıyla doğru bilgiye ulaşma`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Düzenli tekrar, uygulama ve destekle Kur’an okuma beceriniz hızla gelişecektir. Her aşamada sabır ve istikrar önemlidir.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Bir Sonraki Adım İçin Tavsiyeler`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Kur’an’ı anlamaya yönelik mealli ve tefsirli okumalar yapın.`}</li>
          <li>{`Düzenli olarak farklı hocalardan ve kaynaklardan dersler takip edin.`}</li>
          <li>{`Okuma pratiğiyle birlikte anlam bilgisini de geliştirin.`}</li>
          <li>{`İlgili Diyanet platformlarında yeni içerikleri ve duyuruları takip edin.`}</li>
          <li>{`Kendi öğrenme yolculuğunuzu başkalarıyla paylaşarak teşvik olun.`}</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Teşekkürler ve Dua`}</h2>
        <p className="text-gray-400 mb-2">
          {`Bu bölümdeki içeriklerin hazırlanmasında Diyanet ve güvenilir İslami eğitim platformlarından yararlanılmıştır. Kur’an’ı doğru ve güzel okumayı nasip etmesi için Allah’a dua ediyoruz. Başarılarınız daim olsun!`}
        </p>
        <p className="text-gray-400 text-xs">
          {`Her türlü görüş, öneri ve ek kaynak için iletişim sayfasından bize ulaşabilirsiniz.`}
        </p>
      </div>
    </section>
  );
}