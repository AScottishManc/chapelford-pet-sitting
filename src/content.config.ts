import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// All site content lives in src/content/ as Markdown or YAML so the owner can
// edit it through Pages CMS (MIK-16) without touching code.

// Business details used across the site (header, footer, contact page).
const settings = defineCollection({
  loader: file('src/content/settings.yaml'),
  schema: z.object({
    businessName: z.string(),
    ownerName: z.string(),
    tagline: z.string().optional(),
    phone: z.string(),
    landline: z.string().optional(),
    email: z.email(),
    areaCovered: z.string(),
    facebook: z.url().optional(),
  }),
});

// Standalone pages: home intro, privacy policy, terms and conditions, etc.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      // Used in the browser tab title
      title: z.string(),
      // Main heading on the page, if different from the title
      heading: z.string().optional(),
      description: z.string(),
      // Framed photo shown at the top right of the page
      image: image().optional(),
      imageAlt: z.string().optional(),
      // Sidebar box ids from sidebar.yaml
      sidebar: z.array(z.string()).default(['recent-news']),
      // Markdown paragraphs shown after the page's main section (e.g. after a table)
      outro: z.array(z.string()).default([]),
    }),
});

// Dogs, cats, other pets. The Markdown body is the intro text above the
// list of services. Fields marked "Markdown" can contain links and *italics*.
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      order: z.number().int().default(0),
      // Sidebar box ids from sidebar.yaml
      sidebar: z.array(z.string()).default(['recent-news']),
      quote: z.string().optional(),
      image: image(),
      imageAlt: z.string(),
      imagePosition: z.enum(['left', 'right']).default('right'),
      services: z.array(
        z.object({
          // Used in links to this service, e.g. /cats/#feeding
          id: z.string(),
          name: z.string(),
          // Shown in the round badge, e.g. "£5.00" or "Please Call"
          price: z.string(),
          // Symbol after the price in the badge, e.g. "*"
          priceMarker: z.string().optional(),
          // Second line of the badge, e.g. "per visit"
          priceUnit: z.string().optional(),
          // Markdown, shown in bold after "Please note:"
          note: z.string().optional(),
          // Markdown paragraphs
          summary: z.array(z.string()).default([]),
          // Small bold line, e.g. the half price offer
          footnote: z.string().optional(),
          // Markdown bullet points
          includes: z.array(z.string()).default([]),
        }),
      ),
      // Markdown paragraphs after the list of services
      outro: z.array(z.string()).default([]),
    }),
});

// Layout of the price table on the Prices page. One entry per service page
// (the id matches the file in src/content/services). Prices themselves come
// from the service pages, so they only need changing in one place.
const priceTable = defineCollection({
  loader: file('src/content/price-table.yaml'),
  schema: z.object({
    heading: z.string(),
    order: z.number().int(),
    rows: z.array(
      z.union([
        z.object({
          // Service id on the service page, e.g. "feeding"
          service: z.string(),
          // Symbol after the name, e.g. "†" or "*"
          marker: z.string().optional(),
          time: z.string(),
        }),
        z.object({
          // A full-width note row, e.g. explaining a marker
          note: z.string(),
          bold: z.boolean().default(true),
        }),
      ]),
    ),
  }),
});

// One file per testimonial; the Markdown body is the quote.
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/testimonials' }),
  schema: ({ image }) =>
    z.object({
      // Highest number shows first; also used in links, e.g. /testimonials/#test_25
      number: z.number().int(),
      // Pet name(s), shown as the heading
      name: z.string(),
      // Handwritten caption under the photo, if shorter than the name
      caption: z.string().optional(),
      image: image(),
      // Description of the photo for screen readers, if different from the name
      imageAlt: z.string().optional(),
    }),
});

// Frequently asked questions. The id (q1, q2...) is used in links to each answer.
const faq = defineCollection({
  loader: file('src/content/faq.yaml'),
  schema: z.object({
    question: z.string(),
    // Markdown; may have several paragraphs and links
    answer: z.string(),
    order: z.number().int().default(0),
  }),
});

// Sidebar boxes (recent news, offers, testimonial snippets).
const sidebar = defineCollection({
  loader: file('src/content/sidebar.yaml'),
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      title: z.string().optional(),
      text: z.string(),
      link: z.string(),
      background: image().optional(),
    }),
});

// One file per news post; the Markdown body is the post.
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/news' }),
  schema: ({ image }) =>
    z.object({
      // Highest number shows first; also used in links, e.g. /news/#blog_15
      number: z.number().int(),
      title: z.string(),
      date: z.coerce.date(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      imagePosition: z.enum(['left', 'right']).default('left'),
      // Size the photo is shown at
      imageWidth: z.number().int().optional(),
      imageHeight: z.number().int().optional(),
    }),
});

export const collections = { settings, pages, services, priceTable, testimonials, faq, sidebar, news };
