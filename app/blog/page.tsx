import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllArticles } from "@/lib/blog/articles";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Practical guides and product notes on GraphRAG, ontologies, and retrieval.",
  path: "/blog"
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function BlogPage() {
  const posts = getAllArticles();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12 max-w-2xl">
        <p className="ice-kicker mb-4">Insights</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-slate-400">
          Notes on building reliable graph-backed retrieval—architecture, evaluation, and how we ship
          Perseus.
        </p>
      </div>

      <ul className="flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl transition-transform duration-150 hover:-translate-y-0.5"
            >
              <article className="space-panel rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.author}</span>
                  {post.tags?.length ? (
                    <>
                      <span aria-hidden>·</span>
                      <span className="text-cyan-200/80">{post.tags.join(", ")}</span>
                    </>
                  ) : null}
                </div>
                <h2 className="mt-3 text-2xl font-bold text-slate-50 transition-colors group-hover:text-cyan-100">
                  {post.title}
                </h2>
                <p className="mt-2 text-slate-400">{post.excerpt}</p>
                <p className="mt-4 text-sm font-semibold text-cyan-200/90">
                  Read article
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
