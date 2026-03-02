const pillars = [
  {
    title: "Professional Networking",
    text: "Connect with a national network of women across every computing discipline and career stage.",
  },
  {
    title: "Continuing Education",
    text: "Access technical and career-oriented programs designed to strengthen practical expertise.",
  },
  {
    title: "Mentorship & Leadership",
    text: "Grow through guidance, chapter collaboration, and community-driven professional development.",
  },
];

const metrics = [
  { label: "Founded", value: "1978" },
  { label: "Coverage", value: "Nationwide Chapters" },
  { label: "Membership", value: "Independent + Student" },
  { label: "Standards", value: "ICCP Ethics Aligned" },
];

const links = [
  { label: "Find Chapters", href: "https://www.awc-hq.org/chapters.html" },
  { label: "Independent Members", href: "https://www.awc-hq.org/independent-members.html" },
  { label: "Join AWC", href: "https://www.awc-hq.org/join-awc.html" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1223] text-[#E9EEF9]">
      <header className="sticky top-0 z-20 border-b border-[#23324E] bg-[#0B1223]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#00BFA5]">AWC</p>
            <p className="text-sm text-[#AFC0DD]">Association for Women in Computing</p>
          </div>
          <a
            href="https://www.awc-hq.org/join-awc.html"
            className="rounded-full bg-[#00BFA5] px-4 py-2 text-sm font-semibold text-[#0B1223] transition hover:bg-[#18d9be]"
          >
            Become a Member
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <p className="inline-block rounded-full border border-[#00BFA5]/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#7DEDE0]">
              Washington, D.C. • Nonprofit Professional Network
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Pioneering the Future of Women in Computing Since 1978.
            </h1>
            <p className="max-w-2xl text-[#B8C7E2] md:text-lg">
              AWC advances women in computing through technical excellence, ethical leadership,
              chapter collaboration, and career-ready community programs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.awc-hq.org/join-awc.html"
                className="rounded-full bg-[#00BFA5] px-5 py-3 text-sm font-semibold text-[#0B1223] transition hover:bg-[#22e8cc]"
              >
                Join AWC
              </a>
              <a
                href="https://www.awc-hq.org/chapters.html"
                className="rounded-full border border-[#2B3E61] px-5 py-3 text-sm font-semibold text-[#DFE8F8] transition hover:border-[#00BFA5] hover:text-[#7DEDE0]"
              >
                Explore Chapters
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#2B3E61] bg-gradient-to-br from-[#1A237E] to-[#101A55] p-6 shadow-2xl shadow-[#00BFA5]/10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8CEFE3]">Impact Snapshot</p>
            <ul className="mt-4 space-y-2">
              {metrics.map((m) => (
                <li
                  key={m.label}
                  className="flex items-center justify-between rounded-lg border border-[#3A4D73] bg-[#0F1D46]/55 px-3 py-2"
                >
                  <span className="text-xs uppercase tracking-[0.12em] text-[#A8B9D8]">{m.label}</span>
                  <span className="text-sm font-medium text-[#EEF3FF]">{m.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-14">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="rounded-2xl border border-[#293B5D] bg-[#121D34] p-6">
                <h2 className="text-xl font-semibold text-[#F2F6FF]">{p.title}</h2>
                <p className="mt-3 text-[#B8C7E2]">{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#223452] bg-[#0D162B]">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Get involved with AWC</h3>
              <p className="mt-2 text-[#B8C7E2]">Choose your path and start building impact in computing.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-full border border-[#31466E] px-4 py-2 text-sm text-[#E5ECFA] transition hover:border-[#00BFA5] hover:text-[#7DEDE0]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
