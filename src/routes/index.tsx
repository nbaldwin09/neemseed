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
            <p className="mt-6 max-w-md text-muted">
              NeemSeed collects, tests, and preserves seed varieties from around the world — building
              toward commercial, self-sufficient farms for communities without stable growing
              conditions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="inline-flex h-11 items-center rounded-pill bg-accent px-5 text-sm font-medium text-accent-fg"
              >
                Our Research
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <SeedMark className="h-64 w-64 text-fg sm:h-80 sm:w-80" />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3 sm:gap-0">
        <Claim>Built on a patented design system.</Claim>
        <Claim>Shelter, food, and power — one system.</Claim>
        <Claim>Engineered for conditions others can't survive.</Claim>
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
