export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-sky-300 mb-4">Hakkımızda</h2>
      <p className="mb-4">
        UzunYolcu, yazılım geliştirme ve dijital içerik üretimi alanında sade ve güvenilir kaynaklar sunmayı amaçlayan bir platformdur. Kurucumuz Kuzey Seyda Uzun, öğrenmek ve öğretmekten keyif alan bir geliştiricidir.
      </p>
      <p className="mb-4">
        Amacımız, bilgiye ulaşmak isteyen herkes için anlaşılır ve ulaşılabilir içerikler üretmektir. Sorularınız ve önerileriniz için bize her zaman ulaşabilirsiniz.
      </p>
      <div className="mb-3">
        <a
          href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kuzeyseydauzun"
          className="text-sky-400 hover:underline"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>
      </div>
      <p>
        İletişim:{" "}
        <a
          href="mailto:seydauzun@gmail.com"
          className="text-sky-400 hover:underline"
        >
          seydauzun@gmail.com
        </a>
      </p>
    </section>
  );
}
