import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/research")({ component: ResearchPage });

const CLUSTERS = [
  {
    title: "Genebank",
    copy: "Collect, conserve, and hold seed accessions with origin and passport data. Live rows and a cold copy so material is not kept in one place.",
  },
  {
    title: "Characterization",
    copy: "Describe each accession: germination, coat and seed structure, flowering, and basic agronomic traits. Unnamed seed does not enter a trial.",
  },
  {
    title: "Climate and stress",
    copy: "Evaluate lines under heat, drought, salinity, and short or erratic rain. Stress performance is recorded before any yield story.",
  },
  {
    title: "Trait discovery",
    copy: "Identify useful traits from landraces and working collections — resilience, quality, and field habit — for use in further selection.",
  },
  {
    title: "Breeding lines",
    copy: "Move selected material through lab, glasshouse, and field screens toward lines that can stand in a commercial planting.",
  },
  {
    title: "Seed systems",
    copy: "Keep a path from accession to farm: regeneration, storage, and the records a grower or partner needs to plant a stand.",
  },
];

function ResearchPage() {
  return (
    <SimplePage
      kicker="Research"
      title="Crop improvement and germplasm."
      lead="We collect, conserve, characterize, and evaluate seed varieties, then select lines for farms without a stable growing season."
    >
      <p className="max-w-2xl text-muted">
        The work follows the same sequence used by public genebanks and dryland breeding programs:
        acquire material, keep it viable, describe it, test it under stress, and only then advance a line.
      </p>
      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {CLUSTERS.map((c) => (
          <article key={c.title}>
            <h2 className="font-display text-3xl">{c.title}</h2>
            <p className="mt-3 text-muted">{c.copy}</p>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}
