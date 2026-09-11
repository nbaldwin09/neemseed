import { createFileRoute, Link } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/contact")({ component: ContactPage });

const DESKS = [
  {
    title: "Growers",
    body: "Heat, salt, drought, or rain that will not keep a calendar. Tell us the crop and the ground.",
  },
  {
    title: "Kitchens and buyers",
    body: "A line that cannot sit on a plate does not leave the house. Palate is part of the screen.",
  },
  {
    title: "Lab and vault",
    body: "Accessions, methods, and split copies. Collaboration starts with a named variety and a climate.",
  },
  {
    title: "Capital",
    body: "Germplasm and farm method as infrastructure. Read Investors first, then write the house.",
  },
];

function ContactPage() {
  return (
    <SimplePage
      kicker="Contact"
      title="Write the house."
      lead="No public board. No packet counter. If the season is the problem, start with the crop and the ground."
    >
      <div className="grid gap-10 sm:grid-cols-2">
        {DESKS.map((d) => (
          <article key={d.title}>
            <h2 className="font-display text-2xl">{d.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{d.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-16 max-w-lg text-sm text-muted">
        Use Partners if you farm under stress. Use Investors if you are writing about the house as
        infrastructure. The work is slow on purpose.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/involved"
          className="inline-flex h-11 items-center rounded-pill bg-accent px-5 text-sm font-medium text-accent-fg"
        >
          Partners
        </Link>
        <Link
          to="/investors"
          className="inline-flex h-11 items-center rounded-pill px-5 text-sm shadow-[0_0_0_1px_var(--color-line)]"
        >
          Investors
        </Link>
      </div>
    </SimplePage>
  );
}
