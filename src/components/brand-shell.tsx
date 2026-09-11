import { Link as RRLink } from "react-router-dom";
import { type ReactNode } from "react";
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
  return (
    <div data-brand="neem" className="min-h-dvh bg-bg text-fg">
      <header className="border-b border-line bg-bg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <RRLink to="/">
            <NeemMark />
            <span className="sr-only">NeemSeed</span>
          </RRLink>
          <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm">
            {LINKS.map((l) => (
              <RRLink key={l.to} to={l.to} className="text-muted hover:text-fg">
                {l.label}
              </RRLink>
            ))}
          </nav>
        </div>
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
