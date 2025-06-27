import Link from "next/link";

export default function HecelemePage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Heceleme ve Harf Birleştirme`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an okumaya yeni başlayanlar için harflerin birleştirilmesi, hece hece okuma ve kelime oluşturma pratikleri bu bölümde! Adım adım uygulamalar, sesli örnekler ve interaktif alıştırmalar ile sıfırdan ileri düzeye ulaşabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Heceleme Basamakları`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`İki harfin birleştirilmesi ve okunuşu`}</li>
          <li>{`Üç ve daha fazla harf ile kelime oluşturma`}</li>
          <li>{`Hareke, şedde ve cezm ile okuma egzersizleri`}</li>
          <li>{`Sesli ve yazılı örneklerle pratik`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Heceleme çalışmaları, Kur’an harflerini hızlı ve doğru okumayı öğrenmek için vazgeçilmezdir. Aşağıdaki uygulamalarla bol bol pratik yapmanızı öneririz.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Uygulamalar ve Pratikler`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://elifba.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Elifba Portalı`}
            <div className="text-xs text-gray-400 mt-1">{`Heceleme ve harf birleştirme interaktif uygulamalar`}</div>
          </a>
          <a
            href="https://www.youtube.com/@diyanetkuranokumalar"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet YouTube: Heceleme Videoları`}
            <div className="text-xs text-gray-400 mt-1">{`Adım adım heceleme ve kelime okuma videoları`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Tavsiyeler ve Ek Bilgi`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Her gün kısa süreli tekrarlar ile harf birleştirme hızınızı artırabilirsiniz.`}
          </li>
          <li>
            {`Duyduğunuzu tekrar ederek sesli pratik yapmak kalıcı öğrenme sağlar.`}
          </li>
          <li>
            {`Yanlış okumalardan kaçınmak için örnek videoları yakından takip edin.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Tüm içerikler Diyanet ve güvenilir İslami kaynaklardan derlenmiştir. İlerledikçe bu bölümdeki uygulamalara tekrar dönebilirsiniz.`}
        </p>
      </div>
    </section>
  );
}