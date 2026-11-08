import { createFileRoute, Link } from "@tanstack/react-router";
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
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Textiles · Dyeing · Printing</p>
          <h1 className="mt-5 text-6xl leading-[0.95] md:text-7xl">
            Colour, <span className="italic text-primary">mixed</span> &amp; matched for you.
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            From a single metre for your next outfit to thousands for your label — fabrics, custom dyeing, printing and garment making, all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/dyed" className="rounded-md bg-primary px-6 py-3 text-sm text-primary-foreground">Shop fabrics</Link>
            <Link to="/contact" className="rounded-md border px-6 py-3 text-sm hover:bg-secondary">Bulk enquiry</Link>
          </div>
          <div className="mt-10 flex gap-10 text-sm">
            <div><p className="font-display text-4xl">200+</p><p className="text-muted-foreground">Shades</p></div>
            <div><p className="font-display text-4xl">1m</p><p className="text-muted-foreground">Min. order</p></div>
            <div><p className="font-display text-4xl">7 days</p><p className="text-muted-foreground">Sampling</p></div>
          </div>
        </div>
        <img src={hero} alt="Stack of hand-dyed fabrics" width={1600} height={1008} className="aspect-[4/3] w-full rounded-lg object-cover" />
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
