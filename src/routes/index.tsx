import { createFileRoute, Link } from "@tanstack/react-router";
import { SeedMark } from "@/components/seed-mark";

export const Route = createFileRoute("/")({ component: NeemHome });

const PROGRAMS = [
  { title: "Genebank", copy: "Collect and conserve seed accessions with origin and passport data." },
  { title: "Characterization", copy: "Germination, structure, flowering, and agronomic traits." },
  { title: "Climate and stress", copy: "Heat, drought, salinity, and short or erratic rain." },
  { title: "Trait discovery", copy: "Useful traits from landraces and working collections." },
  { title: "Breeding lines", copy: "Lab, glasshouse, and field screens toward a commercial stand." },
  { title: "Seed systems", copy: "Regeneration, storage, and the records needed to plant." },
];

const APPLICATIONS = [
  { title: "Dryland farms", copy: "Lines selected where the season does not keep a calendar." },
  { title: "Heat and drought", copy: "Stress floors before any yield story." },
  { title: "Food crops", copy: "Varieties meant to be eaten, not only catalogued." },
];

function NeemHome() {
  return (
    <main>
      <section className="neem-wash border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="rounded-3xl bg-bg/70 p-8 shadow-[0_0_0_1px_var(--color-line)]">
              <SeedMark className="h-56 w-56 text-fg sm:h-72 sm:w-72" />
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Botany research & seed vault
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
              Seed science
              <br />
              for hard climates.
            </h1>
            <p className="mt-6 max-w-md text-muted">
              NeemSeed collects, tests, and preserves seed varieties from around the world — building
              toward commercial, self-sufficient farms for communities without stable growing conditions.
            </p>
            <Link
              to="/research"
              className="mt-8 inline-flex h-12 items-center bg-accent px-6 text-sm font-medium uppercase tracking-wide text-accent-fg"
            >
              Explore our research
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Our work</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight">
          Germplasm first. Then a farm that can stand.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Acquire material, keep it viable, describe it, test it under stress, and only then advance a line.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article key={p.title} className="bg-bg px-6 py-8">
              <h3 className="font-display text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.copy}</p>
              <Link to="/research" className="mt-5 inline-block text-sm text-muted hover:text-fg">
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Applications</p>
          <h2 className="mt-3 font-display text-4xl">Where the work is used.</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {APPLICATIONS.map((a) => (
              <article key={a.title}>
                <h3 className="font-display text-2xl">{a.title}</h3>
                <p className="mt-3 text-sm text-muted">{a.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="max-w-xl font-display text-4xl leading-tight">Start with the crop and the place.</h2>
        <p className="mt-4 max-w-md text-muted">
          For inquiries contact{" "}
          <a href="mailto:cs@neemseed.com" className="text-fg underline-offset-4 hover:underline">
            cs@neemseed.com
          </a>
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex h-12 items-center bg-accent px-6 text-sm font-medium uppercase tracking-wide text-accent-fg"
        >
          Contact
        </Link>
      </section>
    </main>
  );
}
