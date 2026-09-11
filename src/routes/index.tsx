import { createFileRoute, Link } from "@tanstack/react-router";
import { SeedMark } from "@/components/seed-mark";

export const Route = createFileRoute("/")({ component: NeemHome });

function NeemHome() {
  return (
    <main>
      <section className="neem-wash">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-12 md:grid-cols-[1fr_200px] md:gap-12 md:py-20">
          <div>
            <h1 className="font-display text-[2rem] leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Let’s make food accessible everywhere
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              NeemSeed collects, tests, and preserves seed varieties from around the world — building
              toward commercial, self-sufficient farms for communities without stable growing conditions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
          <div className="flex justify-center md:justify-end">
            <SeedMark
              className="text-fg"
              style={{ width: 168, height: 192, maxWidth: "42vw" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
