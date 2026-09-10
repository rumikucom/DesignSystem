# Page Composition Patterns

> How sections are assembled, ordered, and how the visual flow works. These patterns define the page-level architecture.

---

## Page Layer Stack

The page is composed of visual layers stacked from back to front:

| Layer | Z-Index | Position | Description |
|-------|---------|----------|-------------|
| ASCII Background | `0` | `fixed` | Interactive topographic text grid, full viewport |
| Page Content | `auto` | `relative` | Sections with `relative z-10` on their containers |
| Navbar | `50` | `fixed` | Persistent navigation header |
| Film Grain | `9999` | `fixed` | SVG noise texture overlay, always topmost |

All layers except page content use `pointer-events: none` or are explicitly interactive (navbar).

---

## Section Ordering

The reference page follows this composition order:

```
1. ── Navbar (fixed, always visible) ────────────────────────
2. ── Hero Section (full viewport height) ───────────────────
   │  Mesh gradient background
   │  Large headline with gradient text + animated icons
   │  CTA button + description at bottom
   │  Ambient glow circles (decorative)
   └─────────────────────────────────────────────────────────
3. ── Marquee Banner (thin full-width divider) ──────────────
   │  Infinite horizontal scroll of text + icons
   │  Primary color background
   └─────────────────────────────────────────────────────────
4. ── Content Section: About (text + stats) ─────────────────
   │  2-column grid (text left, visual right)
   │  Scroll-reveal entrance animations
   │  Glassmorphism stats panel
   │  Decorative grid background
   └─────────────────────────────────────────────────────────
5. ── Card Grid Section: Ecosystem (3 cards) ────────────────
   │  Centered section header (label + heading + description)
   │  3-column glassmorphism card grid
   │  Ambient background glow
   └─────────────────────────────────────────────────────────
6. ── Footer ────────────────────────────────────────────────
   │  Large glassmorphism CTA box
   │  12-column grid (logo area + link columns)
   │  Copyright bar + theme toggle
   └─────────────────────────────────────────────────────────
```

---

## Section Anatomy Templates

### Hero Pattern

A full-viewport opening statement that establishes the brand.

**Structure:**
- Full viewport height: `min-h-screen`
- Vertical centering: `flex flex-col justify-center`
- Top padding for navbar clearance: `pt-28` (112px)
- Bottom padding: `pb-16` (64px)
- Background: mesh gradient (`.mesh-bg`) + ambient glow circles
- Content entrance: `animate-fade-in-up`
- Overflow: `overflow-hidden` (contains decorative elements)

**Content flow:**
1. Large headline with mixed elements (plain text, gradient text spans, inline animated icons)
2. Spacer: `mt-16 md:mt-24` (64px → 96px)
3. Bottom row: CTA button left, description paragraph right (desktop) / stacked (mobile)

**Key rule:** The hero should feel spacious. Don't overcrowd it. One headline, one CTA, one description. Let the typography and whitespace do the work.

---

### Content Section Pattern (Text + Visual)

A balanced information section with text on one side and a visual/interactive element on the other.

**Structure:**
- Generous vertical padding: `py-32` (128px)
- 2-column grid on desktop, stacked on mobile: `grid grid-cols-1 lg:grid-cols-2 gap-20 items-center`
- Overflow: `overflow-hidden`
- Relative positioning for decorative backgrounds

**Content flow — Text Column:**
1. Section label: `text-muted-foreground font-sans font-semibold text-sm uppercase tracking-widest mb-4 block`
2. Section heading: Display font, black (900), `text-4xl md:text-5xl lg:text-6xl`, `leading-[1.1]`, `mb-6`
3. Large subheading: Display font, medium (500), `text-3xl md:text-4xl`, `leading-[1.4]`, `mb-8`
4. Body paragraph: Body font, regular, `text-base md:text-lg`, `leading-relaxed`, `text-muted-foreground`, `max-w-lg`
5. Scroll-reveal: slides up 48px and fades in over 1s

**Content flow — Visual Column:**
- Glassmorphism container with interactive sub-elements (stat cards, etc.)
- Cinematic backglow behind the container (`bg-primary/10 rounded-full blur-[100px]`)
- Scroll-reveal: scales from 90% and fades in over 1s with 200ms delay

---

### Card Grid Section Pattern

A section showcasing multiple items in a uniform grid.

**Structure:**
- Generous vertical padding: `py-32` (128px)
- Centered section header above the grid
- Card grid below with `max-w-6xl mx-auto`
- Overflow: `overflow-hidden`
- Ambient background glow (absolute, blurred)

**Section header flow:**
1. Section label: `text-secondary font-sans font-bold text-sm uppercase tracking-widest`
2. Section heading: Display font, black (900), `text-3xl md:text-5xl lg:text-7xl`, `uppercase tracking-tight`
3. Description: `text-muted-foreground max-w-2xl text-lg md:text-xl font-light`
4. Alignment: `flex flex-col items-center space-y-4 text-center`
5. Bottom spacing: `mb-16` (64px) between header and grid

**Grid:**
- Layout: `grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8`
- Centering: `max-w-6xl mx-auto`
- Cards: equal-height columns using `flex flex-col h-full`
- Each card is a glassmorphism container with hover lift effect

---

### Divider Pattern (Marquee)

A full-width visual break placed between major sections.

**Structure:**
- Full-width (breaks out of or ignores container)
- Primary color background (`bg-primary`)
- Thin vertical padding: `py-4` (16px)
- Borders: `border-y border-border` (top and bottom)
- Infinite horizontal scrolling content

**Usage:** Place between the hero and the first content section to create a visual transition point. The high-contrast primary background acts as a "section break" that draws the eye.

---

### Footer Pattern

The page closing that combines a final CTA with site navigation.

**Structure:**
- Asymmetric padding: `pt-16 pb-8` (more breathing room at top, compact at bottom)
- Three vertical zones:
  1. CTA box (largest, most prominent)
  2. Link grid (medium, informational)
  3. Copyright bar (smallest, minimal)

**Internal spacing:**
| From → To | Spacing |
|-----------|---------|
| CTA box → link grid | `mb-24` (96px) |
| Link grid → copyright bar | `mb-16` (64px) |
| Copyright bar top border | `border-t border-foreground/10 pt-8` |

**Key rule:** The footer CTA box is the final call-to-action — it should be visually impactful. The link grid and copyright bar progressively reduce in visual weight.

---

## Universal Design Rules

These rules apply across ALL sections and components. They define the consistent visual language.

### 1. Container Consistency

Every section's content area uses `container mx-auto px-4 md:px-6`. Never break this pattern for content elements. Only full-width decorative elements (marquee, backgrounds) should extend beyond the container.

### 2. Generous Section Spacing

| Minimum | Standard | Maximum (rare) |
|---------|----------|----------------|
| `py-16` (64px) | `py-32` (128px) | `py-40` (160px) |

Sections should breathe. Cramped layouts are forbidden. When in doubt, add more vertical space, not less.

### 3. Background Decorative Elements

All ambient glows, grid patterns, and decorative elements:
- Use `position: absolute`
- Use `pointer-events: none` — never interfere with interactions
- Parent section: `overflow: hidden` and `position: relative`
- Content containers: `position: relative` and `z-index: 10` to sit above

### 4. Gradient Text

For emphasis text spans within headlines:
- `text-transparent bg-clip-text bg-gradient-to-r`
- Define gradient pairs using `from-[color] to-[color]`
- Light mode: add `drop-shadow-[0_0_1.5px_rgba(0,0,0,0.25)]` for readability
- Dark mode: `dark:drop-shadow-none` (not needed, sufficient contrast)

### 5. Light/Dark Mode Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| CTA button border | `border border-black/15` | `border-transparent` |
| Gradient text shadow | `drop-shadow-[0_0_1.5px_rgba(0,0,0,0.25)]` | `drop-shadow-none` |
| ASCII background opacity | `0.12` | `0.05` |
| Primary/secondary colors | Same values | Same values |
| Surface colors | Light grays | Near-blacks |

### 6. Interactive Element Transitions

All interactive elements MUST have explicit `transition-*` classes. No element should change state without a smooth animation. Common patterns:
- Color changes: `transition-colors`
- Position/size changes: `transition-transform`
- Multiple property changes: `transition-all`
- Default duration: browser default (~150ms)
- Deliberate/premium: `duration-300` to `duration-500`

### 7. Default Theme

The site defaults to **dark mode** (`defaultTheme="dark"`). Light mode is available via theme toggle in the footer. All components must look polished in both modes.

### 8. Film Grain

A full-viewport SVG noise texture overlay at `opacity: 0.04` is always present (`z-index: 9999`). It adds tactile texture to flat digital surfaces. It is `pointer-events: none` and should never be disabled.

### 9. Content Hierarchy

Every section follows a strict text hierarchy pattern:

| Level | Role | Style |
|-------|------|-------|
| 1 | **Label** | Small, uppercase, tracked, muted or colored (secondary) |
| 2 | **Heading** | Large, black (900) weight, display font |
| 3 | **Subheading** | Medium, medium (500) weight, display font — optional |
| 4 | **Body** | Standard size, regular (400) weight, body font, muted color |

Never skip levels. A section label always precedes the heading. A body paragraph always follows the heading (or subheading if present).

### 10. Z-Index System

| Layer | Z-Index | Purpose |
|-------|---------|---------|
| Background decorative elements (ASCII, glows) | `0` | Atmospheric/ambient |
| Section content containers | `10` (via `relative z-10`) | Interactive content |
| Navbar | `50` | Persistent navigation |
| Film grain overlay | `9999` | Texture effect |

Never use z-index values outside this system. If you need a new layer, place it between existing tiers.
