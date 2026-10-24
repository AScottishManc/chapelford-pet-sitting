import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

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
    hours: z.string().optional(),
    facebook: z.url().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      heading: z.string().optional(),
      description: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      sidebar: z.array(z.string()).default(['recent-news']),
      outro: z.array(z.string()).default([]),
      iconList: z
        .object({
          title: z.string(),
          items: z.array(z.string()),
          icon: z.enum(['paw-cat', 'paw-dog', 'paw-rabbit']).default('paw-cat'),
        })
        .optional(),
      ctaBlock: z
        .object({
          title: z.string(),
          items: z.array(
            z.object({
              label: z.string(),
              href: z.string(),
              icon: z.enum(['paw-cat', 'paw-dog', 'paw-rabbit']),
              theme: z.enum(['navy', 'duck-egg', 'apricot', 'stone']).default('navy'),
            }),
          ),
        })
        .optional(),
    }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      order: z.number().int().default(0),
      sidebar: z.array(z.string()).default(['recent-news']),
      quote: z.string().optional(),
      image: image(),
      imageAlt: z.string(),
      imagePosition: z.enum(['left', 'right']).default('right'),
      services: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          price: z.string(),
          priceMarker: z.string().optional(),
          priceUnit: z.string().optional(),
          note: z.string().optional(),
          summary: z.array(z.string()).default([]),
          footnote: z.string().optional(),
          includes: z.array(z.string()).default([]),
        }),
      ),
      outro: z.array(z.string()).default([]),
    }),
});

// Prices come from the service pages; this only sets the table layout
const priceTable = defineCollection({
  loader: file('src/content/price-table.yaml'),
  schema: z.object({
    heading: z.string(),
    order: z.number().int(),
    rows: z.array(
      z.union([
        z.object({
          service: z.string(),
          marker: z.string().optional(),
          time: z.string(),
        }),
        z.object({
          note: z.string(),
          bold: z.boolean().default(true),
        }),
      ]),
    ),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/testimonials' }),
  schema: ({ image }) =>
    z.object({
      number: z.number().int(),
      name: z.string(),
      caption: z.string().optional(),
      image: image(),
      imageAlt: z.string().optional(),
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
  schema: ({ image }) =>
    z.object({
      number: z.number().int(),
      title: z.string(),
      date: z.coerce.date(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      imagePosition: z.enum(['left', 'right']).default('left'),
      imageWidth: z.number().int().optional(),
      imageHeight: z.number().int().optional(),
    }),
});

const links = defineCollection({
  loader: file('src/content/links.yaml'),
  schema: ({ image }) =>
    z.object({
      order: z.number().int(),
      name: z.string(),
      url: z.url(),
      logo: image(),
      logoPosition: z.enum(['left', 'right']).default('left'),
      logoWidth: z.number().int(),
      logoHeight: z.number().int(),
      description: z.string(),
    }),
});

export const collections = { settings, pages, services, priceTable, testimonials, faq, sidebar, news, links };
