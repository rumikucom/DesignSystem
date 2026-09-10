# Layout & Spacing — Makeyo

> Page structure, grid spacing, section spacing, and container system.

---

## Page Shell

Makeyo uses a CSS Grid body layout:

```css
body {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100%;
  margin: 0;
}
```

- Row 1: Announcement bar (auto)
- Row 2: Header/navbar (auto)
- Row 3: Main content (1fr, fills remaining space)
- Row 4: Footer (auto)

---

## Container

### Page Width

| Property | Value |
|----------|-------|
| `--page-width` | `120rem` (1920px at default scale) |
| `--page-width-margin` | `0rem` |

The 120rem page width is extremely wide, designed to fill large desktop monitors. Content sections may use narrower max-widths internally.

---

## Grid Spacing

| Context | Horizontal Gap | Vertical Gap |
|---------|---------------|-------------|
| Desktop | `8px` | `8px` |
| Mobile | `4px` | `4px` |

These are the base grid gaps used for product grids, collection grids, and card layouts.

```css
:root {
  --grid-desktop-vertical-spacing: 8px;
  --grid-desktop-horizontal-spacing: 8px;
  --grid-mobile-vertical-spacing: 4px;
  --grid-mobile-horizontal-spacing: 4px;
}
```

---

## Section Spacing

| Property | Value |
|----------|-------|
| Desktop section spacing | `0px` |
| Mobile section spacing | `0px` |

Makeyo uses **zero spacing between sections**. Sections are placed directly adjacent to each other, relying on color scheme changes to create visual separation. This creates a seamless, full-bleed layout where each section's background color butts directly against the next.

### Section Spacing Philosophy

Instead of whitespace between sections, Makeyo uses **color contrast** as the section divider. A warm cream section (`#f4f1ec`) next to a vivid yellow section (`#ffcc00`) creates a strong visual break without any gap.

---

## Component Spacing

### Product Card Spacing

| Property | Value |
|----------|-------|
| Image padding | `0rem` (flush to edges) |
| Text alignment | `left` |

### Collection Card Spacing

| Property | Value |
|----------|-------|
| Image padding | `0rem` |
| Text alignment | `left` |

### Blog Card Spacing

| Property | Value |
|----------|-------|
| Image padding | `0rem` |
| Text alignment | `left` |

### Media Spacing

| Property | Value |
|----------|-------|
| Media padding | `0px` |

---

## Typography Sizing

| Breakpoint | Body Font Size | Line Height | Letter Spacing |
|-----------|---------------|-------------|---------------|
| Mobile (< 750px) | `1.5rem` (15px) | 1.8 | `0.06rem` |
| Desktop (≥ 750px) | `1.6rem` (16px) | 1.8 | `0.06rem` |

The base `font-size` on `<html>` is `calc(var(--font-body-scale) * 62.5%)` = `62.5%` = `10px`, so all `rem` values are relative to 10px.

---

## Box Sizing

```css
html { box-sizing: border-box; }
*, *::before, *::after { box-sizing: inherit; }
```

All elements use `border-box` sizing through inheritance.

---

## Responsive Breakpoint

| Breakpoint | Min Width | Purpose |
|-----------|----------|---------|
| Desktop | `750px` | Font size increases, grid gaps widen |

Makeyo uses a single primary breakpoint at **750px** for the mobile-to-desktop transition.
