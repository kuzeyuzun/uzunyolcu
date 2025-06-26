export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-sky-300 mb-4">Hakkımızda</h2>
      <p className="mb-4">
        UzunYolcu&rsquo;nun kurucusu <b>Kuzey Seyda Uzun</b>, yazılım geliştirici ve dijital içerik üreticisi. 
        Amacımız, öğrenmek isteyenlere sade ve güvenilir kaynaklar sunmak, bilgiyi herkes için erişilebilir kılmak.
      </p>
      <div className="mb-3">
        <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kuzeyseydauzun" className="text-sky-400 hover:underline" target="_blank" rel="noopener">
          LinkedIn&rsquo;de beni takip edin
        </a>
      </div>
      <p>Her türlü öneri ve iletişim için: <a href="mailto:seydauzun@gmail.com" className="text-sky-400 hover:underline">seydauzun@gmail.com</a></p>
    </section>
  );
}