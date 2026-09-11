import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";
import { PAPERS, PROGRAMS } from "@/lib/neem/content";

export const Route = createFileRoute("/research")({ component: ResearchPage });

function ResearchPage() {
  return (
    <SimplePage
      kicker="Research"
      title="The seed science behind self-sufficient farming."
      lead="Six programs. One house. Notes, accessions, and a pipeline that still has dirt on it."
    >
      <div className="grid gap-10 sm:grid-cols-2">
        {PROGRAMS.map((p) => (
          <article key={p.id}>
            <h2 className="font-display text-3xl">{p.title}</h2>
            <p className="mt-3 text-muted">{p.copy}</p>
          </article>
        ))}
      </div>
      <h2 className="mt-20 font-display text-3xl">Notes</h2>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {PAPERS.map((p) => (
          <li key={p.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
            <span>{p.title}</span>
            <span className="text-sm text-muted">
              {p.year} · {p.venue}
            </span>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
