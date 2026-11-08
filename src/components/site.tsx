import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Search, User, BookOpen } from "lucide-react";

export const NAV = [
  { to: "/dyeable", label: "Dyeable" },
  { to: "/dyed", label: "Dyed" },
  { to: "/printing-dyeing", label: "Printing & Dyeing" },
  { to: "/garment-manufacturing", label: "Garment Manufacturing" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="bg-indigo-dye text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span>Samples from 1 metre · Bulk orders from 500 metres</span>
          <div className="flex gap-5">
            <Link to="/resources" className="flex items-center gap-1 hover:opacity-80"><BookOpen size={14} /> Resources</Link>
            <Link to="/contact" className="flex items-center gap-1 hover:opacity-80"><User size={14} /> Login</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="font-display text-2xl leading-none">
          Mix <span className="italic text-primary">&</span> Match Dyes
        </Link>
        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-primary" activeProps={{ className: "text-primary" }}>{n.label}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm text-muted-foreground"><Search size={14} /> Search fabrics</div>
          <Link to="/contact" className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90">Contact</Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t px-6 py-4 lg:hidden">
          {[...NAV, { to: "/resources", label: "Resources" }, { to: "/contact", label: "Contact" }].map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-indigo-dye text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl">Mix & Match Dyes</p>
          <p className="mt-3 text-sm opacity-75">Fabrics, dyeing, printing and garment making — for brands and for you.</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 opacity-60">Shop</p>
          {NAV.map((n) => <Link key={n.to} to={n.to} className="block py-1 hover:opacity-80">{n.label}</Link>)}
        </div>
        <div className="text-sm">
          <p className="mb-3 opacity-60">Company</p>
          <Link to="/resources" className="block py-1">Resources</Link>
          <Link to="/contact" className="block py-1">Contact</Link>
        </div>
        <div className="text-sm">
          <p className="mb-3 opacity-60">Reach us</p>
          <p>hello@mixandmatchdyes.com</p>
          <p>+91 00000 00000</p>
        </div>
      </div>
      <p className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-60">© 2026 Mix & Match Dyes</p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-5xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-md text-muted-foreground">{text}</p>
        <div className="mt-8 flex gap-3">
          <Link to="/contact" className="rounded-md bg-primary px-5 py-3 text-sm text-primary-foreground">Request a quote</Link>
          <Link to="/contact" className="rounded-md border px-5 py-3 text-sm hover:bg-secondary">Order swatches</Link>
        </div>
      </div>
      <img src={image} alt={title} width={1200} height={912} className="aspect-[4/3] w-full rounded-lg object-cover" />
    </section>
  );
}

export type Product = { name: string; spec: string; price: string; tone: string };

const TONES: Record<string, string> = {
  terracotta: "bg-primary",
  indigo: "bg-indigo-dye",
  saffron: "bg-saffron",
  ecru: "bg-secondary",
  sand: "bg-muted",
};

export function ProductGrid({ title, items }: { title: string; items: Product[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-4xl">{title}</h2>
        <span className="text-sm text-muted-foreground">{items.length} fabrics</span>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((p) => (
          <article key={p.name} className="group">
            <div className={`aspect-square rounded-lg ${TONES[p.tone]} transition group-hover:scale-[0.98]`} />
            <h3 className="mt-3 font-sans text-sm font-medium">{p.name}</h3>
            <p className="text-xs text-muted-foreground">{p.spec}</p>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>{p.price}<span className="text-muted-foreground"> /metre</span></span>
              <span className="flex gap-1 text-[10px] uppercase tracking-wider text-muted-foreground"><span className="rounded border px-1.5 py-0.5">Swatch</span><span className="rounded border px-1.5 py-0.5">Bulk</span></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Steps({ steps }: { steps: { t: string; d: string }[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.t} className="bg-card p-6">
            <p className="font-display text-4xl text-primary">0{i + 1}</p>
            <p className="mt-3 font-medium">{s.t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTA({ children }: { children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-lg bg-primary px-8 py-14 text-center text-primary-foreground">
        <h2 className="text-4xl">{children ?? "Let's make your next collection together."}</h2>
        <Link to="/contact" className="mt-6 inline-block rounded-md bg-background px-6 py-3 text-sm text-foreground">Talk to us</Link>
      </div>
    </section>
  );
}
