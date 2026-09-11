import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { type FormEvent, type ReactNode, useState } from "react";
import { CalabiMark, NeemMark, BullpenMark } from "@/components/wordmarks";

type Brand = "hub" | "bullpen" | "neem" | "calabi";

const NAV: Record<
  Brand,
  {
    home: string;
    name: string;
    links: Array<{ to: string; label: string }>;
  }
> = {
  hub: {
    home: "/",
    name: "Aorila",
    links: [
      { to: "/", label: "Bullpen" },
      { to: "/", label: "NeemSeed" },
      { to: "/", label: "Calabi" },
    ],
  },
  bullpen: {
    home: "/",
    name: "Bullpen Cession",
    links: [
      { to: "/", label: "Scores" },
      { to: "/schedule", label: "Schedule" },
      { to: "/watch", label: "Watch" },
    ],
  },
  neem: {
    home: "/",
    name: "NeemSeed",
    links: [
      { to: "/about", label: "About" },
      { to: "/research", label: "Research" },
      { to: "/contact", label: "Contact" },
    ],
  },
  calabi: {
    home: "/",
    name: "Calabi Group",
    links: [
      { to: "/compute", label: "Compute" },
      { to: "/storage", label: "Storage" },
      { to: "/status", label: "Status" },
    ],
  },
};

export function BrandShell({
  brand,
  children,
}: {
  brand: Brand;
  children: ReactNode;
}) {
  const nav = NAV[brand];
  const [open, setOpen] = useState(false);
  return (
    <div data-brand={brand} className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-5">
          <Link to={nav.home} className="shrink-0" onClick={() => setOpen(false)}>
            <Mark brand={brand} />
            <span className="sr-only">{nav.name}</span>
          </Link>
          <nav className="ml-auto hidden items-center gap-8 md:flex">
            {nav.links.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                className="text-sm text-muted hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open ? (
          <nav className="flex flex-col gap-1 px-6 pb-6 md:hidden">
            {nav.links.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                className="inline-flex h-10 items-center text-sm"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        ) : null}
        {brand === "bullpen" ? <DeskSearch /> : null}
      </header>
      {children}
      <footer className="mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-12 text-sm text-faint">NeemSeed</div>
      </footer>
    </div>
  );
}

function Mark({ brand }: { brand: Brand }) {
  if (brand === "bullpen") return <BullpenMark />;
  if (brand === "neem") return <NeemMark />;
  if (brand === "calabi") return <CalabiMark className="h-9" />;
  return <span className="text-sm tracking-widest uppercase">Aorila</span>;
}

function DeskSearch() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = q.trim();
    if (!next) {
      void navigate({ to: "/search" });
      return;
    }
    void navigate({ to: "/search", search: { q: next } });
  };
  return (
    <form onSubmit={onSubmit} className="mx-auto flex max-w-5xl gap-2 px-6 pb-4">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search"
        aria-label="Search"
        className="h-10 min-h-10 w-full rounded-sm bg-surface px-3 text-sm text-fg shadow-[0_0_0_1px_var(--color-line)] outline-none placeholder:text-faint"
      />
      <button type="submit" className="inline-flex h-10 shrink-0 items-center px-4 text-sm">
        Search
      </button>
    </form>
  );
}
