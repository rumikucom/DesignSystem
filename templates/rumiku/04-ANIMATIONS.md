# Animations & Transitions

> All keyframe animations, transition patterns, scroll-reveal behaviors, and micro-interactions.

---

## Keyframe Animations

### float

Gentle vertical bobbing for floating decorative elements.

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```

| Property | Value |
|----------|-------|
| Duration | `6s` |
| Easing | `ease-in-out` |
| Iteration | `infinite` |
| Usage | Floating decorative elements, ambient motion |

---

### marquee

Horizontal continuous scroll for ticker/marquee banners.

```css
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
```

| Property | Value |
|----------|-------|
| Duration | `60s` |
| Easing | `linear` |
| Iteration | `infinite` |
| Usage | Full-width text marquee between sections |
| Implementation | Two identical tracks side by side for seamless infinite looping |

---

### fadeInUp

Content entrance animation — slide up combined with fade in.

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

| Property | Value |
|----------|-------|
| Duration | `1s` |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` (strong deceleration curve) |
| Fill | `forwards` |
| Usage | Hero content entrance, mobile menu appearance |

---

### fadeIn

Simple opacity entrance.

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

| Property | Value |
|----------|-------|
| Duration | `1.5s` |
| Easing | `ease-out` |
| Fill | `forwards` |
| Usage | Subtle content reveals, secondary elements |

---

### heartbeat

Double-pulse scaling animation — two beats then rest.

```css
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.15); }
  30% { transform: scale(1); }
  45% { transform: scale(1.15); }
  60% { transform: scale(1); }
}
```

| Property | Value |
|----------|-------|
| Duration | `2s` |
| Easing | `ease-in-out` |
| Iteration | `infinite` |
| Scale amount | 15% increase |
| Usage | Inline icon decoration in headlines |

---

### bounce-subtle

Gentle vertical bounce — less aggressive than CSS default bounce.

```css
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15%); }
}
```

| Property | Value |
|----------|-------|
| Duration | `3s` |
| Easing | `ease-in-out` |
| Iteration | `infinite` |
| Bounce amount | 15% of element height |
| Usage | Inline icon decoration in headlines |

---

### rotate-slow

Continuous 360° rotation — smooth and hypnotic.

```css
@keyframes rotate-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

| Property | Value |
|----------|-------|
| Duration | `10s` |
| Easing | `linear` |
| Iteration | `infinite` |
| Usage | Inline icon decoration in headlines |

---

## Transition Patterns

All interactive elements use explicit CSS transitions. No element should change state without a smooth transition.

### Navbar Scroll Transition

```
transition-all duration-300
```

Smoothly transitions between transparent and glass states when the user scrolls past 10px. Affects: padding, background, border, shadow simultaneously.

### Button Hover (Tactile CTA)

```
hover:scale-105 transition-transform
```

With shadow color shift: `shadow-glow` → `shadow-glow-secondary` on hover. The button physically grows 5% and its glow changes from primary to secondary color.

### Card Hover (Ecosystem Cards)

```
hover:-translate-y-2 transition-all duration-500
```

Combined with `hover:shadow-glow`. The card lifts 8px vertically and gains a colored primary glow. Duration is 500ms for a deliberate, premium feel.

### Card Hover (Stat Sub-Cards)

```
hover:bg-foreground/10 transition-colors
```

Subtle background darkening on hover. Only the background color changes — no movement or shadow.

### Link Hover (Navbar)

```
hover:text-primary transition-colors
```

Color shifts from foreground to primary accent color on hover.

### Link Hover (Footer)

```
hover:text-foreground transition-colors
```

Color shifts from muted-foreground to full foreground color on hover.

### Logo Hover (Inside Cards)

```
group-hover:scale-110 transition-transform duration-500
```

10% scale increase when the parent card (group) is hovered. Uses 500ms duration for smooth, delayed feel.

### Arrow Icon Hover (Horizontal)

```
group-hover:translate-x-1 transition-transform
```

Arrow slides 4px to the right when parent element is hovered.

### Arrow Icon Hover (Diagonal — ArrowUpRight)

```
group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform
```

Arrow slides 4px right and 4px up simultaneously when parent is hovered.

### Logo Hover (Navbar)

```
hover:opacity-80 transition-opacity
```

Subtle 20% dimming on hover.

---

## Scroll-Reveal (IntersectionObserver)

Content elements animate into view when they enter the viewport. Each element only animates once — no repeat on scroll back.

### Text Column Reveal

```
Initial state:   opacity-0 translate-y-12
Visible state:   opacity-100 translate-y-0
Transition:      transition-all duration-1000
```

- Slides up 48px (3rem) and fades in
- Duration: 1000ms (1 second)
- Easing: CSS default ease

### Stats Card Reveal

```
Initial state:   opacity-0 scale-90
Visible state:   opacity-100 scale-100
Transition:      transition-all duration-1000 delay-200
```

- Scales from 90% to 100% and fades in
- Duration: 1000ms (1 second)
- Delay: 200ms (staggered after text column)

### Observer Configuration

| Setting | Value |
|---------|-------|
| `rootMargin` | `'-100px'` (triggers 100px before element enters viewport) |
| Trigger behavior | Fire once, then disconnect observer |
| Re-trigger on scroll up | No — animation does not replay |

### Implementation Pattern

```javascript
// Create observer with rootMargin offset
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    setIsVisible(true);    // Toggle CSS classes
    observer.disconnect(); // Fire once only
  }
}, { rootMargin: '-100px' });

// Observe the target element
observer.observe(elementRef.current);
```

---

## Animation Delay Utilities

| Class | CSS Value |
|-------|-----------|
| `.delay-200` | `animation-delay: 200ms` |
| `.delay-500` | `animation-delay: 500ms` |

Use these for staggering entrance animations when multiple elements animate in sequence.

---

## Inline Icon Animation System

Animated icons placed inline within text — specifically inside large headlines between words.

### Base Class: `.inline-icon`

```css
.inline-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  width: 1.1em;
  height: 1.1em;
  margin: 0 0.1em;
}
```

The `em`-based sizing ensures icons scale proportionally with the surrounding text.

### Animation Modifiers

| Modifier Class | Animation Applied | Duration | Easing | Loop |
|---------------|-------------------|----------|--------|------|
| `.inline-icon.heartbeat` | heartbeat (double pulse) | 2s | ease-in-out | infinite |
| `.inline-icon.bounce` | bounce-subtle (gentle bob) | 3s | ease-in-out | infinite |
| `.inline-icon.rotate` | rotate-slow (continuous spin) | 10s | linear | infinite |

### Sizing Overrides

Inline icons can be resized with utility classes on the element:
- Default: `w-[1em] h-[1em]` — matches text size exactly
- Larger: `w-[1.4em] h-[1.4em]` — 40% larger for visual emphasis
- Margins: vary per placement (e.g., `mx-1 md:mx-6 lg:mx-8`)

---

## ASCII Background Mouse Interaction

The ASCII topographic background responds to mouse movement in two ways:

### 1. Parallax Translation

The entire ASCII grid translates based on cursor position.

| Property | Value |
|----------|-------|
| Translation range | ±30px on both X and Y axes |
| Calculation | `(mousePosition / viewportSize - 0.5) * 2 * 30` |
| Smoothing | CSS transition: `0.1s cubic-bezier(0.2, 0, 0.2, 1)` |
| Applied via | CSS custom properties `--parallax-x` and `--parallax-y` |

### 2. Character Density (Topographic Bloom)

Characters near the cursor become denser/heavier, creating a topographic ripple effect.

| Property | Value |
|----------|-------|
| Character set | `[' ', '·', '+', 'x', '◇', '◈', '⬡', '⬢']` |
| Index mapping | `charIndex = floor(intensity × 7)` |
| Max effect radius | `500px` from cursor |
| Intensity formula | `max(0, 1 - distance / 500)` |
| Falloff curve | `pow(intensity, 1.5)` — non-linear, focused bloom |
| Base pattern | Alternating `·` and ` ` in checkerboard for cells at zero intensity |
| Update trigger | `requestAnimationFrame` on each `mousemove` event |
| Resize handling | Recalculate grid dimensions on `window.resize` |
