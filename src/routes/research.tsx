import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";
import { PROGRAMS } from "@/lib/neem/content";

export const Route = createFileRoute("/research")({ component: ResearchPage });

function ResearchPage() {
  return (
    <SimplePage kicker="Research" title="What we study.">
      <ul className="max-w-xl divide-y divide-line border-y border-line">
        {PROGRAMS.map((p) => (
          <li key={p.id} className="py-5">
            <p className="font-display text-2xl">{p.title}</p>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
