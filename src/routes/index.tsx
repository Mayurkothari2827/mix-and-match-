import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { ProductGrid, CTA, NAV } from "@/components/site";
import hero from "@/assets/hero.jpg";
import dyeable from "@/assets/dyeable.jpg";
import dyeing from "@/assets/dyeing.jpg";
import printing from "@/assets/printing.jpg";
import garment from "@/assets/garment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mix and Match Dyes — Fabrics, Dyeing & Garments" },
      { name: "description", content: "Dyeable and dyed fabrics, custom printing and garment manufacturing for brands and individuals." },
      { property: "og:title", content: "Mix and Match Dyes — Fabrics, Dyeing & Garments" },
      { property: "og:description", content: "Dyeable and dyed fabrics, custom printing and garment manufacturing for brands and individuals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const cats = [dyeable, dyeing, printing, garment];

function Index() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="grid items-end gap-8 border-b pb-10 md:grid-cols-[1fr_320px]">
          <h1 className="font-sans text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">Fabric Sourcing Simplified</h1>
          <p className="text-lg text-muted-foreground">Your one-stop partner for fabric <b className="text-foreground">sourcing, custom dyeing, printing and garment making</b>, all in one place.</p>
        </div>
        <div className="grid gap-8 py-10 md:grid-cols-[260px_1fr]">
          <div>
            <div className="flex">
              <span className="grid h-24 w-24 place-items-center rounded-full bg-primary font-display text-3xl text-primary-foreground">MM</span>
              <span className="-ml-3 grid h-24 w-24 place-items-center rounded-full border-2 border-saffron bg-background text-saffron"><ArrowDownRight size={36} /></span>
            </div>
            <p className="mt-8 text-xl italic">"Finally, a sourcing partner that treats my label like it actually matters."</p>
            <p className="mt-10 font-display text-5xl">500+</p>
            <p className="text-sm text-muted-foreground">Brands and makers served</p>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img src={hero} alt="Stack of hand-dyed fabrics" width={1600} height={1008} className="aspect-[16/10] w-full object-cover" />
            <Link to="/contact" className="absolute bottom-0 right-0 flex items-center gap-4 rounded-tl-[2rem] bg-background p-3">
              <span className="flex items-center gap-4 rounded-3xl bg-saffron px-7 py-5 text-xl font-medium">Start Sourcing <ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-2">
        {[
          { k: "For brands (B2B)", t: "Bulk sourcing, made reliable", d: "Custom colour matching, MOQ-friendly production, consistent lots and dedicated support." },
          { k: "For individuals (B2C)", t: "Beautiful fabric by the metre", d: "Order swatches or a few metres for your tailor, crafts or home — delivered to your door." },
        ].map((b) => (
          <div key={b.k} className="rounded-lg border bg-card p-8">
            <p className="eyebrow">{b.k}</p>
            <h2 className="mt-3 text-3xl">{b.t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-4xl">What we do</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NAV.map((n, i) => (
            <Link key={n.to} to={n.to} className="group">
              <img src={cats[i]} alt={n.label} loading="lazy" width={1200} height={912} className="aspect-[4/5] w-full rounded-lg object-cover transition group-hover:opacity-90" />
              <p className="mt-3 font-medium group-hover:text-primary">{n.label} →</p>
            </Link>
          ))}
        </div>
      </section>

      <ProductGrid
        title="Bestsellers this season"
        items={[
          { name: "Terracotta Linen", spec: "160gsm · 58\"", price: "₹380", tone: "terracotta" },
          { name: "Indigo Cotton Twill", spec: "220gsm · 58\"", price: "₹210", tone: "indigo" },
          { name: "Saffron Rayon", spec: "125gsm · 56\"", price: "₹95", tone: "saffron" },
          { name: "Cotton Cambric PFD", spec: "90gsm · 44\"", price: "₹78", tone: "ecru" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="font-display text-3xl italic leading-snug">"They matched our pantone on the first sample. Our whole summer line is now dyed with Mix &amp; Match."</p>
        <p className="mt-4 text-sm text-muted-foreground">— Founder, a Jaipur-based label</p>
      </section>

      <CTA />
    </>
  );
}
