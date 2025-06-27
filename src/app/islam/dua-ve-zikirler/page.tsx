import Link from "next/link";

export default function DuaVeZikirlerPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-2 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-6 sm:p-12 max-w-2xl w-full border border-[#292c3f] flex flex-col gap-8">
        {/* Üst Menü */}
        <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
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
          <h1 className="text-2xl font-extrabold text-indigo-200 flex items-center gap-2">
            <span>🙏</span> Dua ve Zikirler
          </h1>
        </div>

        <div className="bg-[#181a27] p-4 rounded-xl text-gray-200 text-center text-base mb-2">
          Dua ve zikir, kalbi huzura kavuşturur, Allah’a yakınlaşmanın en güzel yoludur. Bu sayfada namaz dualarından günlük zikir ve özel gün dualarına kadar birçok örnek ve anlam bulabilirsin.
        </div>

        {/* Namaz Duaları */}
        <section>
          <h2 className="text-lg font-semibold text-emerald-300 mb-2">Namaz Duaları</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Sübhâneke</strong>{" "}
              <span className="block text-emerald-200 text-sm mt-1">سُبْحَانَكَ اللّهُمَّ وَبِحَمْدِكَ...</span>
              <span className="block text-xs text-gray-400">“Allah’ım! Seni tenzih ederim...”</span>
            </li>
            <li>
              <strong>Ettehiyyâtü</strong>{" "}
              <span className="block text-emerald-200 text-sm mt-1">اَلتَّحِيَّاتُ لِلّٰهِ وَالصَّلَوَاتُ...</span>
              <span className="block text-xs text-gray-400">“Bütün ibadetler Allah’a mahsustur...”</span>
            </li>
            <li>
              <strong>Salli ve Barik</strong>{" "}
              <span className="block text-emerald-200 text-sm mt-1">اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ...</span>
              <span className="block text-xs text-gray-400">“Allah’ım! Muhammed’e ve âline salat eyle...”</span>
            </li>
            <li>
              <strong>Rabbena Duaları</strong>{" "}
              <span className="block text-emerald-200 text-sm mt-1">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً...</span>
              <span className="block text-xs text-gray-400">“Rabbimiz! Bize dünyada da güzellik ver...”</span>
            </li>
            <li>
              <strong>Kunut Duaları</strong>{" "}
              <span className="block text-emerald-200 text-sm mt-1">اللهم إنا نستعينك...</span>
              <span className="block text-xs text-gray-400">“Allah’ım! Senden yardım isteriz...”</span>
            </li>
          </ul>
        </section>

        {/* Özel Gün ve Geceler */}
        <section>
          <h2 className="text-lg font-semibold text-sky-300 mb-2">Mübarek Gün ve Geceler</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Recep-Şaban-Ramazan:</strong>{" "}
              <span className="text-emerald-200 ml-1">اللهم بارك لنا في رجب وشعبان وبلغنا رمضان</span>
              <span className="block text-xs text-gray-400">“Recep ve Şaban’ı mübarek kıl, bizi Ramazan’a ulaştır.”</span>
            </li>
            <li>
              <strong>Kandil/Berat Duası:</strong>{" "}
              <span className="text-emerald-200 ml-1">اللهم إنك عفو كريم تحب العفو فاعف عني</span>
              <span className="block text-xs text-gray-400">“Allah’ım! Sen affedicisin, beni de affet.”</span>
            </li>
            <li>
              <strong>İstiğfar (Bağışlanma):</strong>{" "}
              <span className="text-emerald-200 ml-1">أستغفر الله العظيم وأتوب إليه</span>
              <span className="block text-xs text-gray-400">“Büyük Allah’tan bağışlanma dilerim.”</span>
            </li>
          </ul>
        </section>

        {/* Günlük ve Zor Zaman Duaları */}
        <section>
          <h2 className="text-lg font-semibold text-fuchsia-300 mb-2">Günlük & Zor Zaman Duaları</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Şifa Duası:</strong>{" "}
              <span className="text-emerald-200 ml-1">اللهم رب الناس أذهب البأس، اشف أنت الشافي</span>
              <span className="block text-xs text-gray-400">“Ey insanların Rabbi! Sıkıntıyı gider, şifa ver...”</span>
            </li>
            <li>
              <strong>Sıkıntı Anında:</strong>{" "}
              <span className="text-emerald-200 ml-1">حسبي الله لا إله إلا هو عليه توكلت...</span>
              <span className="block text-xs text-gray-400">“Allah bana yeter, O’na tevekkül ettim...”</span>
            </li>
            <li>
              <strong>İstihare Duası:</strong>{" "}
              <span className="text-emerald-200 ml-1">اللهم إني استخيرك بعلمك ...</span>
              <span className="block text-xs text-gray-400">“Allah’ım! Senin ilminle hayırlı olanı dilerim...”</span>
            </li>
          </ul>
        </section>

        {/* Zikir ve Tesbihler */}
        <section>
          <h2 className="text-lg font-semibold text-purple-300 mb-2">Faziletli Zikirler</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Subhanallah, Elhamdülillah, Allahu Ekber</strong>
              <span className="block text-xs text-gray-400">Her namaz sonrası 33’er defa okunması tavsiye edilir.</span>
            </li>
            <li>
              <strong>La ilahe illallah</strong>
              <span className="block text-xs text-gray-400">Tevhidin özü, sıkça tekrar edilmesi kalbi arındırır.</span>
            </li>
            <li>
              <strong>Estağfirullah</strong>
              <span className="block text-xs text-gray-400">Bağışlanma için gün içinde tekrar edilir.</span>
            </li>
            <li>
              <strong>Hasbiyallahü la ilahe illa hüve</strong>
              <span className="block text-xs text-gray-400">Zor anlarda Allah’a sığınmanın zikridir.</span>
            </li>
          </ul>
        </section>

        {/* Bilgilendirici kutu */}
        <div className="bg-[#1f2133] rounded-lg p-4 text-xs text-gray-400 mt-1">
          <strong>Dua Adabı:</strong> Dua ederken samimi olmak, haramdan kaçınmak, Allah’a güvenmek ve aceleci olmamak önemlidir. Peygamberimiz şöyle buyurmuştur: <em>“Kula duası ya dünyada hemen verilir, ya ahirete bırakılır ya da bir kötülüğü ondan savar.”</em>
        </div>

        {/* Duanın Kabul Olduğu Zamanlar */}
        <section>
          <h2 className="text-base font-semibold text-emerald-200 mt-2 mb-1">Duanın Kabul Olduğu Vakitler</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Seher vakitleri (gecenin son üçte biri)</li>
            <li>Farz namazlardan sonra</li>
            <li>Cuma günü ve cuma saati</li>
            <li>Oruçlunun iftar anı, yağmur yağarken</li>
            <li>Anne-babanın evladı için duası</li>
            <li>Hasta ve mazlumun duası</li>
          </ul>
        </section>

        {/* Kaynaklar */}
        <section>
          <h2 className="text-base font-semibold text-sky-200">Kaynaklar & Daha Fazlası</h2>
          <ul className="list-disc list-inside text-gray-400 mb-1 space-y-1 text-sm">
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
        </section>
        <p className="text-xs text-gray-500 text-center">Sayfadaki dualar ve zikirler güvenilir İslami kaynaklardan derlenmiştir.</p>
      </section>
    </main>
  );
}