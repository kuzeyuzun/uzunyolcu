import Link from "next/link";

export default function ElmaliliMealPage() {
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
        </div>
        <h1 className="text-2xl font-bold text-emerald-300">{`Elmalılı Hamdi Yazır Meali`}</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Elmalılı Hamdi Yazır’ın “Hak Dini Kur’an Dili” adlı eseri, Türkiye’de en çok okunan ve tavsiye edilen klasik Kur’an mealidir. Bu sayfada Elmalılı’nın sade ve derinlikli anlatımıyla, Kur’an’ın anlam dünyasına adım atabilirsiniz.`}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">{`Mealin Özellikleri`}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>{`Orijinal Arapça metinle birlikte sadeleştirilmiş Türkçe çeviri`}</li>
          <li>{`Ayet ayet açıklamalar ve dipnotlar`}</li>
          <li>{`Klasik Osmanlıca üslubuyla derinlikli tefsir notları`}</li>
          <li>{`Diyanet tarafından tavsiye edilen ve güvenilirliği onaylıdır`}</li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4 text-gray-100">
          {`Bu meal, yalnızca bireysel okumalar değil, aynı zamanda toplu dersler ve mukabeleler için de uygundur.`}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">{`Tüm Sure ve Ayetler`}</h2>
        <p className="text-gray-300 mb-4">
          {`Her surenin başlığına tıklayarak ilgili sureyi ve Elmalılı mealiyle beraber ayet ayet açıklamalarını görebilirsiniz.`}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/islam/kuran-i-kerim/elmalili-meal/fatiha"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Fâtiha Suresi`}
          </Link>
          <Link
            href="/islam/kuran-i-kerim/elmalili-meal/bakara"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Bakara Suresi`}
          </Link>
          <Link
            href="/islam/kuran-i-kerim/elmalili-meal/ali-imran"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            {`Âl-i İmrân Suresi`}
          </Link>
          {/* Diğer sureler için de aynı yapı devam ettirilebilir */}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">{`Dış Kaynaklar ve PDF`}</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            <a href="https://kuran.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet Kur’an Portalı (Elmalılı Meali dahil)`}
            </a>
          </li>
          <li>
            <a href="https://www.kuranmeali.com/Elmalili-Hamdi-Yazir.htm" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Kur’an Meali Online: Elmalılı Hamdi Yazır`}
            </a>
          </li>
          <li>
            <a href="https://www.diyanetvakfi.org.tr/kitap/hak-dini-kuran-dili-1-cilt-1-2-3-4-5-6-7-8" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              {`Diyanet Vakfı: Basılı/PDF Tam Metin`}
            </a>
          </li>
        </ul>
        <p className="text-gray-400 text-xs">
          {`Bu sayfadaki meal ve bağlantılar Diyanet ve muteber İslami kaynaklardan alınmıştır.`}
        </p>
      </div>
    </section>
  );
}