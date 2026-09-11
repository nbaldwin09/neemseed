import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/lab")({ component: LabPage });

function LabPage() {
  return (
    <SimplePage kicker="Lab" title="Lab and vault.">
      <div className="grid max-w-2xl gap-8 sm:grid-cols-3">
        <p className="font-display text-2xl">Accessions</p>
        <p className="font-display text-2xl">Vault</p>
        <p className="font-display text-2xl">Field</p>
      </div>
    </SimplePage>
  );
}
