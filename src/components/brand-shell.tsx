import { Link as RRLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { NeemMark } from "@/components/wordmarks";

const LINKS = [
  { to: "/about", label: "About us" },
  { to: "/research", label: "Research" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function BrandShell({
  children,
}: {
  brand?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!open) {
      setShown(0);
      return;
    }
    setShown(0);
    const timers: number[] = [];
    LINKS.forEach((_, i) => {
      timers.push(window.setTimeout(() => setShown(i + 1), 90 + i * 120));
    });
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div data-brand="neem" className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <RRLink to="/" onClick={() => setOpen(false)}>
            <NeemMark />
            <span className="sr-only">NeemSeed</span>
          </RRLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-fg"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-fg/20 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute inset-y-0 right-0 flex w-[min(22rem,100%)] flex-col border-l border-line bg-bg px-8 py-8 shadow-xl transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <p className="font-display text-xl">neemseed.</p>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-2">
            {LINKS.map((l, i) => (
              <RRLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`font-display text-3xl transition-all duration-300 ${
                  i < shown ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              >
                {l.label}
              </RRLink>
            ))}
          </nav>
        </aside>
      </div>

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
