import Link from "next/link";

export default function HadislerHazinesiPage() {
  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 rounded-xl bg-[#23263a] shadow-lg border border-[#292c3f]">
      {/* Üst Menü */}
      <div className="flex flex-wrap justify-between items-center mb-8 gap-2">
        <div className="flex gap-2">
          <Link
            href="/"
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition font-semibold"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/islam"
            className="px-4 py-2 bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600 transition font-semibold"
          >
            İslam Menüsü
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-emerald-300">Hadisler Hazinesi</h1>
      </div>

      {/* Peygamberimizin Hadislerin Yayılması Hakkındaki Sözleri */}
      <div className="mb-6 p-4 bg-[#1d2233] rounded-lg border-l-4 border-emerald-400">
        <h2 className="text-lg font-semibold text-emerald-200 mb-2">Peygamberimizin (s.a.s.) Hadislerin Yayılması Hakkındaki Sözleri</h2>
        <p className="mb-2 text-gray-100 italic">
          {`"Benden (duyduğunuz) bir ayeti dahi olsa insanlara ulaştırınız."`}
        </p>
        <p className="mb-2 text-emerald-200 text-sm">
          (Hadis: Buhârî, Enbiyâ, 50)
        </p>
        <p className="mb-2 text-gray-100 italic">
          {`"Burada bulunanlar bulunmayanlara (benim sözlerimi) ulaştırsın."`}
        </p>
        <p className="text-emerald-200 text-sm">
          (Hadis: Buhârî, İlim, 37; Tirmizî, İlim, 7)
        </p>
      </div>

      <p className="mb-4 text-gray-200">
        {`Hadis-i Şerifler, Peygamber Efendimiz Hz. Muhammed’in (s.a.s.) söz, fiil ve takrirlerinden oluşan, İslami hayatın anlaşılması ve yaşanmasında Kur’an’dan sonra en temel kaynağı oluşturan kıymetli hazinelerdir. Hadisler, inançtan ahlaka, ibadetten toplumsal ilişkilere kadar hayatımızın her alanına ışık tutar. Bu sayfada, sahih kaynaklardan seçilmiş bazı hadis-i şerifleri, anlamları ve açıklamalarıyla birlikte bulabilirsiniz.`}
      </p>

      <h2 className="text-xl font-semibold text-sky-300 mb-3 mt-6">İman ve Takva Üzerine Hadisler</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-3">
        <li>
          <span className="block text-emerald-200">
            {`"Ameller niyetlere göredir. Herkese ancak niyet ettiği vardır."`}
          </span>
          <span className="block text-gray-400 text-sm">Buhârî, Bed’ü’l-Vahy, 1; Müslim, İmâre, 155.</span>
        </li>
        <li>
          <span className="block text-emerald-200">
            {`"Müminin niyeti amelinden hayırlıdır."`}
          </span>
          <span className="block text-gray-400 text-sm">Taberânî, el-Mu’cemü’l-Evsat, 6/185</span>
        </li>
        <li>
          <span className="block text-emerald-200">
            {`"Allah sizin suretlerinize ve mallarınıza bakmaz; ancak kalplerinize ve amellerinize bakar."`}
          </span>
          <span className="block text-gray-400 text-sm">Müslim, Birr, 33.</span>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Ahlak ve Güzel Davranışlara Dair Hadisler</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-3">
        <li>
          <span className="block text-emerald-200">
            {`"Kolaylaştırınız, zorlaştırmayınız; müjdeleyiniz, nefret ettirmeyiniz."`}
          </span>
          <span className="block text-gray-400 text-sm">Buhârî, İlim, 11; Müslim, Cihâd, 6.</span>
        </li>
        <li>
          <span className="block text-emerald-200">
            {`"Sizin en hayırlınız ahlâkı en güzel olanınızdır."`}
          </span>
          <span className="block text-gray-400 text-sm">Buhârî, Menâkıb, 23; Tirmizî, Birr, 61.</span>
        </li>
        <li>
          <span className="block text-emerald-200">
            {`"İnsanlara merhamet etmeyene Allah merhamet etmez."`}
          </span>
          <span className="block text-gray-400 text-sm">Buhârî, Tevhid, 2; Müslim, Fedâil, 66.</span>
        </li>
        <li>
          <span className="block text-emerald-200">
            {`"Müslüman, elinden ve dilinden diğer Müslümanların selamette olduğu kimsedir."`}
          </span>
          <span className="block text-gray-400 text-sm">Buhârî, İman, 4; Müslim, İman, 64.</span>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Sabır, Şükür ve Dua ile İlgili Hadisler</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-3">
        <li>
          <span className="block text-emerald-200">
            {`"Gerçek sabır, musibetin ilk anında gösterilendir."`}
          </span>
          <span className="block text-gray-400 text-sm">Buhârî, Cenâiz, 32; Müslim, Cenâiz, 14.</span>
        </li>
        <li>
          <span className="block text-emerald-200">
            {`"Kim insanlara teşekkür etmezse Allah’a da şükretmez."`}
          </span>
          <span className="block text-gray-400 text-sm">Tirmizî, Birr, 35.</span>
        </li>
        <li>
          <span className="block text-emerald-200">
            {`"Dua, ibadetin özüdür."`}
          </span>
          <span className="block text-gray-400 text-sm">Tirmizî, Deavat, 1.</span>
        </li>
        <li>
          <span className="block text-emerald-200">
            {`"Birbirinize hediye verin, birbirinizi seversiniz."`}
          </span>
          <span className="block text-gray-400 text-sm">Buhârî, Edeb, 57.</span>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Dünya ve Ahiret Dengesi Üzerine Hadisler</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-3">
        <li>
          <span className="block text-emerald-200">
            {`"Dünyada bir garip veya yolcu gibi ol."`}
          </span>
          <span className="block text-gray-400 text-sm">Buhârî, Rikak, 3.</span>
        </li>
        <li>
          <span className="block text-emerald-200">
            {`"Gerçek zenginlik, mal çokluğu değil gönül tokluğudur."`}
          </span>
          <span className="block text-gray-400 text-sm">Buhârî, Rikak, 15; Müslim, Zekât, 130.</span>
        </li>
        <li>
          <span className="block text-emerald-200">
            {`"Hiç ölmeyecekmiş gibi dünya için, yarın ölecekmiş gibi ahiret için çalış."`}
          </span>
          <span className="block text-gray-400 text-sm">Deylemî, el-Firdevs, II, 217.</span>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Kaynaklar ve Daha Fazlası</h2>
      <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
        <li>
          <a href="https://hadis.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            Diyanet Hadis Portalı
          </a>
        </li>
        <li>
          <a href="https://islamansiklopedisi.org.tr/hadis" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            TDV İslam Ansiklopedisi - Hadis
          </a>
        </li>
        <li>
          <a href="https://www.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            Diyanet İşleri Başkanlığı Resmi Web Sitesi
          </a>
        </li>
      </ul>
      <p className="text-gray-400 text-xs">{`Bu sayfadaki hadisler Diyanet Hadis Portalı, TDV İslam Ansiklopedisi ve sahih hadis kaynaklarından derlenmiştir.`}</p>
    </section>
  );
}