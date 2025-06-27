import Link from "next/link";

export default function AyetlerHazinesiPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1c27] px-4 fade-in">
      <section className="bg-[#23263a]/95 rounded-3xl shadow-2xl p-8 sm:p-14 max-w-2xl w-full border border-[#292c3f] flex flex-col items-center gap-10">
        {/* Breadcrumb */}
        <div className="w-full flex flex-wrap gap-2 items-center mb-2">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition"
          >
            {`Ana Sayfa`}
          </Link>
          <span className="text-gray-400 font-bold mx-2">{`/`}</span>
          <Link
            href="/islam"
            className="px-4 py-2 rounded-lg bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 transition"
          >
            {`İslam Menüsü`}
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">{`💎`}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-fuchsia-300 drop-shadow mb-2">
            {`Ayetler Hazinesi`}
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-xl">
            {`Hayatın her alanı için seçilmiş Kur’an ayetleri ve açıklamaları. Tematik ayetler, manaları ve yaşam rehberi niteliğinde açıklamalar.`}
          </p>
        </div>
        <div className="w-full flex flex-col gap-8">
          <section>
            <h2 className="text-xl font-bold text-pink-300 mb-3">{`Ayetler Ne Demektir?`}</h2>
            <p className="text-gray-200 mb-2">
              {`Kur’an’ın her bir cümlesine “ayet” denir. Her ayet, insanlığa yol gösteren ilahi mesajlar taşır. Farklı konularda yüzlerce ayet bulunur.`}
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-fuchsia-200 mb-2">{`Tematik Ayetler Örnekleri`}</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <span className="font-bold text-emerald-200">{`Sabır:`}</span>{" "}
                {`“Ey iman edenler! Sabır ve namazla Allah’tan yardım isteyin...” (Bakara, 2/153)`}
              </li>
              <li>
                <span className="font-bold text-emerald-200">{`Merhamet:`}</span>{" "}
                {`“Kullarıma de ki; en güzel sözü söylesinler...” (İsra, 17/53)`}
              </li>
              <li>
                <span className="font-bold text-emerald-200">{`Tevekkül:`}</span>{" "}
                {`“Kim Allah’a güvenirse, O ona yeter.” (Talak, 65/3)`}
              </li>
              <li>
                <span className="font-bold text-emerald-200">{`Bağışlanma:`}</span>{" "}
                {`“...Ey Rabbimiz! Bize dünyada da güzellik, ahirette de güzellik ver...” (Bakara, 2/201)`}
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-sky-200 mb-2">{`Kaynaklar`}</h2>
            <ul className="list-disc list-inside text-gray-400 text-sm">
              <li>
                <a href="https://kuran.diyanet.gov.tr/" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
                  {`Diyanet Kur’an Portalı`}
                </a>
              </li>
              <li>
                <a href="https://islamansiklopedisi.org.tr/ayet" target="_blank" rel="noopener" className="underline hover:text-emerald-400">
                  {`TDV İslam Ansiklopedisi - Ayet`}
                </a>
              </li>
            </ul>
          </section>
        </div>
        {/* Üst kategori ve ana sayfa butonları */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="/islam"
            className="px-5 py-2 rounded-lg bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 transition"
          >
            {`İslam Menüsü`}
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition"
          >
            {`Ana Sayfa`}
          </Link>
        </div>
      </section>
    </main>
  );
}