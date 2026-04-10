import type { BlogArticle } from "./types";

const articles: BlogArticle[] = [
  {
    slug: "example-post",
    title: "Example post",
    excerpt: "Starter content for the blog pipeline—swap in your own editorial workflow when ready.",
    author: "Team",
    publishedAt: "2026-04-09",
    tags: ["Product"],
    content: [
      {
        type: "paragraph",
        text: "This is a placeholder article that ships with the site. Use it to verify routing, typography, and metadata before you connect a CMS or MDX pipeline."
      },
      {
        type: "paragraph",
        text: "When you replace this copy, keep **short intros** and a clear thesis so readers know why the post matters in the first screen."
      },
      {
        type: "heading",
        level: 2,
        text: "What to do next"
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Drop real posts into `lib/blog/articles.ts` or wire a content layer.",
          "Point `generateStaticParams` at your source of truth.",
          "Tune Open Graph images per article when you have art direction."
        ]
      }
    ]
  },
  {
    slug: "ontology-first-graphrag",
    title: "Why ontology-first GraphRAG beats naive chunking",
    excerpt:
      "Structured knowledge gives retrieval a spine—here is how we think about entities, relations, and prompts when building on a graph.",
    author: "Perseus team",
    publishedAt: "2026-03-18",
    tags: ["GraphRAG", "Ontology"],
    content: [
      {
        type: "paragraph",
        text: "Retrieval-augmented generation over documents alone often drifts: the model sees overlapping chunks and misses the constraints that humans use to reason. An **ontology-first** approach anchors answers in typed entities and relations before you ever ask the LLM to summarize."
      },
      {
        type: "heading",
        level: 2,
        text: "Entities are not just strings"
      },
      {
        type: "paragraph",
        text: "When products, regulations, and internal policies are modeled as nodes with stable IDs, you can traverse the graph for multi-hop questions without praying that two PDF chunks happen to sit next to each other in the index."
      },
      {
        type: "blockquote",
        text: "If your graph does not know what a “clause” is, your retriever will keep fetching paragraphs that mention the word without understanding obligations."
      },
      {
        type: "heading",
        level: 2,
        text: "Practical takeaway"
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Define core types and relations for your domain.",
          "Attach evidence spans to graph edges or nodes, not only to loose chunks.",
          "Measure retrieval with tasks that require joins across documents."
        ]
      }
    ]
  },
  {
    slug: "evaluating-graph-retrieval",
    title: "Evaluating graph retrieval without drowning in metrics",
    excerpt:
      "A small, opinionated set of offline checks keeps graph retrieval honest before you spend weeks on human eval.",
    author: "Perseus team",
    publishedAt: "2026-02-04",
    tags: ["Evaluation", "Graph retrieval"],
    content: [
      {
        type: "paragraph",
        text: "Teams new to graph-augmented retrieval often track too many dashboards at once. Start with a **narrow task suite** that mirrors the questions your users actually ask, then expand."
      },
      {
        type: "heading",
        level: 2,
        text: "Build a golden set"
      },
      {
        type: "paragraph",
        text: "For each task, record the question, the expected supporting facts (node IDs or relation paths), and the acceptable answer shape. That makes regressions visible when you change embedding models or rerankers."
      },
      {
        type: "code",
        language: "text",
        code: "task_id: q-184\nquestion: Which subsidiary owns the trademark?\nexpected_nodes: [org:acme-eu, asset:mark-7712]\nnotes: Answer must cite the ownership edge, not a press release summary."
      },
      {
        type: "heading",
        level: 3,
        text: "When to add online metrics"
      },
      {
        type: "paragraph",
        text: "Once offline precision is stable, layer click-through, thumbs-up, or human spot checks—but only after you trust that the graph is returning the right neighborhood most of the time."
      }
    ]
  }
];

export function getAllArticles(): BlogArticle[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
