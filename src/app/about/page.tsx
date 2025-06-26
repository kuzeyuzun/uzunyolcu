export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 rounded-xl bg-surface shadow-lg border border-gray-700">
      <h2 className="text-3xl font-bold text-primary mb-6">Hakkımızda</h2>
      <p className="mb-4">
        UzunYolcu, yazılım geliştirme ve dijital içerik üretimi alanında sade ve güvenilir kaynaklar sunmayı amaçlayan bir platformdur. Kurucumuz Kuzey Seyda Uzun, öğrenmek ve öğretmekten keyif alan bir geliştiricidir.
      </p>
      <p className="mb-4">
        Amacımız, bilgiye ulaşmak isteyen herkes için anlaşılır ve ulaşılabilir içerikler üretmektir. Sorularınız ve önerileriniz için bize her zaman ulaşabilirsiniz.
      </p>
      <div className="mb-3">
        <a
          href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kuzeyseydauzun"
          className="text-secondary hover:underline"
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
          className="text-accent hover:underline"
        >
          seydauzun@gmail.com
        </a>
      </p>
    </section>
  );
}