import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Mix and Match Dyes" },
      { name: "description", content: "Guides on fabrics, GSM, dyeing and caring for textiles." },
      { property: "og:title", content: "Resources — Mix and Match Dyes" },
      { property: "og:description", content: "Guides on fabrics, GSM, dyeing and caring for textiles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resources,
});

const posts = [
  { tag: "Guide", t: "What does GSM mean for your garment?", d: "Choosing the right weight for shirts, dresses and home textiles." },
  { tag: "Dyeing", t: "Reactive vs natural dyes", d: "How each behaves on cotton, linen and silk." },
  { tag: "B2B", t: "Planning your first bulk order", d: "MOQs, sampling timelines and lot consistency explained." },
  { tag: "Care", t: "Keeping dyed fabric vibrant", d: "Simple washing tips that keep colours rich for years." },
  { tag: "Printing", t: "Digital, screen or block print?", d: "Pick the right technique for your design and budget." },
  { tag: "Glossary", t: "Fabric terms A to Z", d: "From cambric to voile — every term, simply explained." },
];

function Resources() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="eyebrow">Learn</p>
      <h1 className="mt-4 text-6xl">Resources</h1>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.t} className="rounded-lg border bg-card p-6 transition hover:border-primary">
            <p className="eyebrow">{p.tag}</p>
            <h2 className="mt-3 text-2xl">{p.t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
