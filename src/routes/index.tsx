import { createFileRoute, Link } from "@tanstack/react-router";
import { SeedMark } from "@/components/seed-mark";

export const Route = createFileRoute("/")({ component: NeemHome });

function NeemHome() {
  return (
    <main>
      <section className="neem-wash">
        <div className="neem-home">
          <div>
            <h1>Let’s make food accessible everywhere</h1>
            <p className="mt-5 max-w-md text-muted">
              NeemSeed collects, tests, and preserves seed varieties from around the world — building
              toward commercial, self-sufficient farms for communities without stable growing conditions.
            </p>
            <div className="neem-actions">
              <Link
                to="/research"
                className="inline-flex h-12 items-center justify-center bg-accent px-5 text-sm font-medium uppercase tracking-wide text-accent-fg"
              >
                Explore our research
              </Link>
              <a
                href="https://aorila.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center px-5 text-sm font-medium uppercase tracking-wide shadow-[0_0_0_1px_var(--color-line)]"
              >
                Powered by&nbsp;
                <span className="underline underline-offset-4">Aorila</span>
              </a>
            </div>
          </div>
          <div className="neem-mark-wrap">
            <SeedMark className="text-fg" />
          </div>
        </div>
      </section>
    </main>
  );
}
