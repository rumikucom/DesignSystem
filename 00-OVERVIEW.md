# Universal Design System Reference

> A tech-stack-agnostic design system extracted from a production website. Drop these files into any project's root or `.agents/` directory and any AI coding agent will follow these design patterns automatically.

---

## Purpose

This design system captures the exact visual language, spacing rules, component shapes, animation timing, and layout patterns from a reference production site. It is designed to be **universal** — meaning it works with any tech stack (React, Vue, Svelte, vanilla HTML/CSS, Flutter, etc.) and any CSS methodology (Tailwind, vanilla CSS, SCSS, CSS-in-JS, etc.).

The COLOR VALUES, FONT NAMES, and BRAND CONTENT in these documents are **example reference values** taken from the original site. They demonstrate the system's structure. **Replace them with your own brand's values.**

### What IS Universal (Keep These)

- Token naming conventions and semantic structure
- Spacing scale and ratios
- Border radius scale and ratios
- Component shapes and anatomies
- Layout patterns and container widths
- Animation timing, easing curves, and interaction patterns
- Visual layering approach (backgrounds, overlays, glow effects)
- Typography scale relationships (size ratios between headings, body, labels)
- Shadow system structure (glow, soft, ambient)
- Glassmorphism recipe and mesh gradient pattern
- Film grain overlay technique
- Scroll-reveal animation patterns
- Navbar scroll-transition behavior
- Tactile button interaction model
- Section spacing rhythm

### What is NOT Universal (Customize These)

- Specific hex color values
- Font family names
- Brand name, logos, and copy
- Number of sections or pages
- Specific content and imagery
- ASCII character set (decorative choice)
- Social media icons and links

---

## Files in This System

| File | Description |
|------|-------------|
| [`00-OVERVIEW.md`](./00-OVERVIEW.md) | This file. System index and customization guide. |
| [`01-DESIGN-TOKENS.md`](./01-DESIGN-TOKENS.md) | All design tokens: colors, radii, typography, shadows, effects. |
| [`02-LAYOUT-AND-SPACING.md`](./02-LAYOUT-AND-SPACING.md) | Page structure, container widths, section spacing, grid patterns. |
| [`03-COMPONENTS.md`](./03-COMPONENTS.md) | Component-level patterns: navbar, cards, buttons, badges, footer. |
| [`04-ANIMATIONS.md`](./04-ANIMATIONS.md) | All keyframe animations, transitions, scroll-reveal, hover effects. |
| [`05-PAGE-PATTERNS.md`](./05-PAGE-PATTERNS.md) | Page-level composition: section ordering, anatomy, universal rules. |

---

## How to Use

1. **Copy this folder** into your new project. Move the `skills/` subdirectory into your project's `.agents/skills/` folder so your AI agent automatically discovers the design skills.
2. **Initialize Brand Identity**: Ask your AI agent to apply the universal design system. The agent will use its `bootstrap-project-design` skill to ask for your logo, extract colors, and generate project-specific `BRAND-CORE.md` and `DESIGN-TOKENS.md` files in your project root.
3. **Follow the component patterns** in `03-COMPONENTS.md` when building UI elements.
4. **Follow the layout rules** in `02-LAYOUT-AND-SPACING.md` for consistent page structure.
5. **Apply the animation patterns** from `04-ANIMATIONS.md` for polished micro-interactions.

---

## How to Customize

### Generating Project-Specific Colors and Fonts

Instead of manually swapping colors and fonts, **let your AI agent do it automatically**. 
When you initialize a new project, your AI agent will use the `bootstrap-project-design` skill to:
1. Ask you for your brand's logo image.
2. Automatically extract the primary and secondary colors using vision analysis.
3. Ask for your brand name and typography preferences.
4. Generate project-specific `BRAND-CORE.md` and `DESIGN-TOKENS.md` files that override the universal reference values.

If you ever need to adjust them manually later:
- **Colors:** The color system uses semantic names (`--primary`, `--secondary`, `--background`). Keep the naming structure. Always define both light and dark mode variants.
- **Fonts:** Keep the same weight pairings: `font-black` (900) for hero headlines, `font-bold` (700) for sub-headings/CTAs, `font-medium` (500) for body emphasis, `font-light` (300) for card descriptions.

### Adjusting the Radius Scale

The base radius is `1.25rem` (20px). All other radii are multiplied from this base.

- To make the design **sharper**: reduce the base (e.g., `0.75rem` = 12px)
- To make the design **softer**: increase the base (e.g., `1.5rem` = 24px)
- The multiplier ratios (0.6x, 0.8x, 1.0x, 1.4x, 1.8x, 2.2x, 2.6x) stay the same

### Adjusting Section Spacing

The reference uses `py-32` (128px) for major content sections. Scale this up or down proportionally.

Key principle: **Section spacing should always feel generous and never cramped.** When in doubt, add more space, not less.

### Adapting to Different Tech Stacks

| Tech Stack | Token Format | Component System |
|-----------|-------------|-----------------|
| **Tailwind CSS** | `@theme` config or CSS variables | Utility classes matching the reference |
| **Vanilla CSS** | CSS custom properties (`:root {}`) | BEM or utility classes |
| **SCSS/Sass** | SCSS variables (`$primary: ...`) | Mixins and component classes |
| **CSS-in-JS** | Theme object (`{ colors: { primary: ... } }`) | Styled components |
| **Design Tokens JSON** | W3C Design Tokens format | Consumed by any tool |

### Adapting to Different Website Types

This system works for:
- **Landing pages** — Use all patterns as documented
- **Marketing sites** — Add more section types following the same spacing/container rules
- **Dashboards** — Keep tokens, buttons, cards, and navbar; adjust section spacing
- **E-commerce** — Use card patterns for products, CTA patterns for promotions
- **Portfolios** — Use hero + card grid patterns for case studies
- **SaaS apps** — Use glassmorphism cards for feature panels, stat cards for metrics
- **Blogs** — Use typography scale for article hierarchy, card grid for post listings
