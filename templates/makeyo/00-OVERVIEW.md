# Makeyo Design Preset

> Design preset for the Makeyo brand (makeyo.fr). A colorful, playful e-commerce design system built on Shopify Dawn, featuring multi-scheme color switching, Urbanist typography, and a toyetic aesthetic for 3D-printed products.

---

## Purpose

This preset captures the exact visual language of Makeyo — a French 3D printing brand that designs colorful, functional objects (PC cases, lamps, wearable accessories). The design system is vibrant and playful, using a **multi-color-scheme** approach where different page sections can use completely different color palettes (warm cream, vivid yellow, ocean blue, vibrant orange, lime green, dark mode).

### Key Design Characteristics

- **Multi-scheme color switching**: 10 distinct color schemes assignable per section
- **Single font system**: Urbanist for both headings and body (400/700)
- **Flat, shadow-free aesthetic**: No card shadows, no media shadows
- **Zero-gap sections**: 0px spacing between content sections for a seamless flow
- **Playful color palette**: Orange (#ff6128), Yellow (#ffcc00), Blue (#4693c6), Lime (#d8ff00)
- **Wide page**: 120rem (1920px) page width
- **Tight grid**: 8px desktop gaps, 4px mobile gaps
- **E-commerce focused**: Product cards, collection grids, cart integration

### What This Preset Defines

- Complete multi-scheme color system (10 color schemes)
- Typography scale and font configuration
- Spacing and grid values
- Component anatomy (product cards, buttons, badges, navigation)
- Animation and transition patterns
- Page composition patterns for e-commerce

### What This Preset Does NOT Define

- Specific product catalog or content
- Shopify Liquid template structure (implementation detail)
- Third-party app integrations
- Payment or checkout flows

---

## Files in This Preset

| File | Description |
|------|-------------|
| [`00-OVERVIEW.md`](./00-OVERVIEW.md) | This file. Preset index and brand summary. |
| [`01-DESIGN-TOKENS.md`](./01-DESIGN-TOKENS.md) | All design tokens: colors (10 schemes), typography, radii, shadows, effects. |
| [`02-LAYOUT-AND-SPACING.md`](./02-LAYOUT-AND-SPACING.md) | Page structure, grid spacing, section spacing, container widths. |
| [`03-COMPONENTS.md`](./03-COMPONENTS.md) | Component patterns: navbar, product cards, buttons, badges, footer. |
| [`04-ANIMATIONS.md`](./04-ANIMATIONS.md) | Scroll-reveal animations, transitions, hover effects. |
| [`05-PAGE-PATTERNS.md`](./05-PAGE-PATTERNS.md) | Page-level composition: section flow, color scheme assignment. |

---

## How to Use

1. **Copy this folder** into your new e-commerce project.
2. **Select your color schemes**: Choose which of the 10 color schemes to use for each section of your site.
3. **Follow the component patterns** in `03-COMPONENTS.md` for product cards, buttons, and navigation.
4. **Apply the layout rules** from `02-LAYOUT-AND-SPACING.md` for grid and spacing consistency.
5. **Use the animation patterns** from `04-ANIMATIONS.md` for polished interactions.

---

## Adapting This Preset

- **Colors**: You can use any subset of the 10 color schemes, or modify the RGB values while keeping the variable naming structure.
- **Fonts**: Urbanist is used for both heading and body. Swap in any Google Font while keeping the weight pairings (400 regular, 700 bold).
- **Radius scale**: Buttons use 12px radius. Adjust proportionally if desired.
- **Page width**: The default 120rem (1920px) is very wide. Reduce to 80rem for a more contained layout.
