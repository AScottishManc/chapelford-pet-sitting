import { marked } from 'marked';

/** Render a short Markdown string from content (links, *italics*) as inline HTML. */
export function inlineMarkdown(text: string): string {
  return marked.parseInline(text, { async: false });
}
