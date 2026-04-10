import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Automatic Ontology Generation",
  description:
    "Automatically generate, enrich, and extend ontologies from unstructured and structured data sources.",
  path: "/features/ontology-generation"
});

export default function OntologyGenerationPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <article className="rounded-2xl border border-white/10 bg-slate-900/45 px-7 py-10 shadow-[0_20px_50px_rgba(2,6,23,0.35)] md:grid md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8 md:px-10 md:py-12">
        <div>
          <p className="ice-kicker-lg">Ontology generation</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">Build ontology foundations from raw files</h1>
          <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
            Generate a domain ontology from raw files like .pdf, .csv, and .md, then extend what already exists without rebuilding your whole schema.
          </p>
          <ul className="mt-6 space-y-2 text-slate-300">
            <li>- Ingest mixed data sources in one workflow.</li>
            <li>- Extract classes, properties, and relationships automatically.</li>
            <li>- Extend existing ontologies while preserving structure.</li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/sign-up" className="btn-primary px-5 py-2.5 text-sm font-semibold">
              Start for free
            </Link>
            <Link href="/features/graph-building" className="btn-secondary px-5 py-2.5 text-sm font-semibold">
              Next: Graph construction
            </Link>
          </div>
        </div>
        <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-xl border border-white/12 md:mt-0">
          <Image
            src="/images/ontology-illustration.png"
            alt="Ontology generation illustration"
            width={1024}
            height={953}
            className="h-full w-full scale-[1.06] object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-900/35 via-violet-500/12 to-cyan-300/10 mix-blend-multiply" />
        </div>
      </article>
    </section>
  );
}
