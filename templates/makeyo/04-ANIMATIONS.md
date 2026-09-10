# Animations & Transitions — Makeyo

> Scroll-reveal animations, transitions, and interaction patterns.

---

## Scroll Reveal (Shopify Dawn Animations)

Makeyo uses the Shopify Dawn animation system, which provides scroll-triggered entrance animations for sections and elements.

### Default Entrance Animation

Elements animate in when they enter the viewport:

```css
@keyframes animate--fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

### Slide-Up Entrance

```css
@keyframes animate--slide-in-up {
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Slide-In from Side

```css
@keyframes animate--slide-in {
  0% {
    opacity: 0;
    transform: translateX(-2rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### Zoom-In Entrance

```css
@keyframes animate--zoom-in {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Animation Timing

| Property | Value |
|----------|-------|
| Default duration | `0.5s` — `1s` |
| Easing | `ease` (default) |
| Trigger | Viewport intersection |
| Replay | No — plays once on first view |
| Fill mode | `forwards` |

---

## Transition Patterns

### Button Hover

Buttons use subtle background color transitions:

```css
transition: background-color 0.2s ease;
```

### Link Hover

```css
transition: color 0.2s ease;
```

### Card Image Hover

Product and collection cards have subtle image zoom on hover:

```css
.card__media img {
  transition: transform 0.6s ease;
}

.card:hover .card__media img {
  transform: scale(1.03);
}
```

### Navigation Transitions

Mobile menu open/close:
```css
transition: transform 0.3s ease, opacity 0.3s ease;
```

### Drawer Transitions

Cart and menu drawers slide in from the right:
```css
transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Micro-Interactions

### Cart Count Badge

When items are added to cart, the count badge updates with a brief scale animation.

### Product Quick Add

Quick-add buttons appear on hover over product cards with a fade-in transition.

### Quantity Selector

Plus/minus buttons have subtle active-state feedback.

---

## Animation Philosophy

Makeyo keeps animations **subtle and functional**:

| Characteristic | Makeyo Approach |
|---------------|-----------------|
| Decorative animations | None — no floating elements, no rotating icons |
| Parallax | None |
| Film grain overlay | None |
| Ambient glows | None |
| Animation purpose | Navigation and content discovery only |
| Duration range | 200ms–600ms (snappy) |
| Overall feel | Clean, quick, product-focused |

This contrasts with more atmospheric design systems (like Rumiku) and keeps focus on the products and colorful brand identity.
