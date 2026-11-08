import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ProductGrid, Steps, CTA, type Product } from "@/components/site";
import img from "@/assets/dyeing.jpg";

const items: Product[] = [
  { name: "Terracotta Linen", spec: `160gsm · 58"`, price: "₹380", tone: "terracotta" },
  { name: "Indigo Cotton Twill", spec: `220gsm · 58"`, price: "₹210", tone: "indigo" },
  { name: "Saffron Rayon", spec: `125gsm · 56"`, price: "₹95", tone: "saffron" },
  { name: "Rust Cotton Flex", spec: `140gsm · 58"`, price: "₹150", tone: "terracotta" },
  { name: "Midnight Shibori", spec: `Cotton · 44"`, price: "₹240", tone: "indigo" },
  { name: "Turmeric Muslin", spec: `90gsm · 44"`, price: "₹110", tone: "saffron" },
  { name: "Brick Crepe", spec: `Poly · 110gsm`, price: "₹85", tone: "terracotta" },
  { name: "Navy Modal", spec: `90gsm · 44"`, price: "₹220", tone: "indigo" }
];

export const Route = createFileRoute("/dyed")({
  head: () => ({ meta: [
    { title: "Dyed Fabrics — Mix and Match Dyes" }, { name: "description", content: "Solid and tie-dyed fabrics in rich, colour-fast shades." },
    { property: "og:title", content: "Dyed Fabrics — Mix and Match Dyes" }, { property: "og:description", content: "Solid and tie-dyed fabrics in rich, colour-fast shades." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Dyed,
});

function Dyed() {
  return (
    <>
      <PageHero eyebrow="In stock colours" title="Dyed fabrics" text="Over 200 solid shades, ready to ship by the metre or the roll. Colour-fast, tested, consistent." image={img} />
      <ProductGrid title="Shop the range" items={items} />
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
