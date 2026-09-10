# Design Tokens (Universal Reference)

> All visual primitives: colors, radii, typography, shadows, and effects. 
> 
> **Note:** This file serves as the *universal reference structure*. When you start a new project, your AI agent will ask for your logo and use the `bootstrap-project-design` skill to generate a project-specific `DESIGN-TOKENS.md` and `BRAND-CORE.md` tailored to your brand.

---

## Color System

The color system uses **semantic naming**. Each token has a purpose, not a color name. This makes the system theme-able and dark-mode-ready.

### Light Mode

| Token | Value | Role |
|-------|-------|------|
| `--background` | `#f9f8fc` | Page background |
| `--foreground` | `#1e1b26` | Primary text color |
| `--card` | `#f2f0f5` | Card surface background |
| `--card-foreground` | `#1e1b26` | Card text color |
| `--popover` | `#f2f0f5` | Popover/dropdown surface |
| `--popover-foreground` | `#1e1b26` | Popover text color |
| `--primary` | `#e7ff57` | Accent/CTA color (example: Neon Lime) |
| `--primary-foreground` | `#000000` | Text on primary surfaces |
| `--secondary` | `#7d39ff` | Brand anchor color (example: Electric Purple) |
| `--secondary-foreground` | `#ffffff` | Text on secondary surfaces |
| `--muted` | `#F4F4F5` | Subtle background (hover states, disabled areas) |
| `--muted-foreground` | `#4b4b57` | De-emphasized text |
| `--accent` | `#F4F4F5` | Accent surface |
| `--accent-foreground` | `#050505` | Text on accent surfaces |
| `--destructive` | `#ef4444` | Error/danger color |
| `--border` | `#E4E4E7` | Border color |
| `--input` | `#E4E4E7` | Input border/outline color |
| `--ring` | `#e7ff57` | Focus ring color |

### Dark Mode

| Token | Value | Role |
|-------|-------|------|
| `--background` | `#050505` | Page background |
| `--foreground` | `#FFFFFF` | Primary text color |
| `--card` | `#0A0A0C` | Card surface background |
| `--card-foreground` | `#FFFFFF` | Card text color |
| `--popover` | `#0A0A0C` | Popover/dropdown surface |
| `--popover-foreground` | `#FFFFFF` | Popover text color |
| `--primary` | `#e7ff57` | Accent/CTA color |
| `--primary-foreground` | `#000000` | Text on primary surfaces |
| `--secondary` | `#7d39ff` | Brand anchor color |
| `--secondary-foreground` | `#ffffff` | Text on secondary surfaces |
| `--muted` | `#1A1A1E` | Subtle background |
| `--muted-foreground` | `#A1A1AA` | De-emphasized text |
| `--accent` | `#1A1A1E` | Accent surface |
| `--accent-foreground` | `#FFFFFF` | Text on accent surfaces |
| `--destructive` | `#ef4444` | Error/danger color |
| `--border` | `#24242A` | Border color |
| `--input` | `#24242A` | Input border/outline color |
| `--ring` | `#e7ff57` | Focus ring color |

### Color Usage Rules

- `--primary` is for high-visibility elements: CTA buttons, focus rings, badges, marquee backgrounds
- `--secondary` is for brand anchoring: stat numbers, section labels, decorative glows, gradient text
- `--muted-foreground` is for de-emphasized body text, descriptions, meta labels
- `--foreground` at reduced opacity (`foreground/5`, `foreground/10`) is used for glassmorphism backgrounds and subtle borders
- Background glows use `--primary/20` and `--secondary/10` (or `/5`, `/15`) with large blur values
- `--ring` matches `--primary` for consistent focus states
- `--card` should be a slight offset from `--background` (not identical) to create surface layering
- In light mode, `--primary` and `--secondary` stay the same as dark mode — they're accent colors, not surface colors
- `--destructive` is reserved for error states only

---

## Border Radius Scale

The radius system uses a **single base value** with multipliers. This ensures proportional scaling when you adjust the base.

| Token | Multiplier | Computed Value | Usage |
|-------|-----------|---------------|-------|
| `--radius` (base) | 1.0× | `1.25rem` (20px) | Base reference |
| `--radius-sm` | 0.6× | `0.75rem` (12px) | Small buttons, input fields |
| `--radius-md` | 0.8× | `1rem` (16px) | Medium elements |
| `--radius-lg` | 1.0× | `1.25rem` (20px) | Standard card, default button |
| `--radius-xl` | 1.4× | `1.75rem` (28px) | Large cards |
| `--radius-2xl` | 1.8× | `2.25rem` (36px) | Image frames, stat sub-cards |
| `--radius-3xl` | 2.2× | `2.75rem` (44px) | Feature cards, ecosystem cards |
| `--radius-4xl` | 2.6× | `3.25rem` (52px) | Large containers |
| (pill) | ∞ | `9999px` / `rounded-full` | CTA buttons, badges, toggles |

### Radius Usage Rules

| Element | Radius |
|---------|--------|
| Badges and pill buttons | `rounded-full` (fully circular/pill shape) |
| CTA buttons (hero, footer) | `rounded-full` (pill shape) |
| Standard buttons | `rounded-lg` (~20px) |
| Feature/ecosystem cards | `rounded-3xl` (~44px) |
| Glassmorphism containers (stats) | `rounded-[2rem]` (32px) |
| Glassmorphism containers (CTA) | `rounded-[2.5rem]` (40px) |
| Image frames | `rounded-2xl` (~36px) |
| Stat sub-cards | `rounded-2xl` (~36px) |
| Standard UI card (shadcn-style) | `rounded-xl` (~20px) |
| Small buttons (xs, sm) | `rounded-md` (~16px) |

---

## Typography

### Font Stack

The system uses 3 font roles:

| Role | Reference Font | CSS Variable | Weights Used |
|------|---------------|-------------|-------------|
| Display / Heading | Outfit | `--font-outfit` | 400, 500, 700, 900 |
| Body / Sans | Geist Sans | `--font-sans` | 400 (default) |
| Monospace | Geist Mono | `--font-mono` | 400 (default) |

### Typography Scale

| Element | Font Role | Weight | Size (mobile) | Size (desktop) | Line Height | Letter Spacing | Other |
|---------|-----------|--------|--------------|---------------|-------------|---------------|-------|
| Hero H1 | Display | 900 (black) | `2.75rem` (44px) | `text-6xl` → `text-7xl` → `text-8xl` | `1.05` mobile, `1.3` desktop | `tracking-tighter` mobile, `tracking-tight` desktop | `max-w-7xl` |
| Section H2 (large) | Display | 900 (black) | `text-3xl` (30px) | `text-5xl` → `text-7xl` | default | `tracking-tight` | `uppercase` |
| Section H2 (medium) | Display | 900 (black) | `text-4xl` (36px) | `text-5xl` → `text-6xl` | `1.1` | default | — |
| Large subheading | Display | 500 (medium) | `text-3xl` (30px) | `text-4xl` | `1.4` | default | — |
| Card title | Display | 700 (bold) | `text-3xl` (30px) | `text-3xl` | default | default | — |
| Footer column heading | Display | 700 (bold) | `text-xl` (20px) | `text-xl` | default | default | `uppercase` |
| Stat number | Display | 900 (black) | `text-5xl` (48px) | `text-5xl` | default | default | Colored (`text-secondary` or `text-primary`) |
| CTA button (hero) | Display | 700 (bold) | `text-lg` (18px) | `text-lg` | default | default | Height: `h-14`, Padding: `px-8` |
| CTA button (footer) | Display | 700 (bold) | `text-xl` (20px) | `text-xl` | default | default | Height: `h-16`, Padding: `px-10` |
| Marquee text | Display | 900 (black) | `text-3xl` (30px) | `text-3xl` | default | default | `uppercase` |
| Navbar links | Display | 700 (bold) | `text-sm` (14px) | `text-sm` | default | `tracking-widest` | `uppercase` |
| Body paragraph | Body | 400 (regular) | `text-base` (16px) | `text-lg` (18px) | `leading-relaxed` | default | Max-width varies |
| Section description | Body | 300 (light) | `text-lg` (18px) | `text-xl` (20px) | default | default | `max-w-2xl` centered |
| Meta/label | Body | 600 (semibold) | `text-sm` (14px) | `text-sm` | default | `tracking-widest` | `uppercase` |
| Card description | Body | 300 (light) | `text-lg` (18px) | `text-lg` | `leading-relaxed` | default | — |
| Stat label | Body | 500 (medium) | `text-sm` (14px) | `text-sm` | default | `tracking-wider` | `uppercase` |
| Footer body | Body | 400 (regular) | default | default | default | default | — |
| Copyright text | Body | 400 (regular) | `text-sm` (14px) | `text-sm` | default | default | `text-muted-foreground` |

---

## Shadow System

| Utility Name | CSS Value | Usage |
|-------------|-----------|-------|
| `shadow-glow` | `box-shadow: 0 0 40px -10px var(--primary)` | CTA buttons default state, card hover glow |
| `shadow-glow-secondary` | `box-shadow: 0 0 40px -10px var(--secondary)` | CTA buttons hover state |
| `shadow-soft` | `box-shadow: 0 10px 40px -10px color-mix(in srgb, var(--foreground) 30%, transparent)` | Glassmorphism containers, neutral depth |

### Shadow Usage Rules

| Context | Default Shadow | Hover Shadow |
|---------|---------------|-------------|
| CTA buttons | `shadow-glow` | `shadow-glow-secondary` (color shift) |
| Glassmorphism cards | `shadow-soft` | — |
| Ecosystem cards on hover | — | `shadow-glow` (glow appears on lift) |
| Navbar when scrolled | `shadow-sm` | — |
| Standard cards | none | — |

---

## Effects

### Glassmorphism

A reusable frosted-glass effect for cards, panels, and containers:

```css
.glassmorphism {
  background: color-mix(in srgb, var(--foreground) 5%, transparent);
  backdrop-filter: blur(12px);
  border: 1px solid color-mix(in srgb, var(--foreground) 10%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, var(--foreground) 10%, transparent),
    0 10px 40px -10px color-mix(in srgb, var(--foreground) 5%, transparent);
}
```

Key properties:
- Uses `var(--foreground)` mixed with transparency — adapts automatically to light/dark mode
- `backdrop-filter: blur(12px)` for the frosted effect
- Subtle inner top highlight (`inset 0 1px 0`) simulates a light source from above
- Soft outer shadow for depth
- The 5%/10% foreground mix creates a semi-transparent surface that feels like glass

### Mesh Gradient Background

A multi-stop radial gradient background for hero sections:

```css
.mesh-bg {
  background-color: transparent;
  background-image:
    radial-gradient(at 0% 0%, color-mix(in srgb, var(--secondary) 15%, transparent) 0, transparent 50%),
    radial-gradient(at 50% 0%, color-mix(in srgb, var(--primary) 10%, transparent) 0, transparent 50%),
    radial-gradient(at 100% 0%, color-mix(in srgb, var(--secondary) 15%, transparent) 0, transparent 50%);
}
```

Key properties:
- Three radial gradients at top-left, top-center, and top-right
- Uses both `--primary` and `--secondary` colors at low opacity (10–15%)
- Creates a subtle ambient glow across the top of the hero section
- `color-mix()` ensures it works in both light and dark themes

### Film Grain Overlay

A full-viewport SVG noise texture applied via `body::after`:

```css
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.04;
}
```

Key properties:
- SVG `fractalNoise` with `baseFrequency: 0.85` and `3 octaves`
- Fixed position covering the entire viewport
- `pointer-events: none` — doesn't interfere with interaction
- `z-index: 9999` — sits above everything
- `opacity: 0.04` — barely visible but adds tactile texture to flat digital surfaces

### Gradient Text

Text with gradient fill for emphasis:

```css
.gradient-text {
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, var(--from-color), var(--to-color));
}
```

Reference gradient pairs:
- **Primary gradient:** `from-primary to-lime-300` (e.g., `#e7ff57` → `#a3e635`)
- **Secondary gradient:** `from-secondary to-purple-400` (e.g., `#7d39ff` → `#c084fc`)

Light mode addition: `drop-shadow(0 0 1.5px rgba(0,0,0,0.25))` for readability contrast on gradient text. Remove in dark mode.

### Ambient Background Glows

Large blurred circles positioned absolutely behind content for cinematic depth:

| Variant | Color/Opacity | Size | Blur | Position Example |
|---------|--------------|------|------|-----------------|
| Primary glow (large) | `bg-primary/20` | `max-w-2xl aspect-square` | `blur-[140px]` | `top-1/2 left-1/4` |
| Secondary glow | `bg-secondary/10` | `max-w-xl aspect-square` | `blur-[120px]` | `top-2/3 right-1/4` |
| Subtle secondary | `bg-secondary/5` | `800px × 800px` | `blur-[150px]` | `top-0 right-0` |
| CTA decorative | `bg-secondary/20` | `256px × 256px` | `blur-[80px]` | `top-0 right-0` |
| Stats backglow | `bg-primary/10` | `100% × 100%` | `blur-[100px]` | Centered behind container |

All ambient glows share: `rounded-full`, `pointer-events-none`, `position: absolute`.
