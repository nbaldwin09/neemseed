import { createFileRoute, Link } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";
import { SITES } from "@/lib/neem/content";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SimplePage
      kicker="About"
      title="A botany research house and a seed vault."
      lead="NeemSeed collects, tests, and preserves seed varieties from around the world — building toward commercial, self-sufficient farms for communities without stable growing conditions."
    >
      <div className="max-w-2xl space-y-5 text-muted">
        <p>
          We are not a packet shop. Germplasm is the product until a farm can stand on it. Lines enter
          with an origin and a climate. They leave only when heat, salt, drought, or short rain have
          already been treated as the specification — not as an afterthought.
        </p>
        <p>
          An Aorila company. The house keeps live rows, a working vault, and a cold copy that does not
          share power with the glasshouse. Collection without a farm is a museum. A farm without a vault
          is one bad season from zero.
        </p>
      </div>
      <ul className="mt-16 grid gap-10 sm:grid-cols-2">
        {SITES.map((s) => (
          <li key={s.name}>
            <p className="text-xs uppercase tracking-widest text-muted">{s.place}</p>
            <h2 className="mt-2 font-display text-2xl">{s.name}</h2>
            <p className="mt-2 text-sm text-muted">{s.role}</p>
          </li>
        ))}
      </ul>
      <Link
        to="/research"
        className="mt-12 inline-flex h-11 items-center rounded-pill bg-accent px-5 text-sm font-medium text-accent-fg"
      >
        Research
      </Link>
    </SimplePage>
  );
}
