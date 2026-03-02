const metrics = [
  { label: "Founded", value: "1978" },
  { label: "Scope", value: "Nationwide Chapters" },
  { label: "Model", value: "Independent + Student Membership" },
  { label: "Standards", value: "ICCP Ethics Aligned" },
];

const tracks = [
  "Programmers",
  "System Analysts",
  "Operators",
  "Technical Writers",
  "Internet Specialists",
  "Trainers & Consultants",
];

const actions = [
  { label: "Join AWC", href: "https://www.awc-hq.org/join-awc.html" },
  { label: "Explore Chapters", href: "https://www.awc-hq.org/chapters.html" },
  { label: "Independent Members", href: "https://www.awc-hq.org/independent-members.html" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070B14] text-[#E6EBF5]">
      <header className="sticky top-0 z-20 border-b border-[#1A2436] bg-[#070B14]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C0FF00]">AWC</p>
            <p className="text-sm text-[#A8B3C7]">Association for Women in Computing</p>
          </div>
          <a
            href="https://www.awc-hq.org/join-awc.html"
            className="rounded-md border border-[#C0FF00] px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-[#C0FF00] transition hover:bg-[#C0FF00] hover:text-[#070B14]"
          >
            Apply Membership
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <section className="grid gap-8 border border-[#1A2436] bg-[#0A192F]/40 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#8FA3C6]">
              ICCP Constituent Society • Washington, D.C.
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Advancing the Standard of Women in Computing.
            </h1>
            <p className="max-w-2xl text-[#B8C4DA]">
              Since 1978, AWC has provided a professional network for women across technical
              disciplines—promoting competence, ethical leadership, and long-term career growth.
            </p>
            <div className="flex flex-wrap gap-3">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  className="rounded-md border border-[#2A3850] px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-[#D4DEEE] transition hover:border-[#C0FF00] hover:text-[#C0FF00]"
                >
                  {a.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border border-[#1F2C43] bg-[#0B1424] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#7F90AD]">Ethics + Competence Dashboard</p>
            <ul className="mt-4 space-y-2">
              {metrics.map((m) => (
                <li
                  key={m.label}
                  className="flex items-center justify-between border border-[#1A2436] bg-[#08101E] px-3 py-2"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#8EA0BE]">{m.label}</span>
                  <span className="text-sm text-[#E7EEFB]">{m.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="border border-[#1A2436] bg-[#0A1220] p-6">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-[#C0FF00]">Professional Tracks</h2>
            <p className="mt-3 text-[#AFC0DA]">
              AWC supports members across the full spectrum of computing careers.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {tracks.map((item) => (
                <div
                  key={item}
                  className="border border-[#1C2740] bg-[#08101E] px-3 py-2 text-sm text-[#D5DEEE]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="border border-[#1A2436] bg-[#0A1220] p-6">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-[#C0FF00]">Network Architecture</h2>
            <div className="mt-4 space-y-3 text-[#B5C5DD]">
              <p>
                <span className="text-[#E8EEFA]">Local Chapters:</span> in-person professional community and
                programming across the U.S.
              </p>
              <p>
                <span className="text-[#E8EEFA]">Independent Members:</span> global access for professionals who
                cannot attend local chapter meetings.
              </p>
              <p>
                <span className="text-[#E8EEFA]">Student Chapters:</span> early-career acceleration at colleges and
                universities.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
