import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";
import { TASTINGS } from "@/lib/neem/content";

export const Route = createFileRoute("/culture")({ component: CulturePage });

function CulturePage() {
  return (
    <SimplePage
      kicker="Food culture"
      title="Palate is a dataset."
      lead="A millet that cannot enter a breakfast in two climates is a failed line, even if the plot yield is handsome. Researchers eat what they release."
    >
      <ul className="divide-y divide-line border-y border-line">
        {TASTINGS.map((t) => (
          <li key={t.crop} className="py-6">
            <p className="text-xs uppercase tracking-widest text-muted">{t.crop}</p>
            <h2 className="mt-2 font-display text-2xl">{t.plate}</h2>
            <p className="mt-2 text-muted">{t.note}</p>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
