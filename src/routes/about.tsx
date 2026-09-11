import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SimplePage kicker="About" title="A seed research company.">
      <p className="max-w-md text-muted">
        NeemSeed collects, tests, and preserves seed varieties from around the world.
      </p>
    </SimplePage>
  );
}
