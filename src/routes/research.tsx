import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/research")({ component: ResearchPage });

const VALUES = [
  {
    title: "Keep the seed",
    body: "Collect, test, and preserve varieties so a farm can start from something that lasts.",
  },
  {
    title: "Test the season",
    body: "Heat, drought, and short rain first. A kind year is not the measure.",
  },
  {
    title: "Stay exact",
    body: "Named accessions, written records, no line advanced on a story alone.",
  },
  {
    title: "Work in the open",
    body: "The research is public. The work is slow on purpose.",
  },
  {
    title: "Build toward a farm",
    body: "Collection without a stand is a museum. The aim is food that can be grown where the season will not cooperate.",
  },
];

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
      </section>

      <section className="mt-16 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">The work</p>
        <h2 className="mt-3 font-display text-3xl">Dedicated to seed research.</h2>
        <p className="mt-5 text-muted">
          We acquire material, keep it viable, describe it, and evaluate it under stress. A line moves
          forward only when it can stand in a planting, not only in a catalog.
        </p>
      </section>

      <section className="mt-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Our values</p>
        <h2 className="mt-3 font-display text-3xl">What the house holds to.</h2>
        <ul className="mt-10 grid gap-10 sm:grid-cols-2">
          {VALUES.map((v) => (
            <li key={v.title}>
              <h3 className="font-display text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 max-w-2xl border-t border-line pt-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Our commitment</p>
        <h2 className="mt-3 font-display text-3xl">Land, seed, and the people who eat from both.</h2>
        <p className="mt-5 text-muted">
          The work is aimed at farms that do not have a stable season: hold the germplasm, prove it
          under stress, and keep a path from accession to a stand that can feed a place.
        </p>
      </section>
    </SimplePage>
  );
}
