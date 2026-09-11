import { createFileRoute, Link } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/involved")({ component: InvolvedPage });

const LANES = [
  {
    title: "Field partners",
    body: "Plots that already live with heat, salt, drought, or rain that arrives late. We need ground that fails the way the market will fail — not a demonstration garden.",
  },
  {
    title: "Accession partners",
    body: "Landraces and working collections with an origin and a climate note. Unnamed seed does not enter a trial.",
  },
  {
    title: "Kitchen partners",
    body: "Cooks and buyers who will say when a line cannot sit on a plate. Flavor is a screen, not a brochure line.",
  },
];

function InvolvedPage() {
  return (
    <SimplePage
      kicker="Partners"
      title="If the season is the problem, the house is open."
      lead="Growers, collections, and kitchens sit on the same work. We do not sell packets from this desk."
    >
      <div className="grid gap-10 sm:grid-cols-3">
        {LANES.map((l) => (
          <article key={l.title}>
            <h2 className="font-display text-2xl">{l.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{l.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-14 max-w-xl text-muted">
        Bring a crop, a place, and what the year actually does to it. We will tell you whether it belongs
        in intake.
      </p>
      <Link
        to="/contact"
        className="mt-8 inline-flex h-11 items-center rounded-pill bg-accent px-5 text-sm font-medium text-accent-fg"
      >
        Write the house
      </Link>
    </SimplePage>
  );
}
