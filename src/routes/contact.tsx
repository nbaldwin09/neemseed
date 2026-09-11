import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <SimplePage kicker="Contact" title="Hello.">
      <p className="max-w-md text-muted">NeemSeed</p>
    </SimplePage>
  );
}
