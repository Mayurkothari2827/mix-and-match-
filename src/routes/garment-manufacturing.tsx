import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ProductGrid, Steps, CTA, type Product } from "@/components/site";
import img from "@/assets/garment.jpg";

const items: Product[] = [
  { name: "Kurtas & Tunics", spec: "MOQ 50 pcs", price: "₹420", tone: "terracotta" },
  { name: "Shirts", spec: "MOQ 50 pcs", price: "₹480", tone: "indigo" },
  { name: "Dresses", spec: "MOQ 50 pcs", price: "₹560", tone: "saffron" },
  { name: "Co-ord Sets", spec: "MOQ 50 pcs", price: "₹690", tone: "ecru" }
];

export const Route = createFileRoute("/garment-manufacturing")({
  head: () => ({ meta: [
    { title: "Garment Manufacturing — Mix and Match Dyes" }, { name: "description", content: "Small-batch and bulk garment manufacturing from our fabrics." },
    { property: "og:title", content: "Garment Manufacturing — Mix and Match Dyes" }, { property: "og:description", content: "Small-batch and bulk garment manufacturing from our fabrics." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: GarmentManufacturing,
});

function GarmentManufacturing() {
  return (
    <>
      <PageHero eyebrow="Fabric to finished piece" title="Garment manufacturing" text="Patterns, sampling and production for labels of every size — starting at just 50 pieces per style." image={img} />
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
