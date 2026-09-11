import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SimplePage title="About us">
      <div className="max-w-xl space-y-5 text-muted">
        <p>
          NeemSeed collects, tests, and preserves seed varieties from around the world — building
          toward commercial, self-sufficient farms for communities without stable growing conditions.
        </p>
        <p>The aim is simple: make food accessible everywhere.</p>
      </div>
    </SimplePage>
  );
}
