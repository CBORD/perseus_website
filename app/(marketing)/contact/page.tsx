import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Talk with our team about your next website project.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-slate-600">Add your form, booking link, or sales email in this section.</p>
    </section>
  );
}
