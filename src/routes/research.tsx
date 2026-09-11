import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/research")({ component: ResearchPage });

function ResearchPage() {
  return (
    <SimplePage
      title={
        <>
          Research{" "}
          <span className="text-xl font-normal sm:text-2xl">
            powered by{" "}
            <a
              href="https://aorila.com"
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              Aorila
            </a>
          </span>
        </>
      }
    >
      <section className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Our purpose</p>
        <h2 className="mt-3 font-display text-3xl leading-snug sm:text-4xl">
          Make food accessible everywhere.
        </h2>
        <p className="mt-5 text-muted">
          NeemSeed collects, tests, and preserves seed varieties from around the world — building
          toward commercial, self-sufficient farms for communities without stable growing conditions.
        </p>
        <p className="mt-8 text-muted">
          NeemSeed is giving her heart and soul to make research and food readily accessible.
        </p>
        <p className="mt-5 text-muted">
          For questions contact{" "}
          <a href="mailto:cs@neemseed.com" className="text-fg underline-offset-4 hover:underline">
            cs@neemseed.com
          </a>
        </p>
      </section>
    </SimplePage>
  );
}
