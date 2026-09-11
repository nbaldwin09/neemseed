import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/research")({ component: ResearchPage });

function ResearchPage() {
  return (
    <SimplePage title="Research">
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
      </section>
    </SimplePage>
  );
}
