import Link from "next/link";

export default function DuaVeZikirlerPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">Dua ve Zikirler</h1>
      </div>

      <p className="mb-4 text-gray-200">
        {`Dua ve zikir, Müslüman’ın Allah’a yakınlaşmasının en güzel yollarından biridir. Dua, kulun Rabbine içini açması ve yardım dilemesidir; zikir ise Allah'ı anarak kalbi huzura eriştirmektir. Bu sayfada namazda okunan dualardan mübarek gün ve gecelerde yapılacak dualara, genel olarak ruhu huzura kavuşturan dualara ve zikir örneklerine kadar birçok faydalı bilgi bulabilirsiniz.`}
      </p>

      <h2 className="text-xl font-semibold text-sky-300 mb-3 mt-6">Namaz Duaları ve Anlamları</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-3">
        <li>
          <strong>Sübhâneke:</strong>
          <div className="mt-1 text-emerald-200">
            {`سُبْحَانَكَ اللّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلٰهَ غَيْرُكَ`}
          </div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Allah’ım! Seni her türlü noksanlıktan tenzih ederim. Senin adın mübarektir, yüceliğin sonsuzdur. Senden başka ilah yoktur.`}
          </span>
        </li>
        <li>
          <strong>Ettehiyyâtü:</strong>
          <div className="mt-1 text-emerald-200">
            {`اَلتَّحِيَّاتُ لِلّٰهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ...`}
          </div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Bütün sözlü, fiilî ve maddî ibadetler Allah’a mahsustur... (tam metin uzun olduğu için kısaltılmıştır)`} 
          </span>
        </li>
        <li>
          <strong>Salli ve Barik Duaları:</strong>
          <div className="mt-1 text-emerald-200">
            {`اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ...`}
          </div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Allah’ım! Muhammed’e ve onun âline salat eyle... (tam metin uzun olduğu için kısaltılmıştır)`} 
          </span>
        </li>
        <li>
          <strong>Rabbena Duaları:</strong>
          <div className="mt-1 text-emerald-200">
            {`رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً...`}
          </div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Rabbimiz! Bize dünyada da güzellik, ahirette de güzellik ver ve bizi cehennem azabından koru.`}
          </span>
        </li>
        <li>
          <strong>Kunut Duaları:</strong>
          <div className="mt-1 text-emerald-200">
            {`اللهم إنا نستعينك...`}
          </div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Allah’ım! Senden yardım isteriz... (tam metin uzun olduğu için kısaltılmıştır)`} 
          </span>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Mübarek Gün ve Gecelerde Okunacak Dualar</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-3">
        <li>
          <strong>Recep, Şaban, Ramazan Ayı Duaları:</strong>
          <div className="mt-1 text-emerald-200">{`اللهم بارك لنا في رجب وشعبان وبلغنا رمضان`}</div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Allah’ım! Recep ve Şaban ayını bize mübarek kıl, bizi Ramazan’a ulaştır.`}
          </span>
        </li>
        <li>
          <strong>Kandil ve Berat Gecesi Duası:</strong>
          <div className="mt-1 text-emerald-200">{`اللهم إنك عفو كريم تحب العفو فاعف عني`}</div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Allah’ım! Sen affedicisin, affetmeyi seversin, beni de affet.`}
          </span>
        </li>
        <li>
          <strong>İstiğfar (Bağışlanma) Duası:</strong>
          <div className="mt-1 text-emerald-200">{`أستغفر الله العظيم وأتوب إليه`}</div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Büyük Allah’tan bağışlanma diler, O’na tövbe ederim.`}
          </span>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Günlük Hayatta ve Zor Zamanlarda Okunacak Dualar</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-3">
        <li>
          <strong>Hastalık ve Şifa Duası:</strong>
          <div className="mt-1 text-emerald-200">{`اللهم رب الناس أذهب البأس، اشف أنت الشافي`}</div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Ey insanların Rabbi! Sıkıntıyı gider, şifa ver, şifa ancak sendendir.`}
          </span>
        </li>
        <li>
          <strong>Darlık ve Sıkıntı Anında:</strong>
          <div className="mt-1 text-emerald-200">{`حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم`}</div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Allah bana yeter, O’ndan başka ilah yoktur. O’na tevekkül ettim, O büyük Arş’ın Rabbidir.`}
          </span>
        </li>
        <li>
          <strong>Huzur ve Korunma Duası:</strong>
          <div className="mt-1 text-emerald-200">{`اللهم إني أعوذ بك من الهم والحزن ...`}</div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Allah’ım! Kederden, üzüntüden, acizlikten, tembellikten, korkaklıktan, cimrilikten ve borcun galip gelmesinden sana sığınırım.`}
          </span>
        </li>
        <li>
          <strong>İstihare Duası:</strong>
          <div className="mt-1 text-emerald-200">{`اللهم إني استخيرك بعلمك ...`}</div>
          <span className="block text-sm text-gray-400 mt-1">
            {`Allah’ım! Senin ilminle hayırlı olanı dilerim... (tam metin uzun olduğu için kısaltılmıştır)`} 
          </span>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Faziletli Zikir ve Tesbihler</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-3">
        <li>
          <strong>Subhanallah, Elhamdülillah, Allahu Ekber:</strong>
          <span className="block text-sm text-gray-400 mt-1">
            {`Her namaz sonrası 33’er defa “Sübhânallah”, “Elhamdülillah”, “Allahu Ekber” demek Peygamberimizin tavsiye ettiği önemli zikirlerdendir.`}
          </span>
        </li>
        <li>
          <strong>La ilahe illallah:</strong>
          <span className="block text-sm text-gray-400 mt-1">
            {`Tevhidin özü olan bu kelimeyi sıkça tekrarlamak kalbi arındırır, imanı tazeler.`}
          </span>
        </li>
        <li>
          <strong>Estağfirullah:</strong>
          <span className="block text-sm text-gray-400 mt-1">
            {`Günahların affı için sıkça “Estağfirullah” demek tavsiye edilmiştir.`}
          </span>
        </li>
        <li>
          <strong>Hasbiyallahü la ilahe illa hüve:</strong>
          <span className="block text-sm text-gray-400 mt-1">
            {`Zor anlarda Allah’a sığınmayı ifade eden faziletli bir zikirdir.`}
          </span>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Duanın Kabul Olduğu Zamanlar</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
        <li>
          <strong>Seher vakitleri (gece son üçte biri)</strong>
        </li>
        <li>
          <strong>Farz namazlardan sonra</strong>
        </li>
        <li>
          <strong>Cuma günü ve cuma saati</strong>
        </li>
        <li>
          <strong>Ezandan ikamet getirilinceye kadar olan vakit</strong>
        </li>
        <li>
          <strong>Oruçlunun iftar anı</strong>
        </li>
        <li>
          <strong>Yağmur yağarken</strong>
        </li>
        <li>
          <strong>Hac ve umre esnasında Arafat’ta vakfe anı</strong>
        </li>
        <li>
          <strong>Anne-babanın evladı için duası</strong>
        </li>
        <li>
          <strong>Hasta ve mazlumun duası</strong>
        </li>
      </ul>
      <p className="mb-4 text-gray-400 text-sm">
        {`Dua ederken samimi olmak, haramdan kaçınmak, Allah’a güvenmek ve aceleci olmamak önemlidir. Peygamberimiz (s.a.s.) şöyle buyurmuştur: "Kula duası ya dünyada hemen verilir, ya ahirete bırakılır ya da bir kötülüğü ondan savar." (Tirmizî, Deavat, 145)`} 
      </p>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Kaynaklar ve Daha Fazlası</h2>
      <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
        <li>
          <a href="https://www.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            Diyanet İşleri Başkanlığı Resmi Web Sitesi
          </a>
        </li>
        <li>
          <a href="https://dua.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            Diyanet Dua Portalı
          </a>
        </li>
        <li>
          <a href="https://islamansiklopedisi.org.tr/dua" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            TDV İslam Ansiklopedisi - Dua
          </a>
        </li>
      </ul>
      <p className="text-gray-400 text-xs">{`Bu sayfadaki dualar ve zikirler Diyanet İşleri Başkanlığı, TDV İslam Ansiklopedisi ve güvenilir İslami kaynaklardan derlenmiştir.`}</p>
    </section>
  );
}