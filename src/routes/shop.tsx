import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";
import { PIPELINE } from "@/lib/neem/content";

export const Route = createFileRoute("/shop")({ component: ShopPage });

function ShopPage() {
  return (
    <SimplePage
      kicker="Shop seeds"
      title="Lines that have a name, a stage, and a climate they were built for."
      lead="These are research accessions, not grocery packets. Each lot ships with the trial note."
    >
      <ul className="divide-y divide-line border-y border-line">
        {PIPELINE.map((row) => (
          <li key={row.code} className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h2 className="font-display text-2xl">{row.name}</h2>
              <p className="mt-1 text-sm text-muted">{row.note}</p>
            </div>
            <p className="shrink-0 text-sm text-faint">
              {row.code} · {row.stage}
            </p>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
