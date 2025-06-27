import Link from "next/link";

export default function KuranIKerimPage() {
  return (
    <section className="max-w-3xl mx-auto mt-10 p-8 rounded-xl bg-[#23263a] shadow-lg border border-[#292c3f]">
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
        <h1 className="text-2xl font-bold text-emerald-300">Kur'an-ı Kerim Ana Sayfa</h1>
      </div>

      <p className="mb-6 text-gray-200 text-lg">
        {`Kur’an-ı Kerim, insanlığa gönderilmiş en büyük ilahi rehberdir. Bu sayfa, Kur’an’ı Arapça aslından öğrenmek ve anlamak isteyenler için sıfırdan ileri düzeye kadar rehber olacak şekilde, en geniş ve güvenilir kaynaklarla hazırlanmıştır.`}
      </p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">Kur'an-ı Kerim Hakkında Genel Bilgi</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>
            {`Kur’an-ı Kerim, 610-632 yılları arasında, Hz. Muhammed’e (s.a.s.) Cebrail vasıtasıyla Arapça olarak indirilen, 114 sure ve 6236 ayetten oluşan son ilahi kitaptır.`}
          </li>
          <li>
            {`Kur’an, hem ahlakî hem hukuki hem de toplumsal ve bireysel hayatın tüm alanlarına yön gösterir.`}
          </li>
          <li>
            {`Allah'ın kelamı olup, lafzı ve manasıyla mucizedir, hiçbir değişikliğe uğramadan günümüze ulaşmıştır.`}
          </li>
          <li>
            {`Kur’an’ı anlamak, onu doğru okumak, manasına uygun yaşamak ve tefsirlerinden istifade etmek Müslümanlar için bir görevdir.`}
          </li>
        </ul>
        <div className="p-4 bg-[#1d2233] border-l-4 border-emerald-400 rounded mb-4">
          <span className="italic text-gray-100">
            “Şüphesiz ki bu Kur’an, insanları en doğru ve en sağlam yola iletir ve salih amel işleyen müminlere, kendileri için büyük bir ecir olduğunu müjdeler.” <br />
            <span className="block text-right text-sm text-sky-300">İsrâ Suresi, 9</span>
          </span>
        </div>
      </div>
      
      {/* Alt Kategori Butonları */}
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">Kur’an Yolculuğu: Alt Kategoriler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/islam/kuran-i-kerim/arapca-turkce"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            5 Hatlı Kur’an: Arapça, Türkçe Okunuşu ve Meali
            <div className="text-xs text-gray-400 mt-1">Her ayetin Arapçası (sağdan sola), Türkçe okunuşu ve anlamı yan yana</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/elmalili-meal"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            Elmalılı Hamdi Yazır Meali (Tam Metin)
            <div className="text-xs text-gray-400 mt-1">Diyanet’in tavsiye ettiği klasik, derinlikli Türkçe meal</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/risale-nur-tefsiri"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            Risale-i Nur Külliyatı’ndan Kur’an Tefsirleri
            <div className="text-xs text-gray-400 mt-1">Bediüzzaman’ın tefsirlerinden seçkiler ve bağlantılar</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/kuran-ogreniyorum"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            Kur’an Öğreniyorum (Sıfırdan İleri Düzeye)
            <div className="text-xs text-gray-400 mt-1">Harf birleştirme, tecvid, okuma pratikleri, video ve interaktif eğitim</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/tecvit-ve-tajwid"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            Tecvid ve Tajwid (Okuma Sanatı)
            <div className="text-xs text-gray-400 mt-1">Doğru Kur’an okuma kuralları, sesli örnekler, uygulama</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/kuran-tarihi-ve-bilimi"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            Kur’an Tarihi ve Bilimi
            <div className="text-xs text-gray-400 mt-1">İniş süreci, mushaflar, korunuşu, ilimler ve mucizeler</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/ayet-ve-tematik-okuma"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            Tematik Ayet Okuma ve Kıssalar
            <div className="text-xs text-gray-400 mt-1">Hayatın farklı alanları için özel ayetler, peygamber kıssaları</div>
          </Link>
          <Link
            href="/islam/kuran-i-kerim/sesli-ve-video-kuran"
            className="block p-4 bg-[#25304b] rounded-lg shadow hover:bg-emerald-500 hover:text-white transition font-semibold border border-[#30394f]"
          >
            Sesli ve Video Kur’an Eğitimleri
            <div className="text-xs text-gray-400 mt-1">Ücretsiz Diyanet & uluslararası onaylı sesli-videolu dersler</div>
          </Link>
        </div>
      </div>

      {/* Bilgilendirici Kısımlar */}
      <div className="mb-12">
        <h2 className="text-lg font-bold text-emerald-200 mb-4">Kur’an-ı Kerim Yolculuğunda Sizi Neler Bekliyor?</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>
            {`Kur’an’ı Arapça harflerle doğru okuyabilmeniz için 5 hatlı sistem: Arapça yazılış, Türkçe okunuş ve anlamı bir arada. (Her ayet yanında, kolay erişim)`}
          </li>
          <li>
            {`Elmalılı Hamdi Yazır’ın günümüz Türkçesine en uygun, anlam derinliği olan mealinin tam metni`}
          </li>
          <li>
            {`Risale-i Nur’dan Kur’an tefsirleri: Sözler, Lem’alar, Mektubat ve Ayet tefsirleri`}
          </li>
          <li>
            {`Sıfırdan ileri düzeye Kur’an okuma eğitimi: Harf-birleştirme, tecvid, mahreç, uygulama, interaktif quiz ve pratikler`}
          </li>
          <li>
            {`Kur’an tarihi: Vahiy süreci, mushafların yazılması, ezberlenmesi, koruma mucizesi`}
          </li>
          <li>
            {`Tecvid, tilavet adabı, doğru telaffuz: Video ve sesli örneklerle destekli`}
          </li>
          <li>
            {`Tematik okuma: Korku, sabır, şifa, bereket, aile, ticaret, dua, peygamberler gibi farklı başlıklarda seçilmiş ayetler ve açıklamaları`}
          </li>
          <li>
            {`Diyanet ve İslami ilimlerin tavsiye ettiği kaynaklarla, tam güvenli ve güncel bilgi`}
          </li>
          <li>
            {`Sesli, videolu, mobil uyumlu Kur’an ve eğitim materyali bağlantıları`}
          </li>
        </ul>
      </div>

      {/* Dış Kaynaklar */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-sky-300 mb-3">Güvenilir Kur’an Portalları ve Kaynaklar</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
          <li>
            <a href="https://kuran.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              Diyanet Kur’an Portalı (Tam metin, sesli, meal, tefsir, arama)
            </a>
          </li>
          <li>
            <a href="https://kuranmeali.com/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              Kuran Meali ve Karşılaştırmalı Anlamlar
            </a>
          </li>
          <li>
            <a href="https://www.risaleinur.org/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              Risale-i Nur Külliyatı Online
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@diyanettv" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
              Diyanet TV Kur’an Eğitim Videoları
            </a>
          </li>
        </ul>
        <p className="text-gray-400 text-xs">{`Her alt kategoride, ilgili başlığın kendi içeriği en detaylı şekilde açılacaktır. Tüm içerikler Diyanet ve muteber İslam kaynakları üzerinden hazırlanmıştır.`}</p>
      </div>

      {/* Kullanıcıya Açıklama/Uyarı */}
      <div className="mb-4 p-4 bg-[#1d2233] border-l-4 border-sky-400 rounded">
        <strong className="text-emerald-300">Not:</strong>{" "}
        <span className="text-gray-200">
          {`Kur’an-ı Kerim öğrenme yolculuğunuzda bu ana sayfadan dilediğiniz alt kategoriye tıklayarak detaylı bilgi ve eğitimlere ulaşabilirsiniz. Her sayfa, sıfırdan ileri düzeye kadar, bol örnekli ve kaynaklı hazırlanacaktır.`}
        </span>
      </div>
    </section>
  );
}