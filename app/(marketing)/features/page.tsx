import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Features",
  description: "Explore PERSEUS feature capabilities for ontology generation, graph building, and graph retrieval.",
  path: "/features"
});

const FEATURE_PAGES = [
  {
    title: "Ontology generation",
    href: "/features/ontology-generation",
    description:
      "Generate a domain ontology from raw files like .pdf, .csv, and .md, then extend what already exists without rebuilding your whole schema.",
    label: "Feature 01"
  },
  {
    title: "Graph construction",
    href: "/features/graph-building",
    description: "Transform documents and structured records into a connected knowledge graph with repeatable, production-ready build pipelines.",
    label: "Feature 02"
  },
  {
    title: "Graph retrieval",
    href: "/features/graph-retrieval",
    description: "Retrieve high-signal entities, relationships, and paths so agents reason over connected context instead of isolated text chunks.",
    label: "Feature 03"
  }
];

export default function FeaturesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="space-panel rounded-2xl p-8 md:p-10">
        <p className="ice-kicker">Feature workflow</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">Build your graph stack, step by step</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Start from ontology generation, move to graph construction, then power agent decisions with graph retrieval.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {FEATURE_PAGES.map((feature) => (
          <article key={feature.href} className="rounded-2xl border border-white/10 bg-slate-900/45 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.35)]">
            <p className="ice-kicker">{feature.label}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">{feature.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">{feature.description}</p>
            <Link href={feature.href} className="btn-secondary mt-6 px-5 py-2.5 text-sm font-semibold">
              View feature page
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
