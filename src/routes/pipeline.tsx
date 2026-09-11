import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";
import { GROWERS, PIPELINE } from "@/lib/neem/content";

export const Route = createFileRoute("/pipeline")({ component: PipelinePage });

function PipelinePage() {
  return (
    <SimplePage
      kicker="Pipeline"
      title="Named lines, not vapor."
      lead="Stage is honest: lab, glasshouse, field, or a pilot with a grower."
    >
      <ul className="divide-y divide-line border-y border-line">
        {PIPELINE.map((row) => (
          <li key={row.code} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h2 className="font-display text-2xl">{row.name}</h2>
              <p className="mt-1 text-sm text-muted">{row.note}</p>
            </div>
            <p className="text-sm text-faint">
              {row.code} · {row.stage}
            </p>
          </li>
        ))}
      </ul>
      <h2 className="mt-16 font-display text-3xl">Growers</h2>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {GROWERS.map((g) => (
          <li key={g.name} className="py-5">
            <h3 className="font-display text-2xl">{g.name}</h3>
            <p className="text-sm text-muted">
              {g.region} · {g.crop}
            </p>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
