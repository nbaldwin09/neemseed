import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SimplePage kicker="About" title="A seed research company." lead="An Aorila company.">
      <div className="max-w-lg space-y-5 text-muted">
        <p>
          NeemSeed collects, tests, and preserves seed varieties from around the world.
        </p>
        <p>
          The work is for farms that do not have a stable growing season.
        </p>
      </div>
    </SimplePage>
  );
}
