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
    }),
});

// Dogs, cats, other pets.
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().int().default(0),
  }),
});

const prices = defineCollection({
  loader: file('src/content/prices.yaml'),
  schema: z.object({
    service: z.string(),
    price: z.string(),
    notes: z.string().optional(),
    category: z.enum(['main', 'extra']).default('main'),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    pets: z.string().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  loader: file('src/content/faq.yaml'),
  schema: z.object({
    question: z.string(),
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

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { settings, pages, services, prices, testimonials, faq, sidebar, news };
