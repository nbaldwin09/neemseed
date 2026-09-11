import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SimplePage } from "@/components/simple-page";
import { addBoard, listBoard } from "@/lib/houses/api";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [role, setRole] = useState<"grower" | "kitchen" | "lab">("grower");
  const [crop, setCrop] = useState("");
  const [note, setNote] = useState("");
  const [msg, setMsg] = useState("");
  const board = useQuery({
    queryKey: ["neem-board"],
    queryFn: () => listBoard(),
  });

  return (
    <SimplePage
      kicker="Contact"
      title="Leave a crop and a note."
      lead="No inbox. No accounts. Growers, kitchens, and the lab share one public board."
    >
      <form
        className="max-w-lg space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          setMsg("");
          const res = await addBoard({ data: { role, crop, note } });
          if (res && "error" in res && res.error) {
            setMsg(res.error);
            return;
          }
          setCrop("");
          setNote("");
          void board.refetch();
        }}
      >
        <label className="block text-sm">
          Desk
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as typeof role)}
            className="mt-1 h-11 w-full rounded-sm bg-surface px-3 text-sm shadow-[0_0_0_1px_var(--color-line)]"
          >
            <option value="grower">Grower</option>
            <option value="kitchen">Kitchen</option>
            <option value="lab">Lab</option>
          </select>
        </label>
        <label className="block text-sm">
          Crop
          <input
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            required
            className="mt-1 h-11 w-full rounded-sm bg-surface px-3 text-sm shadow-[0_0_0_1px_var(--color-line)]"
          />
        </label>
        <label className="block text-sm">
          Note
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
            rows={4}
            className="mt-1 w-full rounded-sm bg-surface px-3 py-2 text-sm shadow-[0_0_0_1px_var(--color-line)]"
          />
        </label>
        {msg ? <p className="text-sm text-live">{msg}</p> : null}
        <button
          type="submit"
          className="inline-flex h-11 items-center rounded-pill bg-accent px-5 text-sm font-medium text-accent-fg"
        >
          Post to the board
        </button>
      </form>
      <ul className="mt-16 divide-y divide-line border-y border-line">
        {(board.data || []).map((row) => (
          <li key={row.id} className="py-5">
            <p className="text-xs uppercase tracking-widest text-muted">
              {row.role} · {row.crop}
            </p>
            <p className="mt-2">{row.note}</p>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
