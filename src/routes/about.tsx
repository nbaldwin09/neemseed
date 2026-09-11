import { createFileRoute, Link } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";
import { SITES } from "@/lib/neem/content";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SimplePage
      kicker="About"
      title="A seed vault that still remembers the field."
      lead="NeemSeed is a commercial botany research house. We collect, test, and preserve varieties so farms can feed themselves when the season will not cooperate."
    >
      <div className="grid gap-10 sm:grid-cols-2">
        {SITES.map((s) => (
          <article key={s.name}>
            <p className="text-xs uppercase tracking-widest text-muted">{s.place}</p>
            <h2 className="mt-2 font-display text-3xl">{s.name}</h2>
            <p className="mt-2 text-muted">{s.role}</p>
          </article>
        ))}
      </div>
      <p className="mt-16 max-w-xl text-muted">
        Three copies of every accession: live, frozen, and wild. Two media. One that still grows.
      </p>
      <Link to="/research" className="mt-6 inline-flex h-11 items-center text-sm">
        Read the research →
      </Link>
    </SimplePage>
  );
}
