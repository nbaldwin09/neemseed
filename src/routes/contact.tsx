import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <SimplePage title="Contact">
      <p className="max-w-xl text-muted">
        For inquiries contact{" "}
        <a href="mailto:cs@neemseed.com" className="text-fg underline-offset-4 hover:underline">
          cs@neemseed.com
        </a>
      </p>
    </SimplePage>
  );
}
