import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/research")({ component: ResearchPage });

const PROGRAMS = [
  { title: "Seed architecture", copy: "How the seed is built — coat, moisture, germination." },
  { title: "Climate cultivars", copy: "Lines that hold yield under heat, salt, and drought." },
  { title: "Rhizosphere systems", copy: "The soil partnership around the plant." },
  { title: "Flavor chemistry", copy: "Taste as part of the screen, not an afterthought." },
  { title: "Postharvest life", copy: "What happens after harvest, in the crate and on the table." },
  { title: "Food culture", copy: "Whether a crop can enter a kitchen in more than one place." },
];

function ResearchPage() {
  return (
    <SimplePage
      kicker="Research"
      title="What we study."
      lead="Six programs. Seed first."
    >
      <ul className="max-w-2xl divide-y divide-line border-y border-line">
        {PROGRAMS.map((p) => (
          <li key={p.title} className="py-6">
            <p className="font-display text-2xl">{p.title}</p>
            <p className="mt-2 text-sm text-muted">{p.copy}</p>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
