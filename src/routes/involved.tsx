import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/involved")({ component: InvolvedPage });

function InvolvedPage() {
  return (
    <SimplePage title="Get involved">
      <div className="max-w-xl space-y-5 text-muted">
        <p>If you want to work with NeemSeed, write us.</p>
        <p>
          We open internships every summer. We also welcome help with charity programs and public
          events through the year.
        </p>
        <p>
          <a href="mailto:cs@neemseed.com" className="text-fg underline-offset-4 hover:underline">
            cs@neemseed.com
          </a>
        </p>
      </div>
    </SimplePage>
  );
}
