import Link from "next/link";

export default function OkumaHatalariVeDuzeltmePage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">{`Okuma Hataları ve Düzeltme Yöntemleri`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an okurken yapılan yaygın hatalar ve bunların düzeltilmesi için pratik öneriler! Harf, hece ve tecvid hatalarını tanıyarak doğru okuma alışkanlığı kazanabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Yaygın Okuma Hataları`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Harf mahreci yanlışlığı (ör. ع ve ا, ق ve ك)`}</li>
          <li>{`Şedde, hareke ve cezm hataları`}</li>
          <li>{`Med (uzatma) ve kısaltma hataları`}</li>
          <li>{`Tecvid kurallarının atlanması (ihfa, idgam vb.)`}</li>
          <li>{`Kelime ve cümle bölmede yanlışlık`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Her hata, doğru sesli ve görsel örneklerle kolayca düzeltilebilir. Kendinizi kaydedip dinlemek, hataları fark etmenize yardımcı olur.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Düzeltme Teknikleri ve Kaynaklar`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://www.youtube.com/@diyanetkuranokumalar"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet YouTube: Okuma Hataları ve Düzeltme`}
            <div className="text-xs text-gray-400 mt-1">{`Uzman hocalardan örnek düzeltmeler ve pratikler`}</div>
          </a>
          <a
            href="https://elifba.diyanet.gov.tr/"
            target="_blank"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Diyanet Elifba Portalı`}
            <div className="text-xs text-gray-400 mt-1">{`Harf ve kelime düzeltme interaktif uygulamalar`}</div>
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Pratik Tavsiyeler ve Ek Bilgi`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            {`Zorlandığınız harf ve kelimeleri tekrar tekrar okuyun, ses kaydı alın.`}
          </li>
          <li>
            {`Yanlış yaptığınız yerleri uzman hocalardan veya uygulamalı videolardan kontrol edin.`}
          </li>
          <li>
            {`Her okuma sonrası kısa tekrarlar ve düzeltme çalışmaları yapın.`}
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu bölümdeki düzeltme önerileri Diyanet ve güvenilir kaynaklardan derlenmiştir. Sabırla pratik yapmak başarıyı getirir!`}
        </p>
      </div>
    </section>
  );
}