import { createFileRoute, Link } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";
import { GROWERS } from "@/lib/neem/content";

export const Route = createFileRoute("/involved")({ component: InvolvedPage });

function InvolvedPage() {
  return (
    <SimplePage
      kicker="Get involved"
      title="Growers sit at the same table as the lab."
      lead="If you farm under heat, salt, or erratic rain, the pipeline is open. Crop and note only — no inbox, no accounts."
    >
      <ul className="divide-y divide-line border-y border-line">
        {GROWERS.map((g) => (
          <li key={g.name} className="py-6">
            <h2 className="font-display text-2xl">{g.name}</h2>
            <p className="mt-1 text-sm text-muted">
              {g.region} · {g.crop}
            </p>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="mt-10 inline-flex h-11 items-center rounded-pill bg-accent px-5 text-sm font-medium text-accent-fg"
      >
        Leave a note
      </Link>
    </SimplePage>
  );
}
