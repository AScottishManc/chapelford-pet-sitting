# Chapelford Pet Sitting

Website for Chapelford Pet Sitting, built with [Astro](https://astro.build) as a static site.

Project plan and issues: [Linear](https://linear.app/mike-dh/project/chapelford-pet-sitting-6ba9069654da/overview)

## Running locally

Requires Node.js 22.22 or later (the version is pinned in `.nvmrc`).

```sh
nvm use          # switch to the project's Node version
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Local dev server with live reload                |
| `npm run check`   | Type-check pages and content                     |
| `npm run build`   | Check, then build the site to `dist/`            |
| `npm run preview` | Serve the built `dist/` folder to test it        |

## Where things live

```
src/
  content.config.ts   Content collections and their fields
  content/            All editable site content (Markdown and YAML)
    settings.yaml     Business name, phone, email, area covered
    pages/            Standalone pages (home, privacy, terms...)
    services/         Dogs, cats, other pets
    prices.yaml       Prices and extras
    testimonials/     One file per testimonial
    faq.yaml          Questions and answers
    news/             One file per news post
  layouts/            Shared page shell
  pages/              Routes (one file per URL)
public/               Files served as-is (images, favicon)
```

Content is kept separate from code so the owner can edit it through Pages CMS.
