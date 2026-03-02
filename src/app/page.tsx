const navItems = ["Home", "About", "Programs", "Chapters", "Events", "Contact"];

const featureCards = [
  {
    title: "Networking",
    text: "Connect with experienced professionals and rising leaders across the computing ecosystem.",
    glow: "from-fuchsia-500/30 to-violet-500/10",
  },
  {
    title: "Education",
    text: "Access technical and career-focused programs designed for sustained professional growth.",
    glow: "from-cyan-400/30 to-blue-500/10",
  },
  {
    title: "Mentoring",
    text: "Build confidence and momentum through chapter guidance, peer networks, and leadership tracks.",
    glow: "from-indigo-400/30 to-purple-500/10",
  },
];

const tracks = ["Data Science & AI", "Cybersecurity", "Software Engineering", "Technical Leadership"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060A1B] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(129,140,248,0.25),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.2),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.18),transparent_40%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070c22]/75 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500" />
            <span className="font-semibold tracking-wide text-white/95">AWC</span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="https://www.awc-hq.org/join-awc.html"
            className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:brightness-110"
          >
            Join Now
          </a>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-10 md:pt-14">
        <section className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl md:p-10">
            <p className="mb-4 inline-flex items-center rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs tracking-[0.2em] text-violet-100">
              Association for Women in Computing
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Empowering <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Women in Tech.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/78 md:text-lg">
              A modern association advancing women in computing through high-impact networking,
              specialized education, and long-term mentorship.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://www.awc-hq.org/join-awc.html"
                className="rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/35 transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
              >
                Start Your Journey
              </a>
              <a
                href="https://www.awc-hq.org/chapters.html"
                className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition duration-200 hover:bg-white/12"
              >
                View Career Tracks
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl">
            <div className="h-full rounded-2xl border border-white/15 bg-gradient-to-br from-slate-200/20 via-white/5 to-violet-300/10 p-5">
              <div className="rounded-xl border border-white/15 bg-[#0b1230]/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Professional Standard</p>
                <p className="mt-2 text-xl font-semibold">Built on ethics, growth, and community.</p>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["Founded", "1978"],
                  ["Network", "Nationwide"],
                  ["Chapters", "Student + Local"],
                  ["Model", "Independent Access"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-white/15 bg-white/5 px-3 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/55">{k}</p>
                    <p className="mt-1 text-sm font-medium text-white/90">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-xl transition duration-200 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div className={`mb-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${card.glow}`} />
              <h2 className="text-xl font-semibold tracking-tight">{card.title}</h2>
              <p className="mt-2 leading-relaxed text-white/72">{card.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Professional Tracks</p>
              <h3 className="mt-2 text-2xl font-semibold">Build your path in modern computing.</h3>
            </div>
            <a
              href="https://www.awc-hq.org/independent-members.html"
              className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              View All Tracks
            </a>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((track) => (
              <div key={track} className="rounded-xl border border-white/15 bg-[#09102a]/70 px-4 py-3 text-sm text-white/90">
                {track}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
