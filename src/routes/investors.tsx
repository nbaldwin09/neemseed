import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/investors")({ component: InvestorsPage });

function InvestorsPage() {
  return (
    <SimplePage kicker="Investors" title="Seed research.">
      <p className="max-w-md text-muted">An Aorila company.</p>
    </SimplePage>
  );
}
