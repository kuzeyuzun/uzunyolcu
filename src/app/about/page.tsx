export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 rounded-xl bg-[#23263a] shadow-lg border border-[#292c3f]">
      <h2 className="text-3xl font-bold text-emerald-300 mb-6">Kuzey Uzun Kimdir?</h2>
      <p className="mb-4 text-gray-200">
        {`Merhaba, ben Kuzey Uzun.

Eğitime, gelişime ve çok yönlü bakış açısına tutkuyla bağlı bir yolcuyum. Şimdiye dek beş farklı üniversite programı tamamladım ve 100’e yakın sertifika ile özellikle teknoloji ve yönetim alanlarında kendimi sürekli geliştirmeye devam ediyorum.`}
      </p>
      <h3 className="text-xl font-semibold text-sky-300 mb-2">Eğitim Hayatım:</h3>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
        <li>{`Anadolu Üniversitesi – Lisans, Yönetim Bilişim Sistemleri`}</li>
        <li>{`İstanbul Üniversitesi – Lisans, İşletme`}</li>
        <li>{`Atatürk Üniversitesi – Lisans, Reklamcılık`}</li>
        <li>{`Anadolu Üniversitesi – Ön Lisans, Web Programcılığı`}</li>
        <li>{`Anadolu Üniversitesi – Ön Lisans, Perakende Yönetimi`}</li>
      </ul>
      <h3 className="text-xl font-semibold text-sky-300 mb-2">Kariyer Yolculuğum:</h3>
      <p className="mb-4 text-gray-200">
        {`Profesyonel hayatımda uzun yıllar boyunca teknoloji ve perakende sektörlerinin öncü firmalarında çalıştım.`}
      </p>
      <p className="mb-2 text-gray-200">{`Başlıca rollerim:`}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
        <li>{`Kategori Yöneticisi`}</li>
        <li>{`Ürün Yöneticisi`}</li>
        <li>{`Mağaza Yöneticisi`}</li>
        <li>{`Satış Lideri`}</li>
      </ul>
      <p className="mb-4 text-gray-200">
        {`Özellikle tüketici elektroniği ve bilgi teknolojileri alanlarında üst düzey yöneticilik yaptım.
Stratejik planlama, ekip yönetimi, ürün geliştirme, e-ticaret operasyonları ve dijital dönüşüm projelerinde aktif roller üstlendim.`}
      </p>
      <h3 className="text-xl font-semibold text-sky-300 mb-2">Neden “Uzun Yolcu”?</h3>
      <p className="mb-4 text-gray-200">
        {`Hayatım boyunca farklı disiplinlerden beslenmeyi, yeni şeyler öğrenmeyi ve bunları başkalarına faydaya dönüştürmeyi ilke edindim.
“Uzun Yolcu”, bu çok katmanlı kişisel gelişim yolculuğunun bir yansıması olarak ortaya çıktı.`}
      </p>
      <p className="mb-4 text-gray-200">
        {`Bu platformda;`}
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
        <li>{`Eğitim`}</li>
        <li>{`Teknoloji`}</li>
        <li>{`Kişisel gelişim`}</li>
        <li>{`Sağlık`}</li>
        <li>{`Manevi yaşam`}</li>
      </ul>
      <p className="mb-4 text-gray-200">
        {`gibi konularda, samimi, güvenilir ve ilham verici içerikler paylaşmayı hedefliyorum.`}
      </p>
      <h3 className="text-xl font-semibold text-sky-300 mb-2">Birlikte Yola Çıkalım</h3>
      <p className="mb-4 text-gray-200">
        {`Ben öğrenmeyi, üretmeyi ve paylaşmayı seven bir yolcuyum.
Bu yolda yalnız yürümek istemiyorum.
Siz de kendi gelişim serüveninizde bana katılın, birlikte büyüyelim, birlikte öğrenelim.

Hoş geldiniz. Uzun bir yolculuk başlıyor…`}
      </p>
      <div className="mb-3">
        <a
          href="https://www.linkedin.com/in/kuzeyseydauzun/"
          className="text-sky-400 hover:underline"
          target="_blank"
          rel="noopener"
        >
          LinkedIn Profilim
        </a>
      </div>
      <p className="text-gray-400">
        İletişim:{" "}
        <a
          href="mailto:uzunyolcubilgievreni@gmail.com"
          className="text-amber-400 hover:underline"
        >
          uzunyolcubilgievreni@gmail.com
        </a>
      </p>
    </section>
  );
}