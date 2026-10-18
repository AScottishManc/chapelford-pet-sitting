# Brand: fonts and colours

The look decided for the redesign (18 October 2026, Linear MIK-28): calm and mature, with a plain off-white cream background, no script or handwritten fonts, and subdued colours taken from the logo. Revisit here if the brand changes.

All values live in `src/styles/abstracts/_variables.scss`; change them there and the whole site follows.

## Fonts

| Use | Font | Weights |
| --- | --- | --- |
| Headings | Lato | 700 (also 300, 400 loaded) |
| Body text | Open Sans | variable, 300–800, with italic |

Both are self-hosted with [Fontsource](https://fontsource.org/) (`@fontsource/lato`, `@fontsource-variable/open-sans`), so visitors' browsers never contact Google. They're loaded once in `src/layouts/BaseLayout.astro`.

## Colours

| Role | Colour | Hex | Sass |
| --- | --- | --- | --- |
| Page background | Off-white cream | `#FFFEFC` | `colour('background')` |
| Cards | White | `#FFFFFF` | `colour('surface')` |
| Headings, links, focus, primary button | Navy | `#23395D` | `colour('heading')`, `colour('link')`, `colour('primary')` |
| Hover on links and primary button | Deep navy | `#1A2B47` | `colour('link-hover')`, `colour('primary-hover')` |
| Body text | Charcoal | `#4A4A4A` | `colour('text')` |
| Muted text | Grey | `#6B6E73` | `colour('text-muted')` |
| Borders | Warm light grey | `#E6E0D4` | `colour('border')` |
| Secondary button, highlights | Cat duck-egg | `#C1D9D9` | `colour('secondary')` |
| Accent | Dog apricot | `#FFCE71` | `colour('accent')` |
| Logo only | House grey | `#949599` | `colour('logo')` |

In Sass use the **role** (`colour('heading')`), not the raw colour, so a colour can change role in one place. The raw palette is available as `palette('navy')` if really needed.

## Rules

- **Apricot sparingly**, and only on navy (icons, highlights) or as a background behind navy text (badges, notices). Never as an icon or hover colour directly on cream: 1.4 : 1 contrast, close to invisible.
- **House grey is for the logo only.** It's too light for text on cream (2.8 : 1).
- **Hover states** pair a colour change with another cue (such as a thicker underline), never colour alone.
- **Cards** are white with the warm border or a soft shadow (`shadow('card')`); the cream is so close to white that cards are invisible without one.
- **Secondary buttons** (duck-egg) need a navy border or a white background behind them to show on cream.

## Buttons and states

| Element | Background | Text | Hover |
| --- | --- | --- | --- |
| Primary button | Navy `#23395D` | White | Deep navy `#1A2B47` |
| Secondary button | Duck-egg `#C1D9D9` (navy border) | Navy | |
| Link | — | Navy, underlined | Deep navy, thicker underline |
| Keyboard focus | — | 3px navy outline | |

## Contrast (WCAG)

| Pairing | Ratio | Level |
| --- | --- | --- |
| Navy on cream | 11.5 : 1 | AAA |
| Charcoal on cream | 8.8 : 1 | AAA |
| White on navy | 11.6 : 1 | AAA |
| Navy on duck-egg | 7.8 : 1 | AAA |
| Navy on apricot | 7.9 : 1 | AAA |
| Muted grey on cream / white | 5.1 : 1 / 5.1 : 1 | AA |

## Logo

- **House mark:** `src/assets/images/brand/house-mark.svg`, traced from the original logo in its three colours (house grey, dog apricot, cat duck-egg).
- **Name:** live text in navy, set in **Boogaloo** (free, SIL Open Font License; self-hosted). It stands in for Dom Casual, the original logo font, which is a commercial URW++ font needing a paid web licence.
- **Tagline:** no longer in the header.
- **Behaviour:** the header stays fixed at the top. The house mark is 45×45px on phones, 50×50px from tablet and 55×55px from small desktop, shrinking smoothly to 35×35px at every size once the page is scrolled. On phones only the house mark shows; on larger screens the name fades out on scroll.

## Still open

- Optional: buy a Dom Casual D web licence (URW++) and swap it in for Boogaloo. Don't use unlicensed copies from free-font sites.
