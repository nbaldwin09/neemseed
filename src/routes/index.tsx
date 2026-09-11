import { createFileRoute, Link } from "@tanstack/react-router";
import { SeedMark } from "@/components/seed-mark";

export const Route = createFileRoute("/")({ component: NeemHome });

function NeemHome() {
  return (
    <main>
      <section className="neem-wash border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-dot" />
              Botany research & seed vault
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl leading-[1.05] sm:text-6xl">
              The seed science behind self-sufficient farming.
            </h1>
            <p className="mt-6 max-w-lg text-muted">
              NeemSeed collects, tests, and preserves seed varieties from around the world — building
              toward commercial, self-sufficient farms for communities without stable growing
              conditions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="inline-flex h-11 items-center rounded-pill bg-accent px-5 text-sm font-medium text-accent-fg"
              >
                Research
              </Link>
              <Link
                to="/lab"
                className="inline-flex h-11 items-center rounded-pill px-5 text-sm shadow-[0_0_0_1px_var(--color-line)]"
              >
                Lab & vault
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <SeedMark className="h-64 w-64 text-fg sm:h-80 sm:w-80" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs uppercase tracking-widest text-muted">The work</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl leading-snug sm:text-4xl">
          Collect. Test. Preserve. Then put a farm on ground that will not wait for a perfect season.
        </h2>
        <p className="mt-6 max-w-2xl text-muted">
          Most seed companies sell a packet and leave. We treat germplasm as infrastructure: find the
          line that already knows heat, salt, drought, or short rain; prove it under those conditions;
          keep a living copy and a frozen copy; and design the farm around what the seed can actually do.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          <Step n="01" title="Collect">
            Accessions from partner plots, landraces, and working collections — scored first for the
            climate they already survive, not for a catalog photograph.
          </Step>
          <Step n="02" title="Test">
            Coat geometry, imbibition windows, stress floors, flavor, and postharvest life. A line that
            yields only in a kind year is not a product.
          </Step>
          <Step n="03" title="Preserve">
            Live rows, house vault, and a geographically split cold copy. Nothing useful is allowed to
            exist in only one room.
          </Step>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3 sm:gap-0">
          <Claim>Collect varieties the market ignored.</Claim>
          <Claim>Test them where the season fails.</Claim>
          <Claim>Preserve them so a farm can start.</Claim>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs uppercase tracking-widest text-muted">The goal</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl leading-snug sm:text-4xl">
          Commercial farms that feed a place that does not have stable growing conditions.
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <p className="text-muted">
            Self-sufficient here does not mean romantic isolation. It means a farm that can be staffed,
            financed, and harvested without betting the year on a temperate climate it does not have.
            Seed is the first machine. Shelter, water, and power follow the crop — not the other way around.
          </p>
          <p className="text-muted">
            We are building the germplasm, the field method, and the release discipline so a community
            can plant a commercial stand instead of a demonstration plot. Collection without a farm is a
            museum. A farm without a vault is a single bad season from zero.
          </p>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line sm:grid-cols-2">
          <Goal title="Accession">Lines enter with origin, climate, and a reason they were taken.</Goal>
          <Goal title="Screen">Heat, salt, drought, and short-rain floors before any yield story.</Goal>
          <Goal title="Vault">Live, house, and cold copies — split on purpose.</Goal>
          <Goal title="Release">A cultivar leaves only when a farm can stand on it.</Goal>
        </ul>
      </section>
    </main>
  );
}

function Claim({ children }: { children: string }) {
  return (
    <p className="border-line py-2 font-display text-2xl leading-snug sm:border-l sm:px-8 sm:first:border-l-0 sm:first:pl-0">
      {children}
    </p>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: string;
}) {
  return (
    <article>
      <p className="text-xs uppercase tracking-widest text-faint">{n}</p>
      <h3 className="mt-2 font-display text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>
    </article>
  );
}

function Goal({ title, children }: { title: string; children: string }) {
  return (
    <li className="bg-bg px-5 py-6">
      <p className="text-xs uppercase tracking-widest text-muted">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </li>
  );
}
