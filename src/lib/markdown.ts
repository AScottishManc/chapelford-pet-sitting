import { marked } from 'marked';

export function inlineMarkdown(text: string): string {
  return marked.parseInline(text, { async: false });
}

export function blockMarkdown(text: string): string {
  return marked.parse(text, { async: false });
}
