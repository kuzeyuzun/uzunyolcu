import Link from "next/link";

export default function AyetlerHazinesiPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">Ayetler Hazinesi</h1>
      </div>

      <p className="mb-4 text-gray-200">
        {`Kur’an-ı Kerim, insanlığa yol gösteren, hayatın her alanına ışık tutan ilahi bir hazine niteliğindedir. “Ayetler Hazinesi” başlığı altında, iman, ahlak, sabır, dua, sağlık ve huzur gibi temel konularda öne çıkan Kur’an ayetlerini, anlam ve açıklamalarıyla birlikte sunuyoruz. Böylece hem ibadetlerinizde hem de günlük yaşantınızda yol gösterici bir kaynak oluşturmayı hedefliyoruz.`}
      </p>

      <h2 className="text-xl font-semibold text-sky-300 mb-3 mt-6">Kur’an Ayetlerinin Önemi</h2>
      <p className="mb-4 text-gray-200">
        {`Kur’an ayetleri, yalnızca dini hüküm ve ibadetlerde değil, insan ilişkilerinden toplumsal adalete, sabırdan merhamete, ilimden ahlaka kadar hayatın her alanında rehberlik eder. Her ayet, Rabbimizin insanlığa bir mesajı ve yol haritasıdır. Ayetler üzerinde düşünmek, anlamlarıyla hayatımıza yön vermek Kur’an’ın tavsiye ettiği bir ibadettir (Sad Suresi, 29).`}
      </p>

      <h2 className="text-xl font-semibold text-sky-300 mb-3 mt-6">İman ve Tevhid Üzerine Ayetler</h2>
      <div className="mb-6">
        <p className="text-gray-100 font-semibold">Allah’ın birliği ve iman esasları:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
          <li>
            <strong>İhlas Suresi (112/1-4):</strong> <br />
            <span className="block text-emerald-200 mt-1">{`قُلْ هُوَ اللّٰهُ اَحَدٌۚ ﴿١﴾ اللّٰهُ الصَّمَدُۚ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْۙ ﴿٣﴾ وَلَمْ يَكُنْ لَهٗ كُفُوًا اَحَدٌ﴿٤﴾`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`De ki: O Allah birdir. Allah Samed’dir (her şey O’na muhtaçtır, O hiçbir şeye muhtaç değildir). Doğurmamış ve doğmamıştır. Hiçbir şey O’na denk değildir.`}</span>
          </li>
          <li>
            <strong>Bakara Suresi 255 (Ayetü’l-Kürsi):</strong> <br />
            <span className="block text-emerald-200 mt-1">{`اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ...`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Allah, O’ndan başka ilah yoktur; hayy ve kayyumdur (diri, her şeyi ayakta tutandır)...`}</span>
          </li>
          <li>
            <strong>En’am Suresi 102:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`ذٰلِكُمُ اللّٰهُ رَبُّكُمْ لَا إِلٰهَ إِلَّا هُوَ خَالِقُ كُلِّ شَيْءٍ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`İşte Rabbiniz olan Allah budur, O’ndan başka ilah yoktur; her şeyin yaratıcısıdır.`}</span>
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Ahlak ve Güzel Davranışlara Dair Ayetler</h2>
      <div className="mb-6">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Hucurat Suresi 13:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِّن ذَكَرٍ وَأُنثَىٰ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Ey insanlar! Sizi bir erkek ve bir dişiden yarattık. Birbirinizle tanışasınız diye sizi milletlere ve kabilelere ayırdık. Allah katında en üstün olanınız, takvada en ileri olanınızdır.`}</span>
          </li>
          <li>
            <strong>Fussilet Suresi 34:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`İyilikle kötülük bir olmaz. Sen kötülüğü en güzel şekilde sav.`}</span>
          </li>
          <li>
            <strong>Lokman Suresi 19:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`وَاقْصِدْ فِي مَشْيِكَ وَاغْضُضْ مِن صَوْتِكَ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Yürüyüşünde ölçülü ol, sesini alçalt! Çünkü seslerin en çirkini şüphesiz ki eşeklerin sesidir.`}</span>
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Sabır ve Teselli Veren Ayetler</h2>
      <div className="mb-6">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Bakara Suresi 286:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Allah, hiç kimseye gücünün yeteceğinden fazlasını yüklemez.`}</span>
          </li>
          <li>
            <strong>İnşirah Suresi 5-6:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ﴿٥﴾ إِنَّ مَعَ الْعُسْرِ يُسْرًا ﴿٦﴾`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Şüphesiz güçlükle beraber bir kolaylık vardır. Evet, güçlükle beraber bir kolaylık vardır.`}</span>
          </li>
          <li>
            <strong>Zümer Suresi 53:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`De ki: Ey kendilerine zulmetmiş kullarım! Allah’ın rahmetinden ümit kesmeyin.`}</span>
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Dua ve İbadetle İlgili Ayetler</h2>
      <div className="mb-6">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Bakara Suresi 186:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Kullarım sana beni soracak olursa, bilsinler ki gerçekten ben onlara çok yakınım. Bana dua edenin duasına karşılık veririm.`}</span>
          </li>
          <li>
            <strong>Fatır Suresi 29:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّهِ وَأَقَامُوا الصَّلَاةَ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Allah’ın kitabını okuyan, namazı kılan ve kendilerine verdiğimiz rızıktan gizli ve açık infak edenler...`}</span>
          </li>
          <li>
            <strong>Furkan Suresi 77:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`قُلْ مَا يَعْبَؤُا بِكُمْ رَبِّي لَوْلَا دُعَاؤُكُمْ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`De ki: Duanız olmasa Rabbim size ne diye değer versin?`}</span>
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Sağlık, Şifa ve Huzur Veren Ayetler</h2>
      <div className="mb-6">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>İsra Suresi 82:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Biz Kur’an’dan, müminler için şifa ve rahmet olan ayetler indiriyoruz...`}</span>
          </li>
          <li>
            <strong>Tevbe Suresi 51:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`De ki: Bize ancak Allah’ın yazdığı şey isabet eder.`}</span>
          </li>
          <li>
            <strong>Ra’d Suresi 28:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`İman edenler ve kalpleri Allah’ın zikriyle huzura kavuşanlardır. Dikkat edin! Kalpler ancak Allah’ı anmakla huzur bulur.`}</span>
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Kur’an’dan Hayatınıza Yol Gösterecek Diğer Seçkin Ayetler</h2>
      <div className="mb-6">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Yusuf Suresi 87:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`لَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Allah’ın rahmetinden asla ümit kesmeyin.`}</span>
          </li>
          <li>
            <strong>Enfal Suresi 46:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Allah’a ve Rasulü’ne itaat edin, birbirinizle çekişmeyin! Aksi halde gücünüz gider.`}</span>
          </li>
          <li>
            <strong>Ankebut Suresi 69:</strong> <br />
            <span className="block text-emerald-200 mt-1">{`وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا`}</span>
            <span className="block text-sm text-gray-400 mt-1">{`Bizim uğrumuzda çaba gösterenleri elbette yollarımıza iletiriz.`}</span>
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold text-sky-300 mb-3">Kaynaklar ve Daha Fazlası</h2>
      <ul className="list-disc list-inside text-gray-400 mb-2 space-y-1 text-sm">
        <li>
          <a href="https://kuran.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            Diyanet Kur’an-ı Kerim Meali ve Tefsiri
          </a>
        </li>
        <li>
          <a href="https://islamansiklopedisi.org.tr/ayet" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            TDV İslam Ansiklopedisi - Ayet
          </a>
        </li>
        <li>
          <a href="https://www.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
            Diyanet İşleri Başkanlığı Resmi Web Sitesi
          </a>
        </li>
      </ul>
      <p className="text-gray-400 text-xs">{`Bu sayfadaki ayetler ve açıklamalar Diyanet İşleri Başkanlığı, TDV İslam Ansiklopedisi ve güvenilir kaynaklardan derlenmiştir. Orijinal Arapça metinlerin ve meallerin tamamı için Diyanet Kur’an portalı ziyaret edilebilir.`}</p>
    </section>
  );
}