import { Link as RRLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { type ReactNode, useState } from "react";
import { NeemMark } from "@/components/wordmarks";

const LINKS = [
  { to: "/about", label: "About us" },
  { to: "/involved", label: "Get involved" },
  { to: "/contact", label: "Contact" },
];

export function BrandShell({
  children,
}: {
  brand?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div data-brand="neem" className="min-h-dvh bg-bg text-fg">
      <header className="border-b border-line bg-bg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <RRLink to="/" onClick={() => setOpen(false)}>
            <NeemMark />
            <span className="sr-only">NeemSeed</span>
          </RRLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open ? (
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 border-t border-line px-5 py-3">
            {LINKS.map((l) => (
              <RRLink
                key={l.to}
                to={l.to}
                className="py-2 text-sm text-muted hover:text-fg"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </RRLink>
            ))}
          </nav>
        ) : null}
      </header>

      {children}

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
          <p className="font-display text-xl">neemseed.</p>
          <div className="flex flex-col gap-2 text-sm">
            {LINKS.map((l) => (
              <RRLink key={l.to} to={l.to} className="text-muted hover:text-fg">
                {l.label}
              </RRLink>
            ))}
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-t border-line px-5 py-6 text-sm text-faint">
          <p>© {new Date().getFullYear()} NeemSeed</p>
          <a href="mailto:cs@neemseed.com" className="hover:text-fg">
            cs@neemseed.com
          </a>
        </div>
      </footer>
    </div>
  );
}
