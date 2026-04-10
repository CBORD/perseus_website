import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Pricing",
  description: "Start for free, then scale your Perseus GraphRAG workflows with plans built for production.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="space-panel rounded-2xl p-8 md:p-10">
        <p className="ice-kicker">Pricing</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">Start free, scale with confidence</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Launch your first graph-powered agent flow quickly, then scale to enterprise throughput with reliability and
          control.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-slate-900/45 p-7">
          <p className="ice-kicker">Developer plan</p>
          <p className="mt-4 text-4xl font-black text-white">$0</p>
          <p className="mt-1 text-slate-300">to start building</p>
          <ul className="mt-5 space-y-2 text-slate-300">
            <li>- SDK + API access</li>
            <li>- Ontology generation endpoints</li>
            <li>- Graph build and retrieval APIs</li>
          </ul>
          <Link href="/sign-up" className="btn-primary mt-7 px-5 py-2.5 text-sm font-semibold">
            Start for free
          </Link>
        </article>

        <article className="rounded-2xl border border-white/10 bg-slate-900/45 p-7">
          <p className="ice-kicker">Scale plan</p>
          <p className="mt-4 text-4xl font-black text-white">Custom</p>
          <p className="mt-1 text-slate-300">for teams running production workloads</p>
          <ul className="mt-5 space-y-2 text-slate-300">
            <li>- Higher throughput and priority capacity</li>
            <li>- Advanced support and architecture guidance</li>
            <li>- Security and deployment alignment for your stack</li>
          </ul>
          <Link href="/contact" className="btn-secondary mt-7 px-5 py-2.5 text-sm font-semibold">
            Talk to sales
          </Link>
        </article>
      </div>

      <article className="mt-8 rounded-2xl border border-white/10 bg-slate-900/45 p-8 md:p-10">
        <p className="ice-kicker">Work with our experts</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Build your rollout plan with our expert team
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Get hands-on support for ontology design, graph construction strategy, and retrieval tuning so your team can
          move from pilot to production faster.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary px-5 py-2.5 text-sm font-semibold">
            Book an expert session
          </Link>
          <Link href="/services" className="btn-secondary px-5 py-2.5 text-sm font-semibold">
            Explore services
          </Link>
        </div>
      </article>
    </section>
  );
}
