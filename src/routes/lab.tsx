import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";
import { SITES } from "@/lib/neem/content";

export const Route = createFileRoute("/lab")({ component: LabPage });

function LabPage() {
  return (
    <SimplePage
      kicker="The lab"
      title="Glass, soil, and a vault on a different circuit."
      lead="Germination rooms, a chemistry bench, a tasting kitchen, and frozen duplicates that do not share power with the glasshouse."
    >
      <div className="grid gap-10 sm:grid-cols-3">
        <article>
          <h2 className="font-display text-2xl">Accessions</h2>
          <p className="mt-2 text-sm text-muted">Live inventory tagged to a public code. Nothing unnamed enters a trial.</p>
        </article>
        <article>
          <h2 className="font-display text-2xl">Vault</h2>
          <p className="mt-2 text-sm text-muted">Deep-frozen duplicates, geographically split. The wild collection stays wild.</p>
        </article>
        <article>
          <h2 className="font-display text-2xl">Kitchen</h2>
          <p className="mt-2 text-sm text-muted">Every line that claims flavor sits on a plate before it sits in a brochure.</p>
        </article>
      </div>
      <ul className="mt-16 divide-y divide-line border-y border-line">
        {SITES.map((s) => (
          <li key={s.name} className="py-5">
            <p className="text-xs uppercase tracking-widest text-muted">{s.place}</p>
            <h3 className="mt-1 font-display text-2xl">{s.name}</h3>
            <p className="text-sm text-muted">{s.role}</p>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
