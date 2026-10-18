// @ts-check
import { defineConfig } from 'astro/config';

// Static site: `npm run build` outputs plain HTML/CSS to dist/, which can be
// served by any host (see MIK-18 for the hosting decision).
export default defineConfig({
  output: 'static',
  markdown: {
    // Keep quotes and dashes exactly as typed, as on the old site
    smartypants: false,
    // Don't turn plain "www." text into links; the old site didn't
    gfm: false,
  },
});
