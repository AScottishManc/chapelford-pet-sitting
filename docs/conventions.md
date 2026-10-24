# Code conventions

How the site's styles and components are organised. Read this before adding or changing a component.

## Styles: Sass

All styles are written in Sass (`.scss`). Astro compiles them; there is no separate build step.

```
src/styles/
  main.scss            Site-wide entry file, loaded once by BaseLayout
  abstracts/           Variables, functions, mixins (no CSS output)
    _variables.scss    Design tokens: colours, fonts, type scale, spacing, breakpoints...
    _functions.scss    colour(), space(), font-size(), radius(), shadow(), z(), rem()...
    _mixins.scss       above(), below(), transition(), visually-hidden, focus-ring...
  base/                Reset, tokens as CSS custom properties, page defaults, typography
  layout/              Container and 12-column grid
  legacy/_legacy.scss  The old site's styles, emptied as components are converted
```

### Shared variables and mixins are automatic

Every Sass file loaded by a page or component already has the abstracts available, so a component file can use them straight away:

```scss
.price-badge {
  padding: space('sm');
  color: colour('on-primary');
  background-color: colour('primary');
  border-radius: radius('pill');
  @include transition(background-color);

  &:hover {
    background-color: colour('primary-hover');
  }

  @include above('tablet') {
    float: right;
  }
}
```

Files **inside `src/styles/`** that need them must add `@use 'abstracts' as *;` at the top, because the automatic import only applies to files loaded directly by pages and components.

### Design tokens

Never type a colour, font size, spacing value, radius or shadow directly into a component. Use the functions, which read the values from `_variables.scss` and stop the build with a helpful message if a name is mistyped:

| Function | Example | Gives |
| --- | --- | --- |
| `colour($role)` | `colour('heading')` | Navy `#23395d` |
| `palette($name)` | `palette('duck-egg')` | Raw palette colour (prefer `colour()`) |
| `space($size)` | `space('md')` | `1rem` (xxs, xs, sm, md, lg, xl, xxl, xxxl) |
| `font-size($size)` | `font-size('xl')` | `1.5rem` (xs, sm, base, md, lg, xl, xxl, xxxl, display) |
| `font-weight($name)` | `font-weight('semi')` | `600` (light, regular, semi, bold) |
| `radius($size)` | `radius('md')` | `8px` (sm, md, lg, pill) |
| `shadow($name)` | `shadow('card')` | Soft card shadow (card, raised) |
| `z($layer)` | `z('header')` | `100` (base, header, menu, overlay, skip-link) |
| `rem($px)` | `rem(24px)` | `1.5rem` |

Fonts: `$font-heading` (Lato) and `$font-body` (Open Sans). Colour roles, fonts and the reasons behind them are in [brand.md](brand.md).

### Mixins

| Mixin | Use |
| --- | --- |
| `above($breakpoint)` / `below($breakpoint)` | Media queries (see below) |
| `by-breakpoint($properties, $map)` | Set a property that steps up at breakpoints, e.g. `by-breakpoint((width, height), $logo-sizes)` |
| `transition($properties...)` | Transitions with the default 0.3s ease-in-out; switched off for people who prefer reduced motion |
| `visually-hidden` / `@extend %accessibility-hidden` | Hide visually but keep for screen readers |
| `focus-ring` | The site's keyboard focus outline |
| `button-reset`, `list-reset` | Strip browser styles from buttons and lists |

### Breakpoints

Mobile first: write the phone styles first, then add wider screens with `above()`. Use `below()` only when a style must apply to small screens alone. Never write a media query by hand.

| Name | Width |
| --- | --- |
| `mobile-large` | 425px |
| `tablet` | 768px |
| `desktop-small` | 1024px |
| `desktop` | 1440px |

`above('tablet')` means 768px and wider; `below('tablet')` means narrower than 768px.

## Layout and grid

The page sits in a **container**: full width with 20px side padding on phones, 30px from tablet, and never wider than **1440px**.

Inside it is a **grid** whose column count grows with the screen:

| From | Columns | Gap |
| --- | --- | --- |
| Phones | 4 | 16px |
| `tablet` (768px) | 8 | 24px |
| `desktop-small` (1024px) | 12 | 32px |

There's no maximum text width on the container. A comfortable line length comes from how many columns the content spans (e.g. rich text across 6 of 12 columns).

### Using the grid in markup

```html
<div class="grid">
  <div class="grid__col--4 grid__col--tablet-4 grid__col--desktop-small-8">Main</div>
  <div class="grid__col--4 grid__col--tablet-4 grid__col--desktop-small-4">Aside</div>
</div>
```

Children of `.grid` are full width unless given a span. Span classes exist for each breakpoint: `grid__col--{1-4}`, `grid__col--mobile-large-{1-4}`, `grid__col--tablet-{1-8}`, `grid__col--desktop-small-{1-12}`, `grid__col--desktop-{1-12}`.

### Using the grid in a component's Sass

Prefer the mixins, so markup stays clean:

```scss
.services {
  @include grid;

  &__item {
    @include above('tablet') {
      @include grid-col-layout(auto, 4);
    }
  }
}
```

| Mixin | Use |
| --- | --- |
| `container` | Width, side padding and 1440px maximum |
| `grid` | The responsive 4/8/12-column grid |
| `grid-col-layout($start, $span)` | Place an item, e.g. `(1, 6)` or `(auto, 3)` |
| `grid-row-layout($start, $span, $gap)` | Place an item across rows |

### Page layout

From `desktop-small`, page content sits in the **centre 10 of the 12 columns** (columns 2–11). Pages with a sidebar split those 10 columns: content 7, sidebar 3. Pages without one (e.g. the home page, `sidebar={[]}` on `BaseLayout`) use all 10 for content. On tablet the content is full width with the sidebar below; on phones everything is full width.

The split is set at the top of `src/styles/layout/_page.scss`.

### Checking styles

Run `npm run lint:styles` to check all Sass files with Stylelint before committing.

## Components

Each component lives in its own folder with its styles next to it:

```
src/components/
  Header/
    Header.astro
    _header.scss
```

The component loads its own styles in its frontmatter:

```astro
---
import './_header.scss';
---
```

### BEM naming

Every component is one BEM **block**. Class names follow `block__element--modifier`:

| Part | Example | Meaning |
| --- | --- | --- |
| Block | `.header` | The component itself |
| Element | `.header__logo` | A part of the component |
| Modifier | `.header--compact`, `.header__logo--small` | A variation or state |

Rules:

- One block per component, named after the component in lower case with hyphens (`PriceBadge.astro` → `.price-badge`).
- Style with classes only: no element selectors (`h1`, `a`) or ids inside components. Base element styles belong in `src/styles/base/`.
- No nesting elements in class names: `.header__nav-link`, not `.header__nav__link`.
- A modifier is always used together with its base class: `class="header header--compact"`.
- Use modifiers for variations (`--left`, `--right`) and states (`--open`, `--active`). For JavaScript-driven states that also need accessibility, prefer the ARIA attribute (`[aria-expanded="true"]`) and style it.
- Components don't set their own outer margins or position on the page; the page layout or grid does.

### Adding or converting a component

1. Create `src/components/Name/Name.astro` and `_name.scss`.
2. Write the markup with BEM classes and the styles in `_name.scss`, using the abstracts.
3. Replace the old markup in pages/layouts with the component.
4. Delete the matching rules from `src/styles/legacy/_legacy.scss`.
5. Check the page at phone, tablet and desktop widths.

## Icons

Icons are SVG files in `src/icons/` (sources and licences in its README), used through the `Icon` component:

```astro
---
import Icon from '../Icon/Icon.astro';
---
<Icon name="phone" />                  <!-- decorative: hidden from screen readers -->
<Icon name="facebook" label="Facebook" />  <!-- meaningful on its own: give it a label -->
```

Icons are 1em square and use `currentColor`, so set their size with `font-size` and their colour with `color` on the parent. Available: `arrow-up`, `chevron-down`, `close`, `download`, `email`, `facebook`, `menu`, `paw-cat`, `paw-dog`, `phone`.

## Content

Editable content lives in `src/content/` (Markdown and YAML), separate from code. Its fields are defined in `src/content.config.ts`; see the README for where each type of content lives.
