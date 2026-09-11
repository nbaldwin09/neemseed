import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/research")({ component: ResearchPage });

function ResearchPage() {
  return (
    <SimplePage
      title={
        <>
          Research{" "}
          <span className="text-xl font-normal sm:text-2xl">
            powered by{" "}
            <a
              href="https://aorila.com"
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              Aorila
            </a>
          </span>
        </>
      }
    />
  );
}
