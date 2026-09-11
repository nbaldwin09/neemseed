import { createFileRoute, Link } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/investors")({ component: InvestorsPage });

function InvestorsPage() {
  return (
    <SimplePage
      kicker="Investors"
      title="Germplasm as infrastructure."
      lead="NeemSeed builds the seed science and the vault behind commercial farms that cannot wait for a temperate season. The product is a farm that feeds the place it stands in."
    >
      <div className="grid gap-10 sm:grid-cols-3">
        <article>
          <h2 className="font-display text-2xl">Vault</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Live, house, and cold copies. Split on purpose. A line that exists in one room is not held.
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl">Method</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Intake, bench, screen, plate, vault. Stress floors before any yield story. Release only when a farm can stand on the line.
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl">Farm</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Collection without a stand is a museum. We are building toward commercial plantings on ground the market treats as unworkable.
          </p>
        </article>
      </div>
      <Link
        to="/contact"
        className="mt-12 inline-flex h-11 items-center rounded-pill bg-accent px-5 text-sm font-medium text-accent-fg"
      >
        Write the house
      </Link>
    </SimplePage>
  );
}
