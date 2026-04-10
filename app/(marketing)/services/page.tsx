import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description: "Discover the services and outcomes you provide.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-4 text-slate-600">Add service cards here with clear problem/solution framing.</p>
    </section>
  );
}
