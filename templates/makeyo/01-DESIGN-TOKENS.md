# Design Tokens — Makeyo

> All visual primitives: color schemes, typography, border radii, shadows, and effects.
>
> Makeyo uses a **multi-scheme** color system where different sections of the page can use entirely different color palettes. Each scheme is a complete set of coordinated colors.

---

## Color System

Makeyo uses CSS custom properties with **RGB tuple values** (e.g., `244,241,236`). Colors are applied via `rgb(var(--color-name))` or `rgba(var(--color-name), opacity)`. This enables per-scheme theming and opacity control.

### Scheme 1 — Warm Cream (Default)

The primary brand surface. Warm, neutral, premium.

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-background` | `244,241,236` | `#f4f1ec` | Page/section background |
| `--color-foreground` | `11,11,11` | `#0b0b0b` | Primary text (at 75% opacity) |
| `--color-background-contrast` | `197,181,155` | `#c5b59b` | Contrast/emphasis background |
| `--color-shadow` | `18,18,18` | `#121212` | Shadow color |
| `--color-button` | `0,0,0` | `#000000` | Button background |
| `--color-button-text` | `244,241,236` | `#f4f1ec` | Button text |
| `--color-secondary-button` | `244,241,236` | `#f4f1ec` | Secondary button background |
| `--color-secondary-button-text` | `31,31,31` | `#1f1f1f` | Secondary button text |
| `--color-link` | `31,31,31` | `#1f1f1f` | Link color |
| `--color-badge-foreground` | `11,11,11` | `#0b0b0b` | Badge text |
| `--color-badge-background` | `244,241,236` | `#f4f1ec` | Badge surface |
| `--color-badge-border` | `11,11,11` | `#0b0b0b` | Badge border |

---

### Scheme 2 — Warm Gray

A slightly darker neutral for contrast sections.

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-background` | `236,232,226` | `#ece8e2` | Section background |
| `--color-foreground` | `18,18,18` | `#121212` | Text |
| `--color-background-contrast` | `186,171,149` | `#baab95` | Contrast background |
| `--color-button` | `18,18,18` | `#121212` | Button background |
| `--color-button-text` | `249,249,249` | `#f9f9f9` | Button text |
| `--color-secondary-button` | `236,232,226` | `#ece8e2` | Secondary button background |
| `--color-secondary-button-text` | `18,18,18` | `#121212` | Secondary button text |
| `--color-link` | `18,18,18` | `#121212` | Link color |

---

### Scheme 3 — Vivid Yellow

Bold yellow accent sections for high energy and attention.

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-background` | `255,204,0` | `#ffcc00` | Section background |
| `--color-foreground` | `31,33,37` | `#1f2125` | Text (dark on yellow) |
| `--color-background-contrast` | `128,102,0` | `#806600` | Contrast background |
| `--color-button` | `255,255,255` | `#ffffff` | Button background |
| `--color-button-text` | `0,0,0` | `#000000` | Button text |
| `--color-secondary-button` | `255,204,0` | `#ffcc00` | Secondary button background |
| `--color-secondary-button-text` | `255,255,255` | `#ffffff` | Secondary button text |
| `--color-link` | `255,255,255` | `#ffffff` | Link color |
| `--color-badge-foreground` | `31,33,37` | `#1f2125` | Badge text |
| `--color-badge-background` | `255,204,0` | `#ffcc00` | Badge surface |
| `--color-badge-border` | `31,33,37` | `#1f2125` | Badge border |

---

### Scheme 4 — Ocean Blue

Cool blue for feature highlights and trust-building sections.

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-background` | `70,147,198` | `#4693c6` | Section background |
| `--color-foreground` | `255,255,255` | `#ffffff` | Text (white on blue) |
| `--color-background-contrast` | `33,78,107` | `#214e6b` | Contrast background |
| `--color-button` | `255,255,255` | `#ffffff` | Button background |
| `--color-button-text` | `18,18,18` | `#121212` | Button text |
| `--color-secondary-button` | `70,147,198` | `#4693c6` | Secondary button background |
| `--color-secondary-button-text` | `255,255,255` | `#ffffff` | Secondary button text |
| `--color-link` | `255,255,255` | `#ffffff` | Link color |
| `--color-badge-foreground` | `255,255,255` | `#ffffff` | Badge text |
| `--color-badge-background` | `70,147,198` | `#4693c6` | Badge surface |
| `--color-badge-border` | `255,255,255` | `#ffffff` | Badge border |

---

### Scheme 5 — Yellow + Blue Text

Yellow background with blue-tinted button text for playful contrast.

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-background` | `255,204,0` | `#ffcc00` | Section background |
| `--color-foreground` | `255,255,255` | `#ffffff` | Text |
| `--color-background-contrast` | `128,102,0` | `#806600` | Contrast background |
| `--color-button` | `255,255,255` | `#ffffff` | Button background |
| `--color-button-text` | `51,79,180` | `#334fb4` | Button text (blue) |
| `--color-secondary-button` | `255,204,0` | `#ffcc00` | Secondary button background |
| `--color-secondary-button-text` | `255,255,255` | `#ffffff` | Secondary button text |
| `--color-link` | `255,255,255` | `#ffffff` | Link color |
| `--color-badge-foreground` | `255,255,255` | `#ffffff` | Badge text |
| `--color-badge-background` | `255,204,0` | `#ffcc00` | Badge surface |
| `--color-badge-border` | `255,255,255` | `#ffffff` | Badge border |

---

### Scheme: Dark

Dark mode with high contrast.

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-background` | `25,25,25` | `#191919` | Dark background |
| `--color-foreground` | `255,255,255` | `#ffffff` | White text |
| `--color-background-contrast` | `153,153,153` | `#999999` | Mid-gray contrast |
| `--color-shadow` | `18,18,18` | `#121212` | Shadow color |
| `--color-button` | `255,255,255` | `#ffffff` | White button |
| `--color-button-text` | `31,31,31` | `#1f1f1f` | Dark button text |
| `--color-secondary-button` | `25,25,25` | `#191919` | Dark secondary button |
| `--color-secondary-button-text` | `31,31,31` | `#1f1f1f` | Dark secondary text |
| `--color-link` | `31,31,31` | `#1f1f1f` | Link color |
| `--color-badge-foreground` | `255,255,255` | `#ffffff` | Badge text |
| `--color-badge-background` | `25,25,25` | `#191919` | Badge surface |
| `--color-badge-border` | `255,255,255` | `#ffffff` | Badge border |

---

### Scheme: Light + Orange CTA

Neutral light surface with vibrant orange call-to-action buttons.

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-background` | `249,249,249` | `#f9f9f9` | Light background |
| `--color-foreground` | `83,83,83` | `#535353` | Medium gray text |
| `--color-background-contrast` | `185,185,185` | `#b9b9b9` | Light contrast |
| `--color-shadow` | `83,83,83` | `#535353` | Shadow color |
| `--color-button` | `255,97,40` | `#ff6128` | Orange CTA button |
| `--color-button-text` | `255,255,255` | `#ffffff` | White button text |
| `--color-secondary-button` | `249,249,249` | `#f9f9f9` | Light secondary button |
| `--color-secondary-button-text` | `83,83,83` | `#535353` | Gray secondary text |
| `--color-link` | `83,83,83` | `#535353` | Gray link color |
| `--color-badge-foreground` | `83,83,83` | `#535353` | Badge text |
| `--color-badge-background` | `249,249,249` | `#f9f9f9` | Badge surface |
| `--color-badge-border` | `83,83,83` | `#535353` | Badge border |

---

### Scheme: Vibrant Orange

Full orange immersion for hero sections and CTAs.

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-background` | `255,97,40` | `#ff6128` | Orange background |
| `--color-foreground` | `255,255,255` | `#ffffff` | White text |
| `--color-background-contrast` | `167,44,0` | `#a72c00` | Dark orange contrast |
| `--color-shadow` | `255,255,255` | `#ffffff` | White shadow |
| `--color-button` | `255,255,255` | `#ffffff` | White button |
| `--color-button-text` | `255,97,40` | `#ff6128` | Orange button text |
| `--color-secondary-button` | `255,97,40` | `#ff6128` | Orange secondary button |
| `--color-secondary-button-text` | `255,255,255` | `#ffffff` | White secondary text |
| `--color-link` | `255,255,255` | `#ffffff` | White link |
| `--color-badge-foreground` | `255,255,255` | `#ffffff` | Badge text |
| `--color-badge-background` | `255,97,40` | `#ff6128` | Badge surface |
| `--color-badge-border` | `255,255,255` | `#ffffff` | Badge border |

---

### Scheme: Lime Green

Energetic lime for playful, attention-grabbing sections.

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-background` | `216,255,0` | `#d8ff00` | Lime background |
| `--color-foreground` | `11,11,11` | `#0b0b0b` | Dark text |
| `--color-background-contrast` | `108,128,0` | `#6c8000` | Olive contrast |
| `--color-shadow` | `18,18,18` | `#121212` | Shadow color |
| `--color-button` | `0,0,0` | `#000000` | Black button |
| `--color-button-text` | `216,255,0` | `#d8ff00` | Lime button text |
| `--color-secondary-button` | `216,255,0` | `#d8ff00` | Lime secondary button |
| `--color-secondary-button-text` | `31,31,31` | `#1f1f1f` | Dark secondary text |
| `--color-link` | `31,31,31` | `#1f1f1f` | Dark link |
| `--color-badge-foreground` | `11,11,11` | `#0b0b0b` | Badge text |
| `--color-badge-background` | `216,255,0` | `#d8ff00` | Badge surface |
| `--color-badge-border` | `11,11,11` | `#0b0b0b` | Badge border |

---

### Scheme: Dark + Neon Yellow

Dark background with neon yellow accent buttons.

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-background` | `25,25,25` | `#191919` | Dark background |
| `--color-foreground` | `255,255,255` | `#ffffff` | White text |
| `--color-background-contrast` | `153,153,153` | `#999999` | Mid-gray contrast |
| `--color-shadow` | `18,18,18` | `#121212` | Shadow color |
| `--color-button` | `245,255,0` | `#f5ff00` | Neon yellow button |
| `--color-button-text` | `25,25,25` | `#191919` | Dark button text |
| `--color-secondary-button` | `25,25,25` | `#191919` | Dark secondary button |
| `--color-secondary-button-text` | `25,25,25` | `#191919` | Dark secondary text |
| `--color-link` | `25,25,25` | `#191919` | Link color |
| `--color-badge-foreground` | `255,255,255` | `#ffffff` | Badge text |
| `--color-badge-background` | `25,25,25` | `#191919` | Badge surface |
| `--color-badge-border` | `255,255,255` | `#ffffff` | Badge border |

---

### Color Usage Rules

- All foreground text is rendered at **75% opacity** by default: `rgba(var(--color-foreground), 0.75)`
- Background uses full opacity: `rgb(var(--color-background))`
- Each section of the page can be assigned a different color scheme class (e.g., `color-scheme-1`, `color-scheme-3`)
- Buttons use dedicated `--color-button` / `--color-button-text` tokens — they don't share foreground/background
- Secondary buttons invert: they use the section background as their fill
- Badges have their own foreground/background/border tokens for independent styling
- Shadow color is scheme-aware — use `rgba(var(--color-shadow), opacity)` for consistent depth

---

## Border Radius Scale

| Element | Radius | Notes |
|---------|--------|-------|
| Buttons | `12px` | Slightly rounded, not pill |
| Button outset | `13px` | 1px larger for border offset |
| Badges | `4rem` (64px) | Fully rounded pill shape |
| Variant pills | `40px` | Pill shape for product options |
| Inputs | `0px` | Sharp corners |
| Media (images) | `0px` | No rounding on product images |
| Product cards | `0px` | Sharp card edges |
| Collection cards | `0px` | Sharp card edges |
| Blog cards | `0px` | Sharp card edges |
| Popups | `0px` | Sharp popup corners |
| Text boxes | `0px` | Sharp corners |

### Radius Design Philosophy

Makeyo uses a **contrast radius strategy**: interactive elements (buttons, badges, pills) are rounded for tactile affordance, while content containers (cards, images, inputs) use sharp 0px corners for a clean, graphic design aesthetic. This creates a visual hierarchy where rounded = clickable, sharp = content.

---

## Typography

### Font Stack

Makeyo uses a **single font family** for both headings and body:

| Role | Font Family | CSS Variable | Weights | Style |
|------|------------|-------------|---------|-------|
| Body | Urbanist | `--font-body-family` | 400 (regular), 700 (bold) | normal, italic |
| Heading | Urbanist | `--font-heading-family` | 400 (regular) | normal |

### Typography Scale

| Element | Size | Line Height | Letter Spacing | Weight |
|---------|------|-------------|---------------|--------|
| Body (mobile) | `1.5rem` (15px) | `calc(1 + 0.8 / 1.0)` = 1.8 | `0.06rem` | 400 |
| Body (desktop, ≥750px) | `1.6rem` (16px) | 1.8 | `0.06rem` | 400 |
| Body bold | Same as body | Same | Same | 700 |
| Headings | Scale factor: `1.0` | — | — | 400 |

### Font Scale Variables

```css
:root {
  --font-body-scale: 1.0;
  --font-heading-scale: 1.0;
}

html {
  font-size: calc(var(--font-body-scale) * 62.5%); /* 10px base at scale 1.0 */
}
```

This means `1rem = 10px` at the default scale, making the `1.5rem` body text equal to 15px on mobile.

---

## Shadow System

Makeyo uses an **extremely minimal shadow approach**. Almost all shadow opacities are set to 0.

| Element | Shadow Opacity | Shadow Visible | H-Offset | V-Offset | Blur |
|---------|---------------|---------------|----------|----------|------|
| Media | `0.0` | No | 0px | 4px | 5px |
| Product cards | `0.0` | No | 0rem | 0.4rem | 0.5rem |
| Collection cards | `0.0` | No | 0rem | 0.4rem | 0.5rem |
| Blog cards | `0.0` | No | 0rem | 0.4rem | 0.5rem |
| Buttons | `0.0` | No | 0px | 4px | 5px |
| Popups | `0.05` | Yes (subtle) | 0px | 4px | 5px |
| Drawers | `0.0` | No | 0px | 4px | 5px |
| Text boxes | `0.0` | No | 0px | 4px | 5px |

### Shadow Philosophy

Makeyo relies on **color contrast** between sections rather than shadows for visual depth. The colorful background scheme switching (cream → yellow → blue → orange) creates natural visual separation without needing shadow-based elevation.

---

## Effects

### Border System

Borders are used sparingly with consistent opacity:

| Element | Border Width | Border Opacity |
|---------|-------------|---------------|
| Media | `1px` | `0.05` (nearly invisible) |
| Buttons | `1px` | `1.0` (full visibility) |
| Popups | `1px` | `0.1` |
| Drawers | `1px` | `0.1` |
| Inputs | `1px` | `0.55` |
| Variant pills | `1px` | `0.55` |
| Product cards | `0px` | — (no border) |
| Text boxes | `0px` | — (no border) |

### Gradient Backgrounds

Each color scheme has a `--gradient-background` variable that defaults to the solid background color. This can be overridden with CSS gradients for richer section backgrounds:

```css
.color-scheme-1 { --gradient-background: #f4f1ec; }
.color-scheme-3 { --gradient-background: #ffcc00; }
.color-scheme-4 { --gradient-background: #4693c6; }
.color-scheme-orange { --gradient-background: #ff6128; }
.color-scheme-lime { --gradient-background: #d8ff00; }
.color-scheme-dark { --gradient-background: #191919; }
```
