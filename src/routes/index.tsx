import { createFileRoute, Link } from "@tanstack/react-router";
import { SeedMark } from "@/components/seed-mark";

export const Route = createFileRoute("/")({ component: NeemHome });

function NeemHome() {
  return (
    <main>
      <section className="neem-wash">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <SeedMark className="h-56 w-56 text-fg sm:h-72 sm:w-72" />
          </div>
          <div>
            <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
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
    </main>
  );
}
