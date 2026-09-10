# Component Patterns

> Detailed anatomy and styling rules for every UI component. These patterns are tech-stack-agnostic — implement them in whatever component system your project uses.

---

## Navbar

### Anatomy

```
<header>  → fixed, full-width, z-50
  <container>
    [Mobile: logo + hamburger button]
    [Desktop: logo + nav-links (left side) + social-icons (right side)]
  </container>
  [Mobile: dropdown menu (conditionally rendered)]
</header>
```

### States

**Default (transparent):**
- Background: `transparent`
- Padding: `py-5` (20px vertical)
- No border, no shadow

**Scrolled (glass):**
- Background: `bg-background/90` (90% opacity of page background)
- Backdrop: `backdrop-blur-md` (~12px blur)
- Border: `border-b border-border` (1px bottom border)
- Shadow: `shadow-sm`
- Padding: `py-3` (12px vertical)
- Trigger: `scrollY > 10px`

**Mobile menu open:**
- Full-width dropdown positioned below header (`absolute top-full left-0 right-0`)
- Background: `bg-background/95 backdrop-blur-md`
- Border: `border-b border-border`
- Shadow: `shadow-lg`
- Padding: `py-6 px-6`
- Vertical link list with `gap-6`
- Separator line between links and social icons: `h-[1px] w-full bg-border`
- Horizontal social icons with `gap-6`
- Entry animation: `animate-fade-in-up`

### Nav Link Style
- Font: Display font, bold (700), `text-sm` (14px), `uppercase`, `tracking-widest`
- Color: `text-foreground`
- Hover: `hover:text-primary transition-colors`

### Social Icon Style
- Size: `w-5 h-5` (20px) on desktop, `w-6 h-6` (24px) on mobile
- Color: `fill-current` (inherits text color)
- Hover: `hover:text-primary transition-colors`

### Logo
- Desktop: 45×45px with `drop-shadow-md`
- Mobile: 40×40px
- Hover: `hover:opacity-80 transition-opacity`
- Wrapped in link to homepage

---

## Hero Section

### Anatomy

```
<section>  → min-h-screen, mesh-bg, overflow-hidden, pt-28 pb-16
  <container>  → relative z-10, animate-fade-in-up
    <h1>       → Large headline with gradient text spans + inline animated icons
    <bottom-row>  → flex-col mobile, flex-row desktop (items-end justify-between)
      <cta-button>   → Primary tactile button (pill shape)
      <description>  → Muted paragraph (max-w-md)
    </bottom-row>
  </container>
  [Background glow circles]  → absolute, pointer-events-none
</section>
```

### Headline
- Font: Display font, black (900)
- Sizes: `text-[2.75rem]` (44px) mobile → `text-6xl` → `text-7xl` → `text-8xl` at responsive breakpoints
- Line height: `leading-[1.05]` mobile, `leading-[1.3]` desktop
- Tracking: `tracking-tighter` mobile, `tracking-tight` desktop
- Max width: `max-w-7xl`
- Gradient text spans for emphasis words (using `text-transparent bg-clip-text bg-gradient-to-r`)
- Inline animated icons between words using `.inline-icon` with `bounce` or `rotate` modifiers
- Line breaks controlled per breakpoint with `<br className="hidden md:block" />`

### CTA Button (Hero)
- Height: `h-14` (56px)
- Horizontal padding: `px-8` (32px)
- Shape: `rounded-full` (pill)
- Font: Display font, bold (700), `text-lg` (18px)
- Colors: `bg-primary text-primary-foreground`
- Border: `border border-black/15` in light mode, `dark:border-transparent` in dark mode
- Shadow: `shadow-glow` default state
- Hover: `hover:scale-105 hover:shadow-glow-secondary transition-transform`
- Icon inside: Arrow icon, `w-5 h-5`, `ml-2`

### Description Paragraph
- Font: Body font, regular (400), `text-base md:text-lg`
- Color: `text-muted-foreground`
- Max width: `max-w-md` (448px)
- Line height: `leading-relaxed`

---

## Marquee Banner

### Anatomy

```
<div>  → full-width, bg-primary, border-y, overflow-hidden, flex, whitespace-nowrap
  <track-1>  → animate-marquee, flex, items-center, gap-8, shrink-0, pr-8
    [word + icon] × N, repeated 4 times
  </track-1>
  <track-2>  → identical duplicate of track-1 for seamless loop
</div>
```

### Styling
- Background: `bg-primary` (high-visibility accent color)
- Borders: `border-y border-border` (top and bottom borders)
- Padding: `py-4` (16px vertical)
- Overflow: `overflow-hidden` with `whitespace-nowrap`
- Text: Display font, black (900), `text-3xl` (30px), `uppercase`, `text-primary-foreground`
- Icons between words: 32px height, `drop-shadow-md`
- Gap between items: `gap-8` (32px)
- Each track: `shrink-0 pr-8` to prevent shrinking and add trailing space
- Animation: `marquee 60s linear infinite` — `translateX(0%)` → `translateX(-100%)`
- Two identical tracks placed side by side ensure seamless infinite scrolling

---

## Glassmorphism Card

### Base Utility

The `.glassmorphism` class creates a frosted-glass surface:

```css
background: color-mix(in srgb, var(--foreground) 5%, transparent);
backdrop-filter: blur(12px);
border: 1px solid color-mix(in srgb, var(--foreground) 10%, transparent);
box-shadow:
  inset 0 1px 0 color-mix(in srgb, var(--foreground) 10%, transparent),
  0 10px 40px -10px color-mix(in srgb, var(--foreground) 5%, transparent);
```

### Usage Variants

| Context | Radius | Padding | Additional |
|---------|--------|---------|-----------|
| Stats panel | `rounded-[2rem]` (32px) | `p-6 md:p-10` | `shadow-soft` |
| Ecosystem project card | `rounded-3xl` (~44px) | `p-8 lg:p-12` | Hover: `-translate-y-2 shadow-glow` |
| Footer CTA box | `rounded-[2.5rem]` (40px) | `p-10 md:p-16` | `border border-foreground/10` |

---

## Ecosystem Project Card

### Anatomy

```
<div>  → glassmorphism, rounded-3xl, p-8 lg:p-12, group, hover effects
  <gradient-line>  → 1px decorative top line (absolute positioned)
  <logo-area>      → relative, h-24, mb-10, centered image
  <text-area>      → flex flex-col, flex-grow, text-center
    <title>        → Display font, bold, text-3xl
    <description>  → Light weight, text-lg, muted color, flex-grow
    <link>         → Uppercase, tracking-widest, with arrow icon
  </text-area>
</div>
```

### Styling Details

| Element | Classes/Values |
|---------|---------------|
| Container | `glassmorphism rounded-3xl p-8 lg:p-12 transition-all duration-500` |
| Container hover | `hover:-translate-y-2 hover:shadow-glow` (lifts 8px + adds primary glow) |
| Top gradient line | `absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent` |
| Logo wrapper | `relative flex items-center justify-center h-24 mb-10 w-full` |
| Logo image | `object-contain`, `group-hover:scale-110 transition-transform duration-500` |
| Title | `font-outfit font-bold text-3xl mb-4 text-foreground` (centered) |
| Description | `mb-10 flex-grow text-muted-foreground font-light leading-relaxed text-lg` (centered) |
| Link | `inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-muted-foreground` |
| Link hover | `group-hover:text-foreground transition-colors` |
| Arrow icon | `w-4 h-4 transition-transform group-hover:translate-x-1` |

---

## Stat Sub-Card

### Anatomy

```
<div>  → subtle background, border, rounded-2xl, p-6
  <number>  → Display font, black, text-5xl, colored (secondary or primary)
  <label>   → Body font, uppercase, tracking-wider, muted
</div>
```

### Styling Details

| Element | Classes/Values |
|---------|---------------|
| Container | `bg-foreground/5 border border-foreground/10 rounded-2xl p-6` |
| Container hover | `hover:bg-foreground/10 transition-colors` |
| Stat number | `block font-outfit text-5xl font-black text-secondary mb-2` |
| Stat number (alt) | `block font-outfit text-5xl font-black text-primary mb-2` (with `drop-shadow-[0_0_1.5px_rgba(0,0,0,0.25)] dark:drop-shadow-none` in light mode) |
| Stat label | `text-muted-foreground text-sm font-medium font-sans uppercase tracking-wider` |
| Wide variant | Add `col-span-2` to container for full-width stat |
| Wide variant number | Can use `text-3xl` instead of `text-5xl` for text-based stats |

---

## CTA Box (Footer)

### Anatomy

```
<div>  → glassmorphism, rounded-[2.5rem], p-10 md:p-16, relative, overflow-hidden
  [decorative glow circle]  → absolute, bg-secondary/20, blur-[80px]
  <content>  → relative z-10, flex-col md:flex-row, items-center, justify-between, gap-8
    <text-column>  → max-w-2xl
      <heading>     → Display, black, text-4xl md:text-5xl lg:text-6xl, uppercase, tracking-tight
      <subtext>     → text-xl, text-muted-foreground, font-light, mb-8, max-w-md
    </text-column>
    <button>        → Large pill CTA (shrink-0)
  </content>
</div>
```

### Styling Details

| Element | Classes/Values |
|---------|---------------|
| Container | `glassmorphism rounded-[2.5rem] p-10 md:p-16 border border-foreground/10 relative overflow-hidden` |
| Layout | `flex flex-col md:flex-row items-center justify-between gap-8` |
| Decorative glow | `absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3` |
| Heading | `font-outfit font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 uppercase tracking-tight` |
| Subtext | `text-xl text-muted-foreground font-light mb-8 max-w-md` |
| Button wrapper | `relative z-10 shrink-0` |
| Button | `h-16 px-10 rounded-full shadow-glow hover:scale-105 hover:shadow-glow-secondary transition-all bg-primary text-primary-foreground border border-black/15 dark:border-transparent` |
| Button font | `font-outfit font-bold text-xl` |
| Button icon | `ArrowUpRight w-6 h-6 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1` |

---

## Buttons

### Primary CTA (Tactile Button)

The signature interactive button style used for hero and footer CTAs:

| Property | Hero Variant | Footer Variant |
|----------|-------------|---------------|
| Font | Display, bold (700), `text-lg` | Display, bold (700), `text-xl` |
| Height | `h-14` (56px) | `h-16` (64px) |
| Padding | `px-8` (32px) | `px-10` (40px) |
| Shape | `rounded-full` (pill) | `rounded-full` (pill) |
| Background | `bg-primary text-primary-foreground` | `bg-primary text-primary-foreground` |
| Border (light) | `border border-black/15` | `border border-black/15` |
| Border (dark) | `dark:border-transparent` | `dark:border-transparent` |
| Shadow (default) | `shadow-glow` | `shadow-glow` |
| Shadow (hover) | `shadow-glow-secondary` | `shadow-glow-secondary` |
| Hover transform | `scale(1.05)` | `scale(1.05)` |
| Transition | `transition-transform` | `transition-all` |

### Standard Button Variants

| Variant | Background | Text | Hover |
|---------|-----------|------|-------|
| `default` | `bg-primary` | `text-primary-foreground` | `bg-primary/80` |
| `outline` | `bg-background` + `border-border` | inherits | `bg-muted text-foreground` |
| `secondary` | `bg-secondary` | `text-secondary-foreground` | 5% foreground mix |
| `ghost` | transparent | inherits | `bg-muted text-foreground` |
| `destructive` | `bg-destructive/10` | `text-destructive` | `bg-destructive/20` |
| `link` | transparent | `text-primary` | underline |

### Button Sizes

| Size | Height | Horizontal Padding | Text Size | Icon Size |
|------|--------|-------------------|-----------|-----------|
| `xs` | `h-6` (24px) | `px-2` | `text-xs` | 12px |
| `sm` | `h-7` (28px) | `px-2.5` | `text-[0.8rem]` | 14px |
| `default` | `h-8` (32px) | `px-2.5` | `text-sm` | 16px |
| `lg` | `h-9` (36px) | `px-2.5` | `text-sm` | 16px |
| `icon` | 32×32px | — | — | 16px |
| `icon-xs` | 24×24px | — | — | 12px |
| `icon-sm` | 28×28px | — | — | 16px |
| `icon-lg` | 36×36px | — | — | 16px |

### Button Base Properties
- `inline-flex shrink-0 items-center justify-center`
- `rounded-lg` (default shape, overridden for CTAs)
- `border border-transparent` (allows variant border override)
- `text-sm font-medium whitespace-nowrap`
- `transition-all`
- `select-none`
- Focus: `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50`
- Active: `active:translate-y-px` (subtle press effect)
- Disabled: `disabled:pointer-events-none disabled:opacity-50`

---

## Badge

### Styling
- Shape: `rounded-4xl` (fully rounded pill)
- Height: `h-5` (20px)
- Padding: `px-2 py-0.5`
- Font: `text-xs font-medium`
- Border: `border border-transparent` (allows variant override)

### Variants

| Variant | Background | Text | Hover (if link) |
|---------|-----------|------|----------------|
| `default` | `bg-primary` | `text-primary-foreground` | `bg-primary/80` |
| `secondary` | `bg-secondary` | `text-secondary-foreground` | `bg-secondary/80` |
| `destructive` | `bg-destructive/10` | `text-destructive` | `bg-destructive/20` |
| `outline` | transparent + `border-border` | `text-foreground` | `bg-muted` |
| `ghost` | transparent | inherits | `bg-muted` |
| `link` | transparent | `text-primary` | underline |

---

## Footer

### Anatomy

```
<footer>  → pt-16 pb-8
  <container>
    [CTA Box]              → Large glassmorphism CTA (see CTA Box section above)
    <grid>                 → md:grid-cols-12 gap-12
      <logo-area>          → md:col-span-5: logo image + description paragraph
      <links-area>         → md:col-span-7: grid grid-cols-2 sm:grid-cols-3 gap-8
        <column>           → flex flex-col space-y-4: heading + link list
    </grid>
    <copyright-bar>        → border-t, flex row, justify-between: copyright text + theme toggle
  </container>
</footer>
```

### Logo Area
- Logo image: `h-24 md:h-32 w-auto mb-6`
- Description: `text-muted-foreground font-sans max-w-sm`

### Link Column
- Heading: `font-outfit font-bold text-xl text-foreground uppercase`
- Link list spacing: `space-y-4` (16px between links)
- Link style: `text-muted-foreground hover:text-foreground transition-colors`

### Copyright Bar
- Top border: `border-t border-foreground/10`
- Top padding: `pt-8`
- Layout: `flex flex-row justify-between items-center gap-4`
- Copyright text: `text-muted-foreground font-sans text-sm`
- Theme toggle button: `w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors cursor-pointer`
- Theme toggle icon: 20×20px, sun icon (in dark mode) / moon icon (in light mode)

---

## ASCII Topographic Background

### Anatomy

```
<div>  → fixed, inset-0, z-0, pointer-events-none, overflow-hidden
  <parallax-wrapper>  → translates based on mouse position (CSS custom properties)
    <pre>  → monospace text grid, centered
  </parallax-wrapper>
</div>
```

### Styling

| Property | Value |
|----------|-------|
| Position | `fixed inset-0` |
| Z-index | `0` (behind all content) |
| Pointer events | `none` |
| Overflow | `hidden` |
| Opacity (light mode) | `0.12` |
| Opacity (dark mode) | `0.05` |
| Font family | Monospace (Geist Mono or equivalent) |
| Font size | `14px` |
| Line height | `2.4` |
| Letter spacing | `0.15em` |
| White space | `pre` |
| User select | `none` |
| Character set | `[' ', '·', '+', 'x', '◇', '◈', '⬡', '⬢']` (sparse → dense) |
| Grid rows | ~35 |
| Grid columns | Calculated from viewport aspect ratio × 1.5 |
| Mouse effect radius | 500px |
| Intensity falloff | `pow(1 - distance/500, 1.5)` (non-linear bloom) |
| Parallax range | ±30px on both axes |
| Parallax easing | `transition: 0.1s cubic-bezier(0.2, 0, 0.2, 1)` |
| Base pattern | Alternating `·` and ` ` in a checkerboard for cells outside the mouse effect |
| Extra spacing | Each character followed by 2 spaces (`char + '  '`) |

---

## Theme Toggle

### Styling

| Property | Value |
|----------|-------|
| Shape | `w-10 h-10 rounded-full` (40px circular button) |
| Background | `bg-foreground/5` |
| Hover | `hover:bg-foreground/10` |
| Text color | `text-foreground` |
| Transition | `transition-colors` |
| Icon size | 20×20px |
| Dark mode icon | Sun (indicates "switch to light") |
| Light mode icon | Moon (indicates "switch to dark") |
| Placement | Footer copyright bar, right-aligned |
| Cursor | `cursor-pointer` |

---

## Inline Animated Icons

Small animated images placed inline within headline text.

### Base Container

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

### Sizes
- Default: `w-[1em] h-[1em]` (matches surrounding text size)
- Large: `w-[1.4em] h-[1.4em]` (for visual emphasis)
- Margins vary per placement: `mx-1 md:mx-6 lg:mx-8` (responsive spacing)

### Animation Modifiers
| Class | Animation | Duration | Easing |
|-------|----------|----------|--------|
| `.inline-icon.heartbeat` | heartbeat (double pulse scale) | 2s | ease-in-out, infinite |
| `.inline-icon.bounce` | bounce-subtle (gentle vertical bob) | 3s | ease-in-out, infinite |
| `.inline-icon.rotate` | rotate-slow (continuous 360° spin) | 10s | linear, infinite |

### Image Properties
- `object-contain` — preserves aspect ratio
- `fill` layout (Next.js Image) or equivalent — fills parent container
