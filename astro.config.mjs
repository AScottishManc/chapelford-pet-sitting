// @ts-check
import { defineConfig } from 'astro/config';

// Static site: `npm run build` outputs plain HTML/CSS to dist/, which can be
// served by any host (see MIK-18 for the hosting decision).
export default defineConfig({
  output: 'static',
});
