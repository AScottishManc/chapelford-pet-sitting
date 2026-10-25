import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsPost = CollectionEntry<'news'> & { slug: string; excerpt: string };

/** e.g. "12th January 2018", as on the old site */
export function formatDate(date: Date): string {
  const day = date.getUTCDate();
  const suffix =
    day % 100 >= 11 && day % 100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' } as Record<number, string>)[day % 10] ?? 'th';
  const monthYear = date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
  return `${day}${suffix} ${monthYear}`;
}

// First paragraph as plain text, cut at a word near the limit
function excerptOf(markdown = '', limit = 180): string {
  const paragraph = markdown.trim().split(/\n\s*\n/).find((block) => !block.startsWith('!')) ?? '';
  const text = paragraph
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[*_`#>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length <= limit ? text : `${text.slice(0, text.lastIndexOf(' ', limit))}…`;
}

/** All posts, newest first. Slugs come from the file name without its number;
 * a repeated slug gets the post's year added. */
export async function getNewsPosts(): Promise<NewsPost[]> {
  const posts = (await getCollection('news')).sort((a, b) => b.data.number - a.data.number);
  const counts = new Map<string, number>();
  const base = (id: string) => id.replace(/^\d+-/, '');
  posts.forEach((post) => counts.set(base(post.id), (counts.get(base(post.id)) ?? 0) + 1));

  return posts.map((post) => {
    const slug = base(post.id);
    return {
      ...post,
      slug: counts.get(slug)! > 1 ? `${slug}-${post.data.date.getUTCFullYear()}` : slug,
      excerpt: excerptOf(post.body),
    };
  });
}
