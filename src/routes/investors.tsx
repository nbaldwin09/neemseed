import { createFileRoute, Link } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/investors")({ component: InvestorsPage });

function InvestorsPage() {
  return (
    <SimplePage
      kicker="Investors"
      title="Seed science as infrastructure."
      lead="NeemSeed builds cultivars and a vault for communities without stable growing conditions. The product is a farm that feeds itself."
    >
      <div className="grid gap-10 sm:grid-cols-3">
        <article>
          <h2 className="font-display text-2xl">Vault</h2>
          <p className="mt-2 text-sm text-muted">
            Live, frozen, and wild copies. Geography split. A 3-2-1 for germplasm.
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl">Pipeline</h2>
          <p className="mt-2 text-sm text-muted">
            Named lines with honest stages — lab, glasshouse, field, or grower pilot.
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl">Kitchen</h2>
          <p className="mt-2 text-sm text-muted">
            A cultivar that cannot sit on a plate does not ship. Flavor is a spec.
          </p>
        </article>
      </div>
      <Link to="/contact" className="mt-12 inline-flex h-11 items-center text-sm">
        Contact the house →
      </Link>
    </SimplePage>
  );
}
