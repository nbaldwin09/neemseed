import { createFileRoute, Link } from "@tanstack/react-router";
import { SeedMark } from "@/components/seed-mark";

export const Route = createFileRoute("/")({ component: NeemHome });

function NeemHome() {
  return (
    <main>
      <section className="neem-wash">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-12 sm:py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Let’s make food accessible everywhere
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
              NeemSeed collects, tests, and preserves seed varieties from around the world — building
              toward commercial, self-sufficient farms for communities without stable growing conditions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
                Powered by <span className="ml-1 underline underline-offset-4">Aorila</span>
              </a>
            </div>
          </div>
          <div className="flex shrink-0 justify-center lg:w-64">
            <SeedMark className="h-40 w-40 text-fg sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
          </div>
        </div>
      </section>
    </main>
  );
}
