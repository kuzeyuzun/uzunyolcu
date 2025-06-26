import { LightningBoltIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 fade-in">
      <section className="bg-[#23263a]/90 rounded-2xl shadow-lg p-10 max-w-2xl w-full border border-[#292c3f]">
        <div className="flex flex-col items-center mb-6">
          <LightningBoltIcon className="h-14 w-14 text-pink-400 animate-bounce mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-sky-300 drop-shadow mb-2">
            UzunYolcu
          </h1>
          <p className="text-lg text-gray-300 mb-1">Modern Yazılım ve Dijital İçerik Platformu</p>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center gap-2">
            <CodeBracketIcon className="h-6 w-6 text-lime-400" />
            <span className="text-base">Temiz kod ve açık kaynak odaklı içerikler</span>
          </div>
          <div className="flex items-center gap-2">
            <GlobeAltIcon className="h-6 w-6 text-blue-400" />
            <span className="text-base">Basit, erişilebilir ve güvenilir bilgi</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/about" className="px-5 py-2 rounded-lg bg-pink-400/10 text-pink-300 font-semibold hover:bg-pink-400/20 hover:scale-105 transition-all">
            Hakkımızda
          </a>
          <a href="mailto:seydauzun@gmail.com" className="px-5 py-2 rounded-lg bg-sky-400/10 text-sky-300 font-semibold hover:bg-sky-400/20 hover:scale-105 transition-all">
            İletişim
          </a>
          <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kuzeyseydauzun" target="_blank" rel="noopener" className="px-5 py-2 rounded-lg bg-lime-400/10 text-lime-300 font-semibold hover:bg-lime-400/20 hover:scale-105 transition-all">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}