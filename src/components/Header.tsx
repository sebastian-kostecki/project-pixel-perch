import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home", index: "01" },
  { to: "/projects", label: "Projects", index: "02" },
  { to: "/skills", label: "Skills", index: "03" },
  { to: "/contact", label: "Contact", index: "04" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 font-mono text-xs font-bold text-primary transition-colors group-hover:bg-primary/20">
            &lt;/&gt;
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
            backend.dev
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`group relative flex items-baseline gap-1.5 py-2 font-mono text-sm transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={`text-[10px] ${active ? "text-primary" : "text-muted-foreground/60"}`}>
                  {link.index}
                </span>
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-px origin-left bg-primary transition-transform duration-200 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-2 border-b border-border/40 py-3 font-mono text-sm transition-colors last:border-0 ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-[10px] text-muted-foreground/60">{link.index}</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
