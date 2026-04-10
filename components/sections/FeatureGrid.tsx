import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    label: "Ontology generation",
    title: "Ontology generation",
    href: "/features/ontology-generation",
    description:
      "Generate a domain ontology from raw files like .pdf, .csv, and .md, then extend what already exists without rebuilding your whole schema.",
    illustration: "/images/ontology-illustration.png"
  },
  {
    label: "Graph construction",
    title: "Graph construction",
    href: "/features/graph-building",
    description:
      "Transform documents and structured records into a connected knowledge graph with repeatable, production-ready build pipelines.",
    illustration: "/images/graph-construction-illustration.png",
    reverse: true
  },
  {
    label: "Graph retrieval",
    title: "Graph retrieval",
    href: "/features/graph-retrieval",
    description:
      "Retrieve high-signal entities, relationships, and paths so agents reason over connected context instead of isolated text chunks.",
    illustration: "/images/graph-retrieval-illustration.png"
  }
];

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="p-2 md:p-4">
        <p className="ice-kicker">Core workflow</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white md:text-4xl">
          Three steps to move from raw text to agent-ready knowledge
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Each capability is designed to work independently and together, so teams can ship quickly and scale with a
          reliable graph foundation.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className={`rounded-2xl border border-white/10 bg-slate-900/45 px-7 py-10 shadow-[0_20px_50px_rgba(2,6,23,0.35)] md:px-10 md:py-12 ${
              feature.illustration ? "md:grid md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8" : ""
            }`}
          >
            <div className={feature.reverse ? "md:order-2" : ""}>
              <p className="ice-kicker-lg">{feature.label}</p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">{feature.description}</p>
              <Link
                href={feature.href}
                className="btn-secondary mt-7 px-5 py-2.5 text-sm font-semibold"
              >
                Learn more
              </Link>
            </div>
            {feature.illustration ? (
              <div className={`relative mt-6 aspect-[4/3] overflow-hidden rounded-xl border border-white/12 md:mt-0 ${feature.reverse ? "md:order-1" : ""}`}>
                <Image
                  src={feature.illustration}
                  alt={`${feature.title} illustration`}
                  width={1024}
                  height={953}
                  className="h-full w-full scale-[1.06] object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-900/35 via-violet-500/12 to-cyan-300/10 mix-blend-multiply" />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
