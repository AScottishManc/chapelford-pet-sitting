// Markdown images: the title sets the alignment, e.g. ![Alt](photo.jpg "left"),
// and each alignment has a largest width Astro will generate (it never enlarges)

const alignments: Record<string, { name: string; width: number }> = {
  left: { name: 'left', width: 600 },
  right: { name: 'right', width: 600 },
  centre: { name: 'centre', width: 1200 },
  center: { name: 'centre', width: 1200 },
};

export function markdownImages() {
  return {
    name: 'markdown-images',
    element: {
      filter: ['img'],
      visit(node: { properties?: Record<string, unknown> }, ctx: { setProperty(node: unknown, key: string, value: unknown): void }) {
        const title = String(node.properties?.title ?? '').trim().toLowerCase();
        const align = alignments[title] ?? alignments.right;

        if (alignments[title]) ctx.setProperty(node, 'title', null);
        ctx.setProperty(node, 'class', `rich-text__image rich-text__image--${align.name}`);
        ctx.setProperty(node, 'width', align.width);
      },
    },
  };
}
