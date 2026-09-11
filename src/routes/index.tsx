import { createFileRoute, Link } from "@tanstack/react-router";
import { SeedMark } from "@/components/seed-mark";

export const Route = createFileRoute("/")({ component: NeemHome });

function NeemHome() {
  return (
    <main>
      <section className="neem-wash">
        <div className="mx-auto grid max-w-5xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <h1 className="max-w-md font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl">
              Seed research.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted">
              We collect, test, and preserve seed varieties for farms in unstable climates.
            </p>
            <Link
              to="/research"
              className="mt-10 inline-flex h-11 items-center text-sm text-muted hover:text-fg"
            >
              Research
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <SeedMark className="h-52 w-52 text-fg sm:h-64 sm:w-64" />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:grid-cols-3">
        <p className="font-display text-2xl">Collect</p>
        <p className="font-display text-2xl">Test</p>
        <p className="font-display text-2xl">Preserve</p>
      </section>
    </main>
  );
}
