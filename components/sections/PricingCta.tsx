import Link from "next/link";

export function PricingCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-slate-900/70 p-8 md:grid-cols-[1.5fr_1fr] md:p-10">
        <div>
          <p className="ice-kicker">Deploy from prototype to production</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">Start free, scale with confidence</h2>
          <p className="mt-4 max-w-2xl text-slate-300 md:text-lg">
            Launch your first graph-powered agent flow quickly, then scale to enterprise throughput with reliability,
            support, and infrastructure options designed for production teams.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
              <span className="block text-xs uppercase tracking-wider text-slate-400">Cold start</span>
              <span className="mt-1 block font-semibold text-white">Minutes</span>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
              <span className="block text-xs uppercase tracking-wider text-slate-400">API-first</span>
              <span className="mt-1 block font-semibold text-white">SDK + endpoints</span>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
              <span className="block text-xs uppercase tracking-wider text-slate-400">Upgrade path</span>
              <span className="mt-1 block font-semibold text-white">Team to enterprise</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/sign-up"
              className="btn-primary px-5 py-2.5 text-sm font-bold"
            >
              Get your free API key
            </Link>
            <Link
              href="/prof-services"
              className="btn-secondary px-5 py-2.5 text-sm font-bold"
            >
              Talk to solutions team
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-cyan-400/20 bg-slate-950/85 p-6">
          <p className="text-sm font-semibold text-white">Developer plan</p>
          <p className="mt-2 text-3xl font-black text-cyan-300">$0</p>
          <p className="mt-1 text-sm text-slate-400">to start building</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>SDK + API access</li>
            <li>Ontology generation endpoints</li>
            <li>Graph build and retrieval APIs</li>
            <li>Upgrade when ready to scale</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
