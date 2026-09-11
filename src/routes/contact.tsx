import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <SimplePage kicker="Contact" title="Get in touch.">
      <p className="max-w-md text-muted">
        Research partners, growers, and the house. Start with the crop and the place.
      </p>
    </SimplePage>
  );
}
