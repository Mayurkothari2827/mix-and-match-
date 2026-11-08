import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mix and Match Dyes" },
      { name: "description", content: "Send a bulk enquiry or ask about fabrics, dyeing and printing." },
      { property: "og:title", content: "Contact — Mix and Match Dyes" },
      { property: "og:description", content: "Send a bulk enquiry or ask about fabrics, dyeing and printing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-md border bg-card px-4 py-3 text-sm outline-none focus:border-primary";
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
      <div>
        <p className="eyebrow">Get in touch</p>
        <h1 className="mt-4 text-6xl">Let's talk fabric.</h1>
        <p className="mt-5 text-muted-foreground">Whether you need 2 metres or 2,000, tell us what you're making and we'll reply within a day.</p>
        <div className="mt-8 space-y-2 text-sm">
          <p>hello@mixandmatchdyes.com</p>
          <p>+91 00000 00000</p>
          <p className="text-muted-foreground">Mon–Sat, 10am–7pm</p>
        </div>
      </div>
      {sent ? (
        <div className="rounded-lg border bg-card p-10"><h2 className="text-3xl">Thank you!</h2><p className="mt-2 text-muted-foreground">We'll be in touch soon.</p></div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-lg border bg-card p-8">
          <div className="flex gap-2 text-sm">
            <label className="flex items-center gap-2"><input type="radio" name="type" defaultChecked /> Business</label>
            <label className="ml-4 flex items-center gap-2"><input type="radio" name="type" /> Personal</label>
          </div>
          <input required placeholder="Name" className={field} />
          <input required type="email" placeholder="Email" className={field} />
          <select className={field} defaultValue="Dyed fabrics">
            <option>Dyeable fabrics</option><option>Dyed fabrics</option><option>Printing & dyeing</option><option>Garment manufacturing</option>
          </select>
          <textarea rows={4} placeholder="Tell us about your requirement" className={field} />
          <button className="w-full rounded-md bg-primary py-3 text-sm text-primary-foreground">Send enquiry</button>
        </form>
      )}
    </section>
  );
}
