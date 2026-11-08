import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ProductGrid, Steps, CTA, type Product } from "@/components/site";
import img from "@/assets/printing.jpg";

const items: Product[] = [
  { name: "Digital Print on Rayon", spec: "From 50m", price: "₹140", tone: "terracotta" },
  { name: "Hand Block Cotton", spec: "From 100m", price: "₹260", tone: "indigo" },
  { name: "Screen Print Cambric", spec: "From 300m", price: "₹110", tone: "saffron" },
  { name: "Pantone Dye Match", spec: "From 100m", price: "₹60", tone: "sand" }
];

export const Route = createFileRoute("/printing-dyeing")({
  head: () => ({ meta: [
    { title: "Custom Printing & Dyeing — Mix and Match Dyes" }, { name: "description", content: "Custom digital, screen and block printing plus colour matching." },
    { property: "og:title", content: "Custom Printing & Dyeing — Mix and Match Dyes" }, { property: "og:description", content: "Custom digital, screen and block printing plus colour matching." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PrintingDyeing,
});

function PrintingDyeing() {
  return (
    <>
      <PageHero eyebrow="Your design, our craft" title="Printing & dyeing" text="Send us a pantone or a print file. We match colour, sample in 7 days and run bulk with care." image={img} />
      <ProductGrid title="Services" items={items} />
      <Steps steps={[
        { t: "Order a swatch", d: "Feel the fabric before you commit." },
        { t: "Approve sample", d: "Colour and quality checked by you." },
        { t: "Bulk production", d: "Made to your quantity and timeline." },
        { t: "Delivered", d: "Packed and shipped across India and abroad." },
      ]} />
      <CTA />
    </>
  );
}
