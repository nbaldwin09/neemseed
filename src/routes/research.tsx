import { createFileRoute, Link } from "@tanstack/react-router";
import { PAPERS, PROGRAMS, SITES } from "@/lib/neem/content";

export const Route = createFileRoute("/research")({ component: ResearchPage });

const METHOD = [
  {
    step: "01",
    title: "Intake",
    body: "Every accession gets an origin, a climate note, and a reason it was taken. Unnamed seed does not enter a trial.",
  },
  {
    step: "02",
    title: "Bench",
    body: "Coat geometry, moisture, imbibition window, and first germination. We record what the seed does before we argue what the plant is.",
  },
  {
    step: "03",
    title: "Screen",
    body: "Heat, salt, drought, and short-rain floors. Peak yield in a kind year is not a release criterion.",
  },
  {
    step: "04",
    title: "Plate",
    body: "Lines that claim flavor sit in the kitchen. A crop that cannot enter a table will not enter a market.",
  },
  {
    step: "05",
    title: "Vault",
    body: "Live row, house copy, and a cold copy on a different circuit. Then — and only then — a farm brief.",
  },
];

function ResearchPage() {
  return (
    <main>
      <section className="neem-wash border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-dot" />
            Research
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] sm:text-5xl">
            How a variety is collected, tested, and kept.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            Six programs, four sites, a public notes list. The work is germplasm first: find the line that already
            knows a hard climate, prove it, split the copies, write the farm brief.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/lab"
              className="inline-flex h-11 items-center rounded-pill bg-accent px-5 text-sm font-medium text-accent-fg"
            >
              Lab & vault
            </Link>
            <Link
              to="/involved"
              className="inline-flex h-11 items-center rounded-pill px-5 text-sm shadow-[0_0_0_1px_var(--color-line)]"
            >
              Work with the house
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs uppercase tracking-widest text-muted">Method</p>
        <h2 className="mt-2 font-display text-3xl">Intake to vault</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {METHOD.map((m) => (
            <li key={m.step}>
              <p className="text-xs uppercase tracking-widest text-faint">{m.step}</p>
              <h3 className="mt-2 font-display text-xl">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs uppercase tracking-widest text-muted">Programs</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl">What the house studies</h2>
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {PROGRAMS.map((p) => (
              <article key={p.id} className="border-t border-line pt-6">
                <p className="text-xs uppercase tracking-widest text-faint">{p.id}</p>
                <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs uppercase tracking-widest text-muted">Sites</p>
        <h2 className="mt-2 font-display text-3xl">Where the work sits</h2>
        <ul className="mt-8 grid gap-0 sm:grid-cols-2">
          {SITES.map((s) => (
            <li key={s.name} className="border-t border-line py-6 sm:px-6 sm:first:pl-0 sm:odd:pl-0">
              <p className="text-xs uppercase tracking-widest text-muted">{s.place}</p>
              <h3 className="mt-1 font-display text-2xl">{s.name}</h3>
              <p className="text-sm text-muted">{s.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs uppercase tracking-widest text-muted">Notes</p>
          <h2 className="mt-2 font-display text-3xl">Working papers</h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Internal notes. The record of what the screens showed — not a journal wall.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {PAPERS.map((p) => (
              <li
                key={p.title}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span>{p.title}</span>
                <span className="shrink-0 text-sm text-muted">
                  {p.year} · {p.venue}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
