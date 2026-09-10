# Design System Templates

> A collection of brand-specific design templates. Each template captures the complete visual language of a brand — colors, typography, spacing, components, animations, and page patterns — in a tech-stack-agnostic format ready for AI agents.

## Available Templates

| Template | Brand | Style | Key Characteristics |
|----------|-------|-------|---------------------|
| [`templates/rumiku/`](./templates/rumiku/) | **Rumiku** | Dark cinematic, glassmorphism | Neon lime + electric purple, dark mode default, film grain, ambient glows, ASCII topographic background |
| [`templates/makeyo/`](./templates/makeyo/) | **Makeyo** | Colorful, flat, playful | 10 color schemes, Urbanist typography, 0px section gaps, sharp cards, 12px button radius, e-commerce focused |
| [`templates/rokupi/`](./templates/rokupi/) | **Rokupi** | Friendly, readable, retail | Vibrant blue and pink, Fredoka typography, left-aligned text, no shadows, 1.4 calculated leading |

## What is a Design Template?

A design template is a set of markdown documents that fully describe a brand's visual system:

| File | Description |
|------|-------------|
| `BRAND-CORE.md` | Brand identity: name, colors, fonts, platform |
| `00-OVERVIEW.md` | Brand summary, key characteristics, usage guide |
| `01-DESIGN-TOKENS.md` | Colors, typography, border radii, shadows, effects |
| `02-LAYOUT-AND-SPACING.md` | Page structure, container widths, grid spacing, section spacing |
| `03-COMPONENTS.md` | Component anatomy: buttons, cards, navbar, badges, footer |
| `04-ANIMATIONS.md` | Keyframe animations, transitions, scroll-reveal, hover effects |
| `05-PAGE-PATTERNS.md` | Page-level composition: section ordering, visual flow, design rules |

## Project Structure

```
DesignSystem/
├── README.md
├── skills/                          ← AI skills (shared across all templates)
│   └── bootstrap-project-design/
│       ├── SKILL.md
│       └── scripts/extract_colors.py
└── templates/                       ← Brand-specific design templates
    ├── rumiku/
    │   ├── BRAND-CORE.md
    │   ├── 00-OVERVIEW.md … 05-PAGE-PATTERNS.md
    └── makeyo/
        ├── BRAND-CORE.md
        └── 00-OVERVIEW.md … 05-PAGE-PATTERNS.md
```

## AI-Agent Ready

These templates are built to be used by AI coding agents (Claude Code, Cursor, GitHub Copilot, Antigravity, etc.). Drop a template folder into your project's root or `.agents/` directory and your AI agent will follow the design patterns automatically.

## How to Use a Template

1. **Choose a template** from the table above based on the visual style you want.
2. **Copy the template folder** into your new project's root or `.agents/` directory.
3. **Copy `skills/`** to your project's `.agents/skills/` folder for AI auto-discovery.
4. **Tell your AI agent**: "Apply the design system" or "Follow the design template."

## How to Add a New Template

To create a new brand template:

1. Create a new folder under `templates/` with the brand name (e.g., `templates/mybrand/`).
2. Create all 7 documents following the same structure as existing templates.
3. Extract design tokens, components, and patterns from the brand's production website or design files.
4. Include a `BRAND-CORE.md` with the brand's identity summary.
5. Add the new template to the table in this README.

## Template Comparison

| Feature | Rumiku | Makeyo | Rokupi |
|---------|--------|--------|--------|
| **Theme** | Dark mode default | Light + colorful | High contrast Light & Dark |
| **Font system** | 3 fonts (Outfit, Geist Sans, Geist Mono) | 1 font (Urbanist) | 1 font (Fredoka) |
| **Color approach** | 2 accent colors + semantic tokens | 10 switchable color schemes | 2 strong primary accents (Blue & Pink) |
| **Section spacing** | 128px (generous) | 0px (zero-gap, color-divided) | Generous padded block layout |
| **Card style** | Glassmorphism, rounded (44px) | Flat, sharp corners (0px) | Soft rounded (12px), flat |
| **Shadows** | Glow shadows, soft shadows | Almost none | None |
| **Visual effects** | Film grain, mesh gradients, ambient glows | None (flat design) | None (flat design) |
| **Button style** | Pill shape (rounded-full) | Soft rounded (12px) | Soft rounded (8-12px) |
| **Target use** | Landing pages, portfolios, SaaS | E-commerce, product stores | Retail, F&B, highly readable |
| **Animations** | Cinematic (1s+, scroll-reveal, parallax) | Quick & functional (200-600ms) | Fast, flat color transitions |
