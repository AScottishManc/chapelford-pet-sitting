# 2024 styling decisions

Styling decided during an earlier rebuild attempt (React + Vite, April–May 2024), recovered from the `task/cps2-solution-set-up` branch of the archived repo [AScottishManc/chapelford-pet-sitting-old](https://github.com/AScottishManc/chapelford-pet-sitting-old). Recorded here so they are kept with the project.

Where each decision is used in this project is noted in the right-hand column.

## Fonts

| Use | Font | Source |
| --- | --- | --- |
| Headings | Lato | Google Fonts |
| Body text | Open Sans | Google Fonts |

Weights: light 300, regular 400, semi-bold 600, bold 700. **Applied in MIK-30** (self-hosted; see [brand.md](brand.md)).

## Colours

Only the greys were defined. The file had a `// Primary` heading with no colours under it, so brand colours are still to be chosen (MIK-28).

| Name | Value | Note |
| --- | --- | --- |
| `$black` | `#000` | |
| `$grey-100` | `#152d38` | Dark |
| `$grey-80` | `#61686b` | |
| `$grey-60` | `#9ca3a5` | |
| `$grey-40` | `#c4c8ca` | |
| `$grey-05` | `#e2e4e4` | |
| `$grey` | `#f2f3f3` | Light |
| `$white` | `#fff` | |

**Retired (18 Oct 2026):** replaced by the redesign palette in [brand.md](brand.md).

## Breakpoints

| Name | Width |
| --- | --- |
| mobile | 375px |
| mobile-large | 599px |
| tablet | 768px |
| tablet-large | 865px |
| laptop | 960px |
| laptop-large | 1100px |
| desktop | 1300px |
| desktop-large | 1440px |
| max | 1920px |

**Replaced (18 Oct 2026):** mobile-large 425, tablet 768, desktop-small 1024, desktop 1440. See [conventions.md](conventions.md).

## Container (page width and side padding)

| From | Side padding | Max width |
| --- | --- | --- |
| mobile, mobile-large | 20px | none |
| tablet to laptop-large | 30px | none |
| desktop | 30px | 1240px |
| desktop-large | 0 | 1240px |

**Replaced (18 Oct 2026):** maximum width 1440px; side padding 20px, then 30px from tablet. Line length comes from the columns content spans, not the container.

## Grid

4 columns on small screens, 8 on medium, 12 on large. Applied in MIK-31 (8 from tablet, 12 from desktop-small).

## Sass helpers

| Helper | Purpose | Here |
| --- | --- | --- |
| `above($breakpoint)` / `below($breakpoint)` | Media queries by breakpoint name | MIK-29 |
| `map-deep-get($map, $keys...)` | Read nested map values | MIK-29 |
| `grid-col-layout($start, $span)` / `grid-row-layout(...)` | Place an item on the grid | MIK-31 |
| `container` | Page width and padding per breakpoint | MIK-31 |
| `transition(...)` | Transitions with default duration/easing (0.3s ease-in-out) | MIK-30 (done) |
| `%accessibility-hidden` | Hide visually but keep for screen readers | MIK-30 (done, plus a `visually-hidden` mixin) |

The 2024 versions of the grid, container and transition helpers had bugs (they would not compile), so they are rewritten here rather than copied; names and values are kept.

## Tooling

Stylelint with the `stylelint-scss` plugin and the same three rules. Applied in MIK-29 (`.stylelintrc.json`, `npm run lint:styles`).

## Components

Header, footer and navigation had only empty or temporary styles; nothing to carry over.
