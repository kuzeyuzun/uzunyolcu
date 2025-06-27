export default function ElifbaPage() {
  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 rounded-xl bg-[#23263a] shadow-lg border border-[#292c3f]">
      <h1 className="text-3xl font-bold text-emerald-300 mb-6">Elifba (Arapça Harfler)</h1>
      <p className="mb-4 text-gray-200">
        {`Elifba, Arap alfabesinin temel harflerini öğrenmek için ilk adımdır. Kur'an-ı Kerim'i okumak isteyenler için elifba, harflerin şekli, okunuşu ve yazılışıyla ilgili pratik bilgiler sunar.`}
      </p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-sky-300 mb-3">Arapça Harfler ve Okunuşları</h2>
        <div className="grid grid-cols-4 gap-4 text-center text-lg text-gray-100">
          <div>
            <span className="block text-2xl font-bold">ا</span>
            <span>Elif</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ب</span>
            <span>Be</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ت</span>
            <span>Te</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ث</span>
            <span>Se</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ج</span>
            <span>Cim</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ح</span>
            <span>Ha</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">خ</span>
            <span>Hı</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">د</span>
            <span>Dal</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ذ</span>
            <span>Zel</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ر</span>
            <span>Ra</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ز</span>
            <span>Zay</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">س</span>
            <span>Sin</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ش</span>
            <span>Şın</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ص</span>
            <span>Sad</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ض</span>
            <span>Dad</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ط</span>
            <span>Tı</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ظ</span>
            <span>Zı</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ع</span>
            <span>Ayn</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">غ</span>
            <span>Ğayn</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ف</span>
            <span>Fe</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ق</span>
            <span>Kaf</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ك</span>
            <span>Kef</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ل</span>
            <span>Lam</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">م</span>
            <span>Mim</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ن</span>
            <span>Nun</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ه</span>
            <span>He</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">و</span>
            <span>Vav</span>
          </div>
          <div>
            <span className="block text-2xl font-bold">ي</span>
            <span>Ya</span>
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