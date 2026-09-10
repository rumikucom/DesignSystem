# Design Tokens — Rokupi

> All visual primitives: color schemes, typography, border radii, shadows, and effects.

---

## Color System

Rokupi relies on a highly focused, high-contrast palette consisting of two strong accent colors and strict black/white backgrounds.

### Brand Colors

| Token | RGB Value | Hex | Role |
|-------|-----------|-----|------|
| `--color-primary` | `1,35,255` | `#0123FF` | Primary Brand Blue |
| `--color-secondary` | `244,3,98` | `#F40362` | Secondary Brand Pink |
| `--color-white` | `255,255,255` | `#FFFFFF` | Light Background / Light Text |
| `--color-black` | `0,0,0` | `#000000` | Dark Background / Dark Text |

### Application Themes

#### Light Theme
| Token | Mapped Value | Hex |
|-------|--------------|-----|
| `--color-background` | `var(--color-white)` | `#FFFFFF` |
| `--color-foreground` | `var(--color-black)` | `#000000` |
| `--color-accent` | `var(--color-primary)` | `#0123FF` |

#### Dark Theme
| Token | Mapped Value | Hex |
|-------|--------------|-----|
| `--color-background` | `var(--color-black)` | `#000000` |
| `--color-foreground` | `var(--color-white)` | `#FFFFFF` |
| `--color-accent` | `var(--color-secondary)` | `#F40362` |

### Color Usage Rules
- **Contrast:** Logos and text should always contrast cleanly with the background. Do not place dark text on dark backgrounds or light text on light backgrounds.
- **Imagery:** Primary or White logos should be used over imagery, ensuring legibility depending on the image's tone (dark vs. light).

---

## Typography

### Font Stack

Rokupi exclusively uses the **Fredoka** typeface to maintain a friendly, rounded aesthetic.

| Role | Font Family | CSS Variable | Weights | Style |
|------|------------|-------------|---------|-------|
| Body | Fredoka | `--font-body-family` | 400 (Regular) | normal |
| Heading | Fredoka | `--font-heading-family` | 600 (Semi Bold) | normal |

### Typography Scale & Typesetting

Rokupi has a strict auto-leading typesetting formula for body text: `(Font Size) + (Font Size * 0.4) = True Leading`. 
For web, this effectively translates to a line height of `1.4`.

| Element | Size | Line Height | Letter Spacing | Weight |
|---------|------|-------------|---------------|--------|
| Body | Base (e.g. `16px`) | `1.4` | Normal | 400 (Regular) |
| Headings | Scaled up | `1.2` | Normal | 600 (Semi Bold) |
| Fine Print | Smaller (e.g. `12px`) | `1.4` | Normal | 300 (Light) |

### Alignment
- **Left-Aligned:** All body text must be left-aligned. This provides a constant starting point for every line, making text easier to read and scan.

---

## Border Radius Scale

Because the Fredoka typeface is inherently rounded, UI elements should complement this with soft, rounded corners to maintain visual harmony.

| Element | Radius | Notes |
|---------|--------|-------|
| Buttons | `8px` to `12px` | Soft rounded corners |
| Badges | `9999px` | Fully rounded (pill shape) |
| Cards | `12px` | Soft rounded corners |

---

## Shadows & Effects

Rokupi's brand manual emphasizes clean, flat design.
- **No Drop Shadows on Logos:** The guidelines explicitly state: "DON’T ADD SHADOW" to the logo.
- **Flat UI:** Rely on the high contrast of the primary and secondary colors against black and white backgrounds rather than shadows for depth.
