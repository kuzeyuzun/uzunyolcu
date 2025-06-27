import Link from "next/link";

export default function ElifbaPage() {
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
        <h1 className="text-2xl font-bold text-emerald-300">Elifba (Arapça Harfler)</h1>
      </div>

      <p className="mb-4 text-gray-200">
        {`Elifba, Arap alfabesinin temel harflerini öğrenmek için ilk adımdır. Kur'an-ı Kerim'i okumak isteyenler için elifba, harflerin şekli, okunuşu ve yazılışıyla ilgili pratik bilgiler sunar.`}
      </p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">Arapça Harfler ve Okunuşları</h2>
        {/* Arapça harfleri sağdan sola hizala */}
        <div
          className="grid grid-cols-4 gap-4 text-center text-lg text-gray-100"
          dir="rtl"
          style={{
            unicodeBidi: "isolate",
          }}
        >
          <div>
            <span className="block text-2xl font-bold">ا</span>
            <span dir="ltr">Elif</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ب</span>
            <span dir="ltr">Be</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ت</span>
            <span dir="ltr">Te</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ث</span>
            <span dir="ltr">Se</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ج</span>
            <span dir="ltr">Cim</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ح</span>
            <span dir="ltr">Ha</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">خ</span>
            <span dir="ltr">Hı</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">د</span>
            <span dir="ltr">Dal</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ذ</span>
            <span dir="ltr">Zel</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ر</span>
            <span dir="ltr">Ra</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ز</span>
            <span dir="ltr">Zay</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">س</span>
            <span dir="ltr">Sin</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ش</span>
            <span dir="ltr">Şın</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ص</span>
            <span dir="ltr">Sad</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ض</span>
            <span dir="ltr">Dad</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ط</span>
            <span dir="ltr">Tı</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ظ</span>
            <span dir="ltr">Zı</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ع</span>
            <span dir="ltr">Ayn</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">غ</span>
            <span dir="ltr">Ğayn</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ف</span>
            <span dir="ltr">Fe</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ق</span>
            <span dir="ltr">Kaf</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ك</span>
            <span dir="ltr">Kef</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ل</span>
            <span dir="ltr">Lam</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">م</span>
            <span dir="ltr">Mim</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ن</span>
            <span dir="ltr">Nun</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ه</span>
            <span dir="ltr">He</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">و</span>
            <span dir="ltr">Vav</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ي</span>
            <span dir="ltr">Ya</span>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-sky-300 mb-3">Elifba ile İlgili Tavsiyeler</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
        <li>{`Her harfi yüksek sesle tekrar ederek öğrenmeye çalışın.`}</li>
        <li>{`Günlük kısa tekrarlar yaparak harfleri pekiştirin.`}</li>
        <li>{`Harflerin yazılışını deftere yazarak el alışkanlığı kazanın.`}</li>
        <li>{`Kur’an harflerini tanıdıktan sonra harekeleri ve hecelemeleri öğrenmeye başlayın.`}</li>
      </ul>
      <p className="text-gray-400 text-sm">
        {`Daha fazla interaktif içerik ve egzersizler için Uzun Yolcu platformunu takip edebilirsiniz.`}
      </p>
    </section>
  );
}