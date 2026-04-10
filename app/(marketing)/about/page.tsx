import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn how we organize, build, and scale modern websites.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 text-slate-600">This page explains your team, mission, and differentiators.</p>
    </section>
  );
}
