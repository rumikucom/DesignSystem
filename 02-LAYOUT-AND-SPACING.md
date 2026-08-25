# Layout & Spacing

> Page structure, container widths, section spacing, grid patterns, and responsive breakpoints.

---

## Page Shell

The outermost page structure:

```
<html>          → scroll-smooth, font variables applied
  <body>        → min-h-full flex flex-col font-sans antialiased
    <div>       → flex flex-col min-h-screen bg-background text-foreground
      [Background]  → Fixed decorative layer (ASCII, etc.)
      [Navbar]      → Fixed header, z-50
      <main>        → flex-grow
        [Sections]  → Stacked content sections
      </main>
      [Footer]
    </div>
  </body>
</html>
```

- Default theme: **dark mode**
- Font rendering: `antialiased`
- Scroll behavior: `scroll-smooth`
- The `<main>` element uses `flex-grow` to push the footer to the bottom regardless of content height

---

## Container

All content sections use a centered container with consistent horizontal padding:

```
container mx-auto px-4 md:px-6
```

### Container Breakpoints

| Breakpoint | Min Width | Container Max Width |
|-----------|----------|---------------------|
| Default | 0px | 100% (fluid) |
| `sm` | 640px | 640px |
| `md` | 768px | 768px |
| `lg` | 1024px | 1024px |
| `xl` | 1280px | 1280px |
| `2xl` | 1536px | 1536px |

### Horizontal Padding

| Breakpoint | Padding | Value |
|-----------|---------|-------|
| Mobile (`< md`) | `px-4` | 16px per side |
| Tablet+ (`md:`) | `px-6` | 24px per side |

### Content Max-Widths

Used within the container for readable text and grid content:

| Utility | Pixels | Usage |
|---------|--------|-------|
| `max-w-7xl` | 1280px | Hero headline text |
| `max-w-6xl` | 1152px | Card grids (ecosystem section) |
| `max-w-2xl` | 672px | Centered section descriptions |
| `max-w-lg` | 512px | Medium paragraphs (about section body) |
| `max-w-md` | 448px | Short descriptive paragraphs (hero description, footer CTA subtext) |
| `max-w-sm` | 384px | Footer logo area description text |

---

## Navbar Dimensions

| Property | Value |
|----------|-------|
| Position | `fixed top-0 left-0 right-0` |
| Z-index | `z-50` |
| Desktop breakpoint | `md:` (768px) |
| **Transparent state** | |
| Padding | `py-5` (20px top and bottom) |
| Background | `transparent` |
| Border | none |
| Shadow | none |
| **Scrolled state** | |
| Padding | `py-3` (12px top and bottom) |
| Background | `bg-background/90` (90% opacity) |
| Backdrop | `backdrop-blur-md` (~12px blur) |
| Border | `border-b border-border` (1px bottom) |
| Shadow | `shadow-sm` |
| Scroll threshold | `> 10px` scrollY |
| Transition | `transition-all duration-300` |
| **Desktop layout** | |
| Logo size | 45px × 45px |
| Logo-to-nav gap | `gap-8 lg:gap-12` + `mr-4` spacer on logo |
| Nav link gap | `gap-6 lg:gap-8` |
| Social icon size | `w-5 h-5` (20px) |
| Social icon gap | `gap-5` (20px) |
| **Mobile layout** | |
| Logo size | 40px × 40px |
| Hamburger button padding | `p-2 -mr-2` |
| Menu dropdown bg | `bg-background/95 backdrop-blur-md` |
| Menu dropdown border | `border-b border-border shadow-lg` |
| Menu dropdown padding | `py-6 px-6` |
| Menu link gap | `gap-6` (vertical stack) |
| Menu social icon size | `w-6 h-6` (24px) |
| Menu social icon gap | `gap-6` |
| Menu separator | `h-[1px] w-full bg-border` |

---

## Section Spacing

| Section | Top Padding | Bottom Padding | Notes |
|---------|------------|---------------|-------|
| Hero | `pt-28` (112px) | `pb-16` (64px) | `min-h-screen`, extra top for fixed navbar clearance |
| Marquee | `py-4` (16px) | `py-4` (16px) | Thin horizontal divider strip |
| About | `py-32` (128px) | `py-32` (128px) | Standard content section |
| Ecosystem | `py-32` (128px) | `py-32` (128px) | Standard content section |
| Footer | `pt-16` (64px) | `pb-8` (32px) | Asymmetric: more top, less bottom |

### Spacing Rhythm Rule

Standard content sections use **`py-32` (128px)** for vertical padding. This creates a generous, breathable rhythm between sections. Never go below `py-16` (64px) for any full-width section.

### Internal Spacing

| Element Relationship | Spacing | Pixel Value |
|---------------------|---------|-------------|
| Hero CTA row from headline | `mt-16 md:mt-24` | 64px → 96px |
| Section header to content grid | `mb-16` | 64px |
| CTA box to footer link grid | `mb-24` | 96px |
| Footer link grid to copyright | `mb-16` | 64px |
| Section label to heading | `mb-4` | 16px |
| Heading to subheading | `mb-6` | 24px |
| Subheading to body paragraph | `mb-8` | 32px |
| Card title to description | `mb-4` | 16px |
| Card description to link | `mb-10` | 40px |
| Logo image in card to title | `mb-10` | 40px |
| Stat number to label | `mb-2` | 8px |
| Footer logo to description | `mb-6` | 24px |
| Footer column heading to first link | `space-y-4` | 16px |

---

## Grid Patterns

### Two-Column Content (About Section)

```
grid grid-cols-1 lg:grid-cols-2 gap-20 items-center
```

- Stacks vertically on mobile and tablet
- Side-by-side at `lg:` (1024px)
- 80px gap between columns
- Vertically centered: `items-center`

### Three-Column Card Grid (Ecosystem Section)

```
grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto
```

- 1 column on mobile
- 3 equal columns at `md:` (768px)
- Gap: 24px → 32px
- Horizontally centered with max-width constraint: `max-w-6xl mx-auto`

### Footer Layout (12-Column Grid)

```
grid md:grid-cols-12 gap-12
```

- Logo/description area: `md:col-span-5`
- Links area: `md:col-span-7`
  - Links sub-grid: `grid grid-cols-2 sm:grid-cols-3 gap-8`
  - Each column: vertical flex with `space-y-4`

### Stats Grid (Inside Glassmorphism Container)

```
grid grid-cols-2 gap-4 md:gap-6
```

- Always 2 columns regardless of viewport
- Gap: 16px → 24px
- One card can span full width with `col-span-2`

### Hero Bottom Row

```
flex flex-col md:flex-row md:items-end justify-between mt-16 md:mt-24 gap-8
```

- Stacks vertically on mobile
- Side-by-side at `md:` (768px)
- Items aligned to bottom: `items-end`
- Full-width spread: `justify-between`
- Gap: 32px

### Section Header (Centered)

```
flex flex-col items-center mb-16 space-y-4 text-center
```

- All elements centered
- 16px vertical spacing between elements
- 64px bottom margin before content

---

## Background Decorative Elements

All decorative background elements share these universal properties:
- `position: absolute`
- `pointer-events: none` — never interfere with interactions
- `border-radius: 9999px` (`rounded-full`) — always circular
- Parent section must have `overflow: hidden` and `position: relative`
- Content containers must have `position: relative` and `z-index: 10` to sit above decorative elements

### Placement Reference

| Element | Position Classes | Color | Size | Blur |
|---------|-----------------|-------|------|------|
| Hero primary glow | `top-1/2 left-1/4 -translate-y-1/2` | `bg-primary/20` | `max-w-2xl aspect-square` | `blur-[140px]` |
| Hero secondary glow | `top-2/3 right-1/4 -translate-y-1/2` | `bg-secondary/10` | `max-w-xl aspect-square` | `blur-[120px]` |
| Ecosystem ambient | `top-0 right-0 -translate-y-1/2 translate-x-1/3` | `bg-secondary/5` | `w-[800px] h-[800px]` | `blur-[150px]` |
| Stats backglow | Centered behind container | `bg-primary/10` | `w-full h-full` | `blur-[100px]` |
| CTA box decorative | `top-0 right-0 translate-x-1/3 -translate-y-1/3` | `bg-secondary/20` | `w-64 h-64` | `blur-[80px]` |

### Subtle Grid Pattern

Applied as an absolute overlay on certain sections:

```css
background-image:
  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
background-size: 60px 60px;
```

- Grid line spacing: 60px × 60px
- Line color: white at 3% opacity
- Container opacity: `0.20`
- Position: `absolute inset-0`
- `pointer-events: none`
