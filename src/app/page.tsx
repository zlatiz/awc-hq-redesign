const pillars = [
  {
    title: "Professional Growth",
    text: "Career-focused programs, practical workshops, and leadership opportunities for women in computing.",
  },
  {
    title: "National Network",
    text: "Connect across chapters, student groups, and independent members in the U.S. and internationally.",
  },
  {
    title: "Community Impact",
    text: "Advancing representation and high standards of technical excellence across the computing profession.",
  },
];

const quickLinks = [
  { label: "Find Chapters", href: "https://www.awc-hq.org/chapters.html" },
  { label: "Independent Membership", href: "https://www.awc-hq.org/independent-members.html" },
  { label: "Join AWC", href: "https://www.awc-hq.org/join-awc.html" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">AWC</p>
            <p className="text-sm text-slate-300">Association for Women in Computing</p>
          </div>
          <a
            href="https://www.awc-hq.org/join-awc.html"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Become a Member
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-block rounded-full border border-cyan-300/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
              Founded 1978 • Washington, D.C.
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              A modern professional home for women in computing.
            </h1>
            <p className="max-w-xl text-base text-slate-300 md:text-lg">
              AWC supports programmers, analysts, operators, technical writers, trainers,
              and digital leaders through networking, mentorship, and career-ready programs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.awc-hq.org/join-awc.html"
                className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Join AWC
              </a>
              <a
                href="https://www.awc-hq.org/chapters.html"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Explore Chapters
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl shadow-cyan-900/20">
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">Mission</p>
            <p className="mt-3 text-lg leading-relaxed text-slate-200">
              Promote the advancement of women in the computing professions by creating
              meaningful opportunities for professional growth, ethical leadership, and community.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Programs & Events</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Student Chapters</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Independent Members</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Ethics & Standards</div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-slate-900/70">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-12 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Get involved with AWC</h3>
              <p className="mt-2 text-slate-300">Choose your path and start contributing today.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
