import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ProductGrid, Steps, CTA, type Product } from "@/components/site";
import img from "@/assets/dyeable.jpg";

const items: Product[] = [
  { name: "Cotton Cambric PFD", spec: `60s · 90gsm · 44"`, price: "₹78", tone: "ecru" },
  { name: "Pure Linen Greige", spec: `40 lea · 160gsm · 58"`, price: "₹320", tone: "sand" },
  { name: "Mulberry Silk Habotai", spec: `8 momme · 44"`, price: "₹540", tone: "ecru" },
  { name: "Viscose Rayon PFD", spec: `30s · 125gsm · 56"`, price: "₹68", tone: "sand" },
  { name: "Cotton Voile", spec: `80s · 60gsm · 44"`, price: "₹92", tone: "ecru" },
  { name: "Modal Satin", spec: `90gsm · 44"`, price: "₹185", tone: "sand" },
  { name: "Cotton Slub Duck", spec: `210gsm · 54"`, price: "₹120", tone: "ecru" },
  { name: "Chanderi Silk", spec: `70gsm · 44"`, price: "₹260", tone: "sand" }
];

export const Route = createFileRoute("/dyeable")({
  head: () => ({ meta: [
    { title: "Dyeable Fabrics — Mix and Match Dyes" }, { name: "description", content: "Undyed greige and PFD fabrics ready for your own colour." },
    { property: "og:title", content: "Dyeable Fabrics — Mix and Match Dyes" }, { property: "og:description", content: "Undyed greige and PFD fabrics ready for your own colour." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Dyeable,
});

function Dyeable() {
  return (
    <>
      <PageHero eyebrow="Ready to dye" title="Dyeable fabrics" text="Prepared-for-dyeing cotton, linen, silk and viscose — clean bases that take colour beautifully." image={img} />
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
