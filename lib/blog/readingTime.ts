import type { ArticleBlock } from "./types";

function blockText(block: ArticleBlock): string {
  switch (block.type) {
    case "paragraph":
    case "heading":
    case "blockquote":
      return block.text;
    case "list":
      return block.items.join(" ");
    case "code":
      return block.code;
    default:
      return "";
  }
}

export function estimateReadingMinutes(blocks: ArticleBlock[]): number {
  const words = blocks
    .map(blockText)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
