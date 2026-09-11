import { createFileRoute, Link } from "@tanstack/react-router";
import { SeedMark } from "@/components/seed-mark";

export const Route = createFileRoute("/")({ component: NeemHome });

function NeemHome() {
  return (
    <main>
      <section className="neem-wash border-b border-line">
        <div className="mx-auto grid max-w-5xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-sm text-muted">Botany research</p>
            <h1 className="mt-4 max-w-lg font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl">
              Seed science for hard climates.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              NeemSeed collects, tests, and preserves seed varieties for farms without a stable season.
            </p>
            <Link to="/research" className="mt-10 inline-flex text-sm text-muted hover:text-fg">
              See the research
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <SeedMark className="h-52 w-52 text-fg sm:h-64 sm:w-64" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:grid-cols-3">
        <article>
          <h2 className="font-display text-2xl">Collect</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Varieties from around the world, chosen for the climates they already survive.
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl">Test</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Heat, drought, and short rain first. A kind year is not the test.
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl">Preserve</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Live rows and a vault copy, so a farm can start from something that lasts.
          </p>
        </article>
      </section>
    </main>
  );
}
