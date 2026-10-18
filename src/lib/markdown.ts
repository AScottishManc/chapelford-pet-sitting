import { marked } from 'marked';

/** Render a short Markdown string from content (links, *italics*) as inline HTML. */
export function inlineMarkdown(text: string): string {
  return marked.parseInline(text, { async: false });
}

/** Render a Markdown block from content (paragraphs, links, lists) as HTML. */
export function blockMarkdown(text: string): string {
  return marked.parse(text, { async: false });
}
