import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SimplePage title="About us">
      <p className="max-w-xl text-muted">Our goal is simple. To provide for everyone.</p>
    </SimplePage>
  );
}
