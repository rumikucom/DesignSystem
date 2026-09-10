# Component Patterns — Makeyo

> Detailed anatomy and styling rules for UI components. These patterns reflect the Shopify Dawn theme customized for Makeyo's colorful, toyetic brand.

---

## Buttons

### Primary Button

| Property | Value |
|----------|-------|
| Background | `rgb(var(--color-button))` |
| Text | `rgb(var(--color-button-text))` |
| Border radius | `12px` |
| Border radius outset | `13px` |
| Border | `1px solid` at full opacity (`1.0`) |
| Border offset | `0.3px` |
| Shadow | None (opacity `0.0`) |

### Secondary Button

| Property | Value |
|----------|-------|
| Background | `rgb(var(--color-secondary-button))` |
| Text | `rgb(var(--color-secondary-button-text))` |
| Border radius | `12px` |
| Border | `1px solid` at full opacity |

### Button Design Notes

- Buttons use the color scheme's dedicated button tokens, NOT the foreground/background tokens
- The `12px` radius gives buttons a soft, friendly feel without being fully rounded
- No shadows on buttons — they stand out via color contrast alone
- On colored backgrounds (yellow, blue, orange), buttons invert to white

---

## Badges

| Property | Value |
|----------|-------|
| Border radius | `4rem` (64px — fully rounded pill) |
| Foreground | `rgb(var(--color-badge-foreground))` |
| Background | `rgb(var(--color-badge-background))` |
| Border | `1px solid rgb(var(--color-badge-border))` |

Badges are full pill shapes, providing strong contrast with the sharp-cornered cards they sit on.

---

## Product Cards

| Property | Value |
|----------|-------|
| Image padding | `0rem` (images fill edge-to-edge) |
| Corner radius | `0px` (sharp corners) |
| Text alignment | `left` |
| Border width | `0rem` (no border) |
| Border opacity | `0.1` |
| Shadow | None (opacity `0.0`) |

### Product Card Design Notes

- Product images are displayed without any padding, rounding, or borders
- Text is left-aligned for scannability in grid layouts
- No shadow or border creates a clean, graphic-design feel
- Product information sits directly below the image

---

## Collection Cards

| Property | Value |
|----------|-------|
| Image padding | `0rem` |
| Corner radius | `0px` |
| Text alignment | `left` |
| Border width | `0rem` |
| Border opacity | `0.1` |
| Shadow | None |

Identical structure to product cards — consistent flat aesthetic.

---

## Blog Cards

| Property | Value |
|----------|-------|
| Image padding | `0rem` |
| Corner radius | `0px` |
| Text alignment | `left` |
| Border width | `0rem` |
| Border opacity | `0.1` |
| Shadow | None |

---

## Inputs

| Property | Value |
|----------|-------|
| Border radius | `0px` (sharp corners) |
| Border | `1px solid` at `0.55` opacity |
| Shadow | None |
| Margin offset | `0px` |
| Outset radius | `0px` |

Sharp-cornered inputs match the card aesthetic while maintaining visible borders for usability.

---

## Variant Pills (Product Options)

| Property | Value |
|----------|-------|
| Border radius | `40px` (pill shape) |
| Border | `1px solid` at `0.55` opacity |
| Shadow | None |

Used for product variant selectors (color, size). The pill shape distinguishes them from regular inputs.

---

## Popups / Dropdowns

| Property | Value |
|----------|-------|
| Border radius | `0px` |
| Border | `1px solid` at `0.1` opacity |
| Shadow opacity | `0.05` (barely visible) |
| Shadow offset | `0px 4px` |
| Shadow blur | `5px` |

The only component with a visible shadow, providing subtle depth for floating overlays.

---

## Drawers (Cart Drawer, Menu Drawer)

| Property | Value |
|----------|-------|
| Border | `1px solid` at `0.1` opacity |
| Shadow | None |

---

## Text Boxes

| Property | Value |
|----------|-------|
| Border radius | `0px` |
| Border width | `0px` (no border) |
| Border opacity | `0.1` |
| Shadow | None |

---

## Media (Images, Videos)

| Property | Value |
|----------|-------|
| Padding | `0px` |
| Border radius | `0px` |
| Border | `1px solid` at `0.05` opacity (nearly invisible) |
| Shadow | None |

---

## Links

Links use `rgb(var(--color-link))` which is scheme-dependent:
- On light backgrounds: dark link color (`#1f1f1f` or `#121212`)
- On colored/dark backgrounds: white link color (`#ffffff`)

---

## Navbar / Header

Shopify Dawn sticky header with:
- Search functionality (predictive search)
- Account access icon
- Cart icon with item count
- Logo (centered or left-aligned)
- Navigation links
- Mobile hamburger menu with drawer

Header inherits the active color scheme's tokens.

---

## Footer

Standard Shopify Dawn footer with:
- Footer columns for navigation links
- Payment method icons
- Copyright text
- Social media links
- Newsletter signup (optional)
- Inherits its assigned color scheme
