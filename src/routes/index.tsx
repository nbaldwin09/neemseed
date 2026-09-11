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
              Let’s make food accessible everywhere
            </h1>
            <p className="mt-6 max-w-md text-muted">
              NeemSeed collects, tests, and preserves seed varieties from around the world — building
              toward commercial, self-sufficient farms for communities without stable growing conditions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/research"
                className="inline-flex h-12 items-center bg-accent px-6 text-sm font-medium uppercase tracking-wide text-accent-fg"
              >
                Explore our research
              </Link>
              <a
                href="https://aorila.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center px-6 text-sm font-medium uppercase tracking-wide shadow-[0_0_0_1px_var(--color-line)]"
              >
                Powered by <span className="ml-1 underline underline-offset-4">Aorila</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
