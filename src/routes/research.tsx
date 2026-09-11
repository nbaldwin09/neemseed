import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/research")({ component: ResearchPage });

function ResearchPage() {
  return (
    <SimplePage
      title="Research"
      lead="We collect, conserve, characterize, and evaluate seed varieties, then select lines for farms without a stable growing season."
    />
  );
}
