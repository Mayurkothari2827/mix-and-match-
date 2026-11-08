import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Search, User, BookOpen, ChevronDown, Phone, ArrowRight, IndianRupee, ChevronLeft } from "lucide-react";
import imgDyeable from "@/assets/dyeable.jpg";
import imgDyeing from "@/assets/dyeing.jpg";
import imgPrinting from "@/assets/printing.jpg";
import imgGarment from "@/assets/garment.jpg";

export const NAV = [
  { to: "/dyeable", label: "Dyeable" },
  { to: "/dyed", label: "Dyed" },
  { to: "/printing-dyeing", label: "Printing & Dyeing" },
  { to: "/garment-manufacturing", label: "Garment Manufacturing" },
] as const;

type Group = { title: string; blurb: string; items: [string, string][] };
const MEGA: Record<string, { groups: Group[]; featured: [string, string, string][] }> = {
  "/dyeable": {
    groups: [
      { title: "Woven Fabric", blurb: "Woven for everyone! The go-to fabric for all.", items: [["Cotton Fabric", "Soft and breathable"], ["Linen Fabric", "Textured and airy"], ["Viscose Fabric", "Smooth & flowy"], ["Modal Fabric", "Cool & absorbent"], ["Silk Fabric", "Lustrous & elegant"], ["Polyester Fabric", "Durable & practical"], ["Bemberg Fabric", "Silky & breathable"]] },
      { title: "Knitted Fabric", blurb: "Stretchy comfort for everyday wear.", items: [["Cotton Fabric", "Breathable comfort"], ["Linen Fabric", "Naturally cool"], ["Viscose Fabric", "Fluid drape"], ["Modal Fabric", "Soft & flexible"]] },
    ],
    featured: [["Sustainable Fabric", "Certified & traceable", imgDyeable], ["Schiffli Fabric", "Lightweight embroidery", imgGarment], ["Greige Fabric", "Unfinished and adaptable", imgDyeing], ["Corduroy", "Ribbed & structured", imgPrinting]],
  },
  "/dyed": {
    groups: [
      { title: "Solid Dyed", blurb: "Ready shades, in stock and ready to ship.", items: [["Cotton Solids", "200+ shades"], ["Rayon Solids", "Fluid & vibrant"], ["Linen Solids", "Earthy tones"], ["Silk Solids", "Rich & lustrous"], ["Crepe Solids", "Fine texture"], ["Georgette Solids", "Sheer & light"]] },
      { title: "Yarn Dyed", blurb: "Colour woven right into the fabric.", items: [["Checks", "Classic patterns"], ["Stripes", "Bold & subtle"], ["Chambray", "Soft denim look"], ["Ikat", "Handwoven heritage"]] },
    ],
    featured: [["Indigo Collection", "Natural indigo", imgDyeing], ["Pastel Edit", "Soft summer shades", imgDyeable], ["Earth Tones", "Plant-based dyes", imgPrinting], ["Festive Colours", "Deep jewel tones", imgGarment]],
  },
  "/printing-dyeing": {
    groups: [
      { title: "Printing", blurb: "Your design, printed on any fabric.", items: [["Digital Printing", "Photo-real detail"], ["Screen Printing", "Bulk & bold"], ["Block Printing", "Handcrafted"], ["Rotary Printing", "Large runs"]] },
      { title: "Dyeing", blurb: "Custom colour, matched to your swatch.", items: [["Custom Dyeing", "Any Pantone shade"], ["Tie & Dye", "Artisanal patterns"], ["Ombré Dyeing", "Gradient effects"], ["Natural Dyeing", "Eco-friendly"]] },
    ],
    featured: [["Digital Prints", "From 1 metre", imgPrinting], ["Hand Block", "Jaipur artisans", imgDyeable], ["Tie & Dye", "Bandhani & shibori", imgDyeing], ["Colour Matching", "Lab-dip approval", imgGarment]],
  },
  "/garment-manufacturing": {
    groups: [
      { title: "Womenswear", blurb: "Small-batch and bulk production.", items: [["Kurtas & Sets", "Ethnic wear"], ["Dresses", "Western wear"], ["Tops & Shirts", "Everyday styles"], ["Co-ords", "Matching sets"]] },
      { title: "Menswear & More", blurb: "End-to-end, from pattern to packing.", items: [["Shirts", "Formal & casual"], ["Kurtas", "Festive & daily"], ["Kidswear", "Soft & safe"], ["Home Linen", "Cushions & more"]] },
    ],
    featured: [["Private Label", "Your brand, our make", imgGarment], ["Sampling", "In 7 days", imgDyeable], ["Low MOQ", "From 50 pieces", imgPrinting], ["Export Ready", "Quality checked", imgDyeing]],
  },
};

function MegaMenu({ to, close }: { to: string; close: () => void }) {
  const m = MEGA[to];
  if (!m) return null;
  return (
    <div className="absolute inset-x-0 top-full border-t bg-card shadow-xl">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          {m.groups.map((g) => (
            <div key={g.title} className="grid gap-6 rounded-3xl border p-7 md:grid-cols-[180px_1fr]">
              <div>
                <h3 className="text-3xl leading-tight">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.blurb}</p>
                <Link to={to} onClick={close} className="mt-5 inline-flex items-center gap-6 border-b border-foreground pb-1 text-sm">View all <ArrowRight size={16} /></Link>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {g.items.map(([n, d]) => (
                  <Link key={n} to={to} onClick={close} className="group">
                    <span className="flex items-center gap-2 font-medium group-hover:text-primary">{n} <ArrowRight size={14} className="text-saffron" /></span>
                    <span className="text-xs text-muted-foreground">{d}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="mb-4 font-semibold">Featured Collections</p>
          <div className="grid grid-cols-2 gap-4">
            {m.featured.map(([n, d, img]) => (
              <Link key={n} to={to} onClick={close} className="group rounded-3xl border p-4 hover:border-primary">
                <div className="flex justify-between"><div><p className="font-medium">{n}</p><p className="text-xs text-muted-foreground">{d}</p></div><ArrowRight size={16} className="text-saffron" /></div>
                <img src={img} alt={n} loading="lazy" className="mt-3 aspect-[16/9] w-full rounded-2xl object-cover" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-40 bg-foreground" onMouseLeave={() => setMega(null)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 text-sm text-background">
        <div className="flex w-full max-w-sm items-center gap-3 rounded-full border border-background/20 py-1.5 pl-1.5 pr-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-saffron text-foreground"><Search size={15} /></span>
          <span className="flex-1 opacity-80">Search for materials</span>
          <kbd className="hidden rounded border border-background/30 px-1.5 text-[10px] opacity-60 sm:block">⌘K</kbd>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <span className="flex items-center gap-1 rounded-full border border-background/20 px-4 py-2"><IndianRupee size={14} /> INR <ChevronDown size={14} /></span>
          <Link to="/resources" className="flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 hover:bg-background/10"><BookOpen size={15} /> Resources</Link>
          <Link to="/contact" className="flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 hover:bg-background/10"><User size={15} /> Login</Link>
        </div>
      </div>
      <div className="relative rounded-t-3xl bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="font-display text-2xl font-bold uppercase tracking-wide">
            Mix<span className="text-saffron">&</span>Match <span className="text-saffron">Dyes</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onMouseEnter={() => setMega(n.to)} onClick={() => setMega(null)}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] ${mega === n.to ? "bg-saffron/15 text-primary" : ""}`}
                activeProps={{ className: "text-primary" }}>
                {n.label} <ChevronDown size={15} className={`transition ${mega === n.to ? "rotate-180" : ""}`} />
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="hidden items-center gap-3 rounded-full bg-foreground py-1.5 pl-6 pr-1.5 text-background md:flex">
            Contact <span className="grid h-10 w-10 place-items-center rounded-full bg-background text-foreground"><Phone size={16} /></span>
          </Link>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {mega && <MegaMenu to={mega} close={() => setMega(null)} />}
        {open && (
          <nav className="flex flex-col gap-3 border-t px-6 py-4 md:hidden">
            {[...NAV, { to: "/resources", label: "Resources" }, { to: "/contact", label: "Contact" }].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.label}</Link>
            ))}
          </nav>
        )}
      </div>
      <Link to="/contact" className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-2 rounded-l-xl bg-foreground px-3 py-5 text-xs tracking-[0.2em] text-background [writing-mode:vertical-rl]">
        <ChevronLeft size={16} className="rotate-90" /> ENQUIRY
      </Link>
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
