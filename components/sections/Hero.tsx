import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full pb-14 pt-0">
      <div className="mx-auto max-w-6xl px-4 pt-10 md:px-6">
        <div className="relative text-center">
          <p className="ice-kicker px-4 py-1.5 text-sm">
            Graph Infrastructure for AI Agents
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            <span className="block leading-tight">Give Your Agents</span>
            <span className="mt-1 block leading-tight md:mt-1.5">a Structured World Model</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-7 text-slate-300 md:leading-8">
            Move beyond flat text retrieval. Transform unstructured docs and data into connected knowledge graphs so
            agents can reason over entities, relationships, and context with confidence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/sign-up"
              className="btn-primary px-6 py-2.5 text-sm font-bold"
            >
              Start building
            </Link>
            <Link
              href="/features"
              className="btn-secondary px-5 py-2.5 text-sm font-bold"
            >
              Explore features
            </Link>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-xl border border-white/10 bg-[#0c1220]/85 shadow-[0_24px_60px_rgba(3,8,20,0.4)]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#070b12]/95 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-rose-500/90" />
            <span className="h-3 w-3 rounded-full bg-amber-400/90" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
          </div>
          <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-900/65 to-violet-950/20 px-5 py-6 md:px-7 md:py-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.04),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />
            <pre className="relative overflow-x-auto text-sm leading-7 text-slate-200">
            <code>{`import perseus_client
knowledge_graphs = perseus_client.build_graph(
    file_paths=["path/to/your/document.txt"],
)
for graph in knowledge_graphs:
    print(f"🎉 Graph built successfully with {len(graph.entities)} entities and {len(graph.relations)} relations!")`}</code>
            </pre>
          </div>
        </div>

        <div className="relative mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-white/10 bg-slate-900/45 p-5">
            <p className="ice-kicker">Ontology generation</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Generate ontologies from raw text, docs, and tables.
            </p>
          </article>
          <article className="rounded-xl border border-white/10 bg-slate-900/45 p-5">
            <p className="ice-kicker">Graph construction</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Build and update production-ready knowledge graphs.
            </p>
          </article>
          <article className="rounded-xl border border-white/10 bg-slate-900/45 p-5">
            <p className="ice-kicker">Graph retrieval</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Retrieve graph context tuned for agent workflows.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
