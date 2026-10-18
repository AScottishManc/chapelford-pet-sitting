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
| `transition($properties...)` | Transitions with the default 0.3s ease-in-out; switched off for people who prefer reduced motion |
| `visually-hidden` / `@extend %accessibility-hidden` | Hide visually but keep for screen readers |
| `focus-ring` | The site's keyboard focus outline |
| `button-reset`, `list-reset` | Strip browser styles from buttons and lists |

### Breakpoints

Mobile first: write the phone styles first, then add wider screens with `above()`. Use `below()` only when a style must apply to small screens alone. Never write a media query by hand.

| Name | Width |
| --- | --- |
| `mobile` | 375px |
| `mobile-large` | 599px |
| `tablet` | 768px |
| `tablet-large` | 865px |
| `laptop` | 960px |
| `laptop-large` | 1100px |
| `desktop` | 1300px |
| `desktop-large` | 1440px |
| `max` | 1920px |

`above('tablet')` means 768px and wider; `below('tablet')` means narrower than 768px. These values were decided in 2024; see [2024-styling-decisions.md](2024-styling-decisions.md).

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

## Content

Editable content lives in `src/content/` (Markdown and YAML), separate from code. Its fields are defined in `src/content.config.ts`; see the README for where each type of content lives.
