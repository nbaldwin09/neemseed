import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/involved")({ component: InvolvedPage });

function InvolvedPage() {
  return (
    <SimplePage kicker="Partners" title="Work with us.">
      <p className="max-w-md text-muted">Growers, collections, and research partners.</p>
    </SimplePage>
  );
}
