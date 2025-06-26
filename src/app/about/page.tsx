export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 rounded-xl bg-[#23263a] shadow-lg border border-[#292c3f]">
      <h2 className="text-3xl font-bold text-emerald-300 mb-6">Hakkımızda</h2>
      
      {/* Uzun Yolcu Hakkında */}
      <div className="mb-8">
        <p className="mb-4 text-lg text-gray-200">
          {`Uzun Yolcu, hayatın her alanında rehberlik sunmak, bilgiye ulaşımı kolaylaştırmak ve ilham vermek amacıyla kuruldu. Burada sadece kuru bilgiler değil; hayatınızı gerçekten iyileştirecek, size yön gösterecek, modern ve güvenilir içerikler bulacaksınız.`}
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>
            <strong>İslam Rehberi:</strong> {`Elifba'dan Kuran-ı Kerim'e, peygamberlerin hayatından dua ve zikirlere kadar her yaştan okura özel, derin ve anlaşılır içerikler.`}
          </li>
          <li>
            <strong>İngilizce Akademi:</strong> {`Seviyene uygun interaktif başlıklar, konuşma pratikleri, telaffuz ve günlük konuşma rehberleriyle İngilizceyi çok kolay ve eğlenceli şekilde öğrenebilirsin.`}
          </li>
          <li>
            <strong>Masa Başı Sağlık:</strong> {`Evde egzersiz, sağlıklı beslenme, postür düzeltme, göz sağlığı ve stres yönetimiyle, uzun saatler oturanlara özel sağlık çözümleri.`}
          </li>
          <li>
            <strong>40+ Yaşam Rehberi:</strong> {`Yaş almanın getirdiği tüm fırsat ve zorluklara özel, aktif yaşam, beslenme, kadın ve erkek sağlığı, sosyal etkinlikler ve zihinsel gelişim önerileri.`}
          </li>
          <li>
            <strong>Kendini Geliştir:</strong> {`Kariyer, popüler meslekler, online eğitimler ve kişisel gelişim rehberleriyle, hayat boyu öğrenmek ve gelişmek isteyenlere ilham kaynağı!`}
          </li>
          <li>
            <strong>Online Gelir:</strong> {`E-ticaret, pazaryerleri, YouTube, dijital pazarlama, yapay zeka araçları ve freelance işlerle, bulunduğun yerden para kazanmanın akıllı yolları.`}
          </li>
        </ul>
        <p className="text-gray-300 mb-2">
          {`Uzun Yolcu, her yaştan ve her meslekten insanın kendi yolculuğunda güvenle başvurabileceği, tarafsız, güncel ve samimi bir rehber platformudur. Amacımız, bilgiye ulaşırken sizi yalnız bırakmamak, hayatınızı kolaylaştırmak ve daha nitelikli bir yolculuk sunmaktır.`}
        </p>
      </div>

      {/* Kuzey Uzun Hakkında */}
      <div>
        <h3 className="text-2xl font-bold text-sky-300 mb-4">Kuzey Uzun Kimdir?</h3>
        <p className="mb-4 text-gray-200">
          {`Ben Kuzey Uzun. Eğitim yolculuğumda beş farklı üniversite programı tamamladım; çok yönlü ve çok disiplinli bir bakış açısına sahibim. Ayrıca üniversite dışında 100'e yakın, çoğu teknoloji ve yönetim alanında olmak üzere, çok sayıda sertifika programını da başarıyla tamamladım.`}
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>
            {`Anadolu University – Bachelor's degree, Management Information Systems`}
          </li>
          <li>
            {`Istanbul University – Bachelor's degree, Business Administration`}
          </li>
          <li>
            {`Atatürk Üniversitesi – Bachelor's degree, Advertising`}
          </li>
          <li>
            {`Anadolu University – Associate's degree, Web Development`}
          </li>
          <li>
            {`Anadolu University – Associate's degree, Retail Management`}
          </li>
        </ul>
        <p className="mb-4 text-gray-200">
          {`Kariyerimde ise, uzun yıllar boyunca teknoloji ve perakende sektörünün lider şirketlerinde; kategori yöneticiliği, ürün yöneticiliği, mağaza yöneticiliği ve satış liderliği gibi pozisyonlarda görev aldım. Özellikle tüketici elektroniği ve bilgi teknolojileri alanlarında üst düzey yönetici rolleriyle önemli projeler yürüttüm, ekipler yönettim, stratejik planlamadan satışa kadar geniş bir yelpazede deneyim kazandım. E-ticaret, teknoloji yönetimi ve müşteri odaklı dijital dönüşüm projelerinde aktif rol aldım.`}
        </p>
        <p className="mb-4 text-gray-200">
          {`Farklı disiplinlerden beslenen bu yolculukta, eğitim, kişisel gelişim, sağlık, teknoloji ve manevi yaşam gibi alanlarda hayatı kolaylaştıran ve geliştiren içerikler üretmeyi misyon edindim. Uzun Yolcu'yu kurarken amacım, kendi gelişim yolculuğumdan aldığım ilhamı ve tecrübeleri herkesle paylaşmak, insanların hayatına değer katacak samimi ve güvenilir bir rehber ortamı sunmaktı.`}
        </p>
        <p className="mb-4 text-gray-300">
          {`Her zaman öğrenmeye, üretmeye ve paylaşmaya açık bir yolcuyum. Sizi de bu yolculukta yanımda görmekten mutluluk duyarım.`}
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
      </div>
    </section>
  );
}