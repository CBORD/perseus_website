import type { ArticleBlock } from "@/lib/blog/types";

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-slate-100">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-body space-y-6 text-[1.0625rem] leading-[1.75] text-slate-300">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case "paragraph":
            return (
              <p key={key} className="text-pretty">
                <InlineText text={block.text} />
              </p>
            );
          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={key}
                  className="scroll-mt-24 pt-2 text-2xl font-bold tracking-tight text-slate-50"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <h3
                key={key}
                className="scroll-mt-24 pt-1 text-xl font-semibold tracking-tight text-slate-100"
              >
                {block.text}
              </h3>
            );
          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={key}
                className={
                  block.ordered
                    ? "list-decimal space-y-2 pl-6 marker:text-cyan-300/90"
                    : "list-disc space-y-2 pl-6 marker:text-cyan-300/90"
                }
              >
                {block.items.map((item, j) => (
                  <li key={j} className="text-pretty pl-1">
                    <InlineText text={item} />
                  </li>
                ))}
              </ListTag>
            );
          }
          case "blockquote":
            return (
              <blockquote
                key={key}
                className="border-l-4 border-cyan-400/35 bg-slate-900/40 py-3 pl-5 pr-4 text-lg italic text-slate-200/95"
              >
                <InlineText text={block.text} />
              </blockquote>
            );
          case "code":
            return (
              <pre
                key={key}
                className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a101c] p-4 text-sm leading-relaxed text-slate-200 shadow-inner"
              >
                <code className="font-mono text-[0.9em]">{block.code}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
