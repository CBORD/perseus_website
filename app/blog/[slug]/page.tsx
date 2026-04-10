import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { getAllSlugs, getArticleBySlug } from "@/lib/blog/articles";
import { estimateReadingMinutes } from "@/lib/blog/readingTime";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Not found" };
  }
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const minutes = estimateReadingMinutes(article.content);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <nav className="mb-10 text-sm text-slate-500">
        <Link href="/blog" className="text-cyan-200/90 underline-offset-4 hover:text-cyan-100 hover:underline">
          ← Blog
        </Link>
      </nav>

      <header className="border-b border-white/10 pb-10">
        {article.tags?.length ? (
          <p className="ice-kicker mb-5">{article.tags.join(" · ")}</p>
        ) : (
          <p className="ice-kicker mb-5">Article</p>
        )}
        <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-xl leading-relaxed text-slate-400">{article.excerpt}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
          <address className="not-italic">
            <span className="text-slate-400">By </span>
            <span className="font-medium text-slate-300">{article.author}</span>
          </address>
          <span aria-hidden className="text-slate-600">
            ·
          </span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          {article.updatedAt ? (
            <>
              <span aria-hidden className="text-slate-600">
                ·
              </span>
              <span>
                Updated <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
              </span>
            </>
          ) : null}
          <span aria-hidden className="text-slate-600">
            ·
          </span>
          <span>{minutes} min read</span>
        </div>
      </header>

      <div className="pt-10">
        <ArticleBody blocks={article.content} />
      </div>

      <footer className="mt-16 border-t border-white/10 pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200/90 hover:text-cyan-100"
        >
          ← All articles
        </Link>
      </footer>
    </article>
  );
}
