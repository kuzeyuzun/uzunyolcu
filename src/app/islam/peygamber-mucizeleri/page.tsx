import Link from "next/link";

export default function PeygamberMucizeleriPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">Peygamber Mucizeleri</h1>
      </div>

      <p className="mb-4 text-gray-200">
        {`Peygamber mucizeleri, Allah'ın (c.c.) seçkin kulları olan peygamberleri desteklemek, onların hak peygamber olduklarını göstermek ve insanları doğru yola davetlerinde güçlendirmek üzere bahşettiği olağanüstü olaylardır. Mucizeler, insan aklının ve tabiat kanunlarının ötesinde, Allah’ın izniyle gerçekleşen olaylardır. Peygamberler, mucizeleri kendi güçleriyle değil, yalnızca Allah’ın dilemesiyle göstermişlerdir. Diyanet kaynaklarına göre mucizeler, peygamberlerin davetinin doğruluğunu tasdik eden ilahi işaretlerdir.`}
      </p>

      <h2 className="text-xl font-semibold text-sky-300 mb-3 mt-6">Mucize Nedir?</h2>
      <p className="mb-4 text-gray-200">
        {`Mucize, Arapça kökenli bir kelime olup “aciz bırakan, benzeri yapılamayan olağanüstü olay” anlamına gelir. İslam’da peygamberlerin doğruluğunu ispatlamak için Allah’ın izniyle gösterdikleri, akıl ve tabiat yasalarını aşan olaylara mucize denir. Mucize, sadece peygamberlere mahsustur ve onların peygamberliğini tasdik etmek için gönderilmiştir. Peygamber olmayan kişilerin gösterdiği olağanüstü olaylara ise keramet denir.`}
      </p>

      <h2 className="text-xl font-semibold text-sky-300 mb-3 mt-6">Kur’an’da Mucizeler</h2>
      <p className="mb-4 text-gray-200">
        {`Kur’an-ı Kerim’de birçok peygamberin mucizelerinden bahsedilir. Bu mucizeler, peygamberlerin hak davalarını ispatlamaları ve kavimlerini inanca davet etmeleri için Allah tarafından verilir. Kur’an’da mucizelerin Allah’ın kudretinin bir göstergesi olduğu vurgulanır.`}
      </p>

      <h2 className="text-xl font-semibold text-sky-300 mb-3 mt-6">Bazı Peygamberlerin Mucizeleri</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>
          <strong>Hz. Muhammed (s.a.s.):</strong> {`En büyük mucizesi Kur’an-ı Kerim’dir. Bunun dışında parmaklarından su akması, ayı ikiye bölmesi (şakku’l-kamer), az bir yiyeceğin çoğalması, hayvan ve taşların konuşması gibi pek çok mucize gösterdiği sahih hadislerde bildirilmektedir.`}
        </li>
        <li>
          <strong>Hz. Musa (a.s.):</strong> {`Asası ile Kızıldeniz’i ikiye yarması, asasının yılana dönüşmesi, elinin bembeyaz parlaması gibi mucizeleriyle Firavun ve kavmine karşı Allah’ın kudretini göstermiştir.`}
        </li>
        <li>
          <strong>Hz. İsa (a.s.):</strong> {`Allah’ın izniyle ölüleri diriltmesi, anadan doğma kör ve alacalıyı iyileştirmesi, çamurdan kuş yapıp üflemesiyle canlanması ve daha bebekken konuşması en bilinen mucizelerindendir.`}
        </li>
        <li>
          <strong>Hz. İbrahim (a.s.):</strong> {`Nemrud tarafından ateşe atıldığında ateşin onu yakmaması, putperestlerle tartışmasında gösterdiği olağanüstü bilgiler ve olaylar.`}
        </li>
        <li>
          <strong>Hz. Salih (a.s.):</strong> {`Kavminin isteği üzerine kayadan dişi deve çıkarması mucizesiyle tanınır.`}
        </li>
        <li>
          <strong>Hz. Nuh (a.s.):</strong> {`Büyük tufan mucizesiyle kavmini uyarıp kurtuluş gemisini inşa etmiştir.`}
        </li>
        <li>
          <strong>Hz. Yunus (a.s.):</strong> {`Balığın karnında diri kalması ve Allah’a dua ederek kurtulması mucizevi bir olaydır.`}
        </li>
        <li>
          <strong>Hz. Davud (a.s.) ve Hz. Süleyman (a.s.):</strong> {`Demiri yumuşatmak, kuş dili bilmek, rüzgâra hükmetmek, cinlere ve hayvanlara söz geçirmek gibi mucizeleri vardır.`}
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-sky-300 mb-3 mt-6">Peygamberimizin (s.a.s.) Mucizelerinden Bazıları</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>
          <strong>Kur’an-ı Kerim:</strong> {`İnsan sözüyle benzerinin getirilemeyeceği, kıyamete kadar devam edecek en büyük mucizedir.`}
        </li>
        <li>
          <strong>Ayın İkiye Bölünmesi:</strong> {`Mekke’de müşriklerin isteği üzerine gösterilmiş ve ay ikiye bölünmüştür. (Kamer Suresi, 1-2)`} 
        </li>
        <li>
          <strong>Parmaklarından Su Akması:</strong> {`Sahabelerin suya ihtiyaç duyduğu bir anda, Peygamberimizin parmaklarından su akmış ve ordunun tamamı susuzluktan kurtulmuştur.`}
        </li>
        <li>
          <strong>Az Yiyeceğin Bereketlenmesi:</strong> {`Onlarca kişinin yeteceği kadar az yiyecek çoğalmış, birçok defa kalabalık gruplar doyurulmuştur.`}
        </li>
        <li>
          <strong>Hayvan ve Taşların Kendisine Selam Vermesi:</strong> {`Peygamberimiz, taşların ve hayvanların kendisine selam verdiğini bildirmiştir.`}
        </li>
        <li>
          <strong>İsra ve Miraç:</strong> {`Bir gecede Mescid-i Haram’dan Mescid-i Aksa’ya ve oradan da göklere yükselmesi en büyük mucizelerindendir.`}
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-sky-300 mb-3 mt-6">Mucizelerin Amacı ve Önemi</h2>
      <p className="mb-4 text-gray-200">
        {`Mucizeler, Allah’ın kudretini ve peygamberlerin hak davalarını göstermek için verilmiştir. Her mucize, imanın güçlenmesine ve hakikatin ortaya çıkmasına vesile olmuştur. Peygamber mucizeleri, insanları imana, ahlaka ve doğru yola davet eden ilahi işaretlerdir.`}
      </p>

      <h2 className="text-xl font-semibold text-sky-300 mb-3 mt-6">Kaynaklar ve Daha Fazlası</h2>
      <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
        <li>
          <a href="https://islamansiklopedisi.org.tr/mucize" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            TDV İslam Ansiklopedisi - Mucize
          </a>
        </li>
        <li>
          <a href="https://www.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            Diyanet İşleri Başkanlığı Resmi Web Sitesi
          </a>
        </li>
        <li>
          <a href="https://kurul.diyanet.gov.tr/Detay/214/peygamberlerin-mucizeleri-nelerdir" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            Diyanet Kurul: Peygamberlerin Mucizeleri Nelerdir?
          </a>
        </li>
      </ul>
      <p className="text-gray-400 text-xs">{`Bu sayfadaki bilgiler Diyanet İşleri Başkanlığı ve TDV İslam Ansiklopedisi başta olmak üzere güvenilir İslami kaynaklardan derlenmiştir.`}</p>
    </section>
  );
}