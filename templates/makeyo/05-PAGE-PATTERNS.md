# Page Composition Patterns — Makeyo

> How sections are assembled, ordered, and how the visual flow works for an e-commerce store.

---

## Page Architecture

Makeyo uses Shopify Dawn's **section-based architecture** where each page is composed of modular, reorderable sections. Each section can be assigned its own color scheme.

### Section-Based Layout

```
<body>
  [Announcement Bar]   → Optional top banner, full-width
  [Header]             → Sticky navigation with search, account, cart
  <main>
    [Section 1]        → Each section has its own color-scheme class
    [Section 2]        → Sections butt against each other (0px gap)
    [Section N]        → Any number of sections
  </main>
  [Footer]             → Site links, payment icons, copyright
</body>
```

---

## Color Scheme Assignment

The defining feature of Makeyo's page design is **per-section color theming**. Each section element gets a color scheme class that completely repaints all elements within it.

```html
<section class="color-scheme-1">  <!-- Warm cream -->
  ...
</section>
<section class="color-scheme-3">  <!-- Vivid yellow -->
  ...
</section>
<section class="color-scheme-4">  <!-- Ocean blue -->
  ...
</section>
```

### Color Scheme Pairing Guidelines

| Pattern | Example Sequence | Effect |
|---------|-----------------|--------|
| Neutral → Bold | Cream → Yellow → Cream | Highlights featured section |
| Bold → Bold | Orange → Blue → Yellow | High-energy, playful feel |
| Dark sandwich | Dark → Lime → Dark | Neon accent pop |
| Gradual warmup | Cream → Gray → Yellow → Orange | Progressive intensity |

### Rules for Color Scheme Switching

1. **Adjacent sections should contrast**: Never place two sections with the same scheme next to each other
2. **Neutral sections provide breathing room**: Use Scheme 1 (cream) or Scheme 2 (warm gray) between bold colored sections
3. **Dark sections create anchors**: Use the dark scheme for header, footer, or high-impact CTAs
4. **The 0px gap makes transitions seamless**: Color changes create natural section dividers

---

## Typical Homepage Flow

```
1. ── Header (inherits page scheme) ────────────────────────
2. ── Hero / Slideshow ─────────────────────────────────────
   │  Full-width image or slideshow
   │  Headline text overlay
   │  CTA button
   └────────────────────────────────────────────────────────
3. ── Featured Collection ──────────────────────────────────
   │  Product grid (usually 4 columns desktop, 2 mobile)
   │  "View all" link
   └────────────────────────────────────────────────────────
4. ── Image with Text ──────────────────────────────────────
   │  Split layout: image + descriptive text
   │  Often uses a bold color scheme (yellow, blue)
   └────────────────────────────────────────────────────────
5. ── Second Collection ────────────────────────────────────
   │  Different product category
   │  May use different color scheme than first collection
   └────────────────────────────────────────────────────────
6. ── Rich Text / About ────────────────────────────────────
   │  Brand story or feature explanation
   │  Often on a colored background (orange, lime)
   └────────────────────────────────────────────────────────
7. ── Newsletter ───────────────────────────────────────────
   │  Email signup form
   │  Often on dark background
   └────────────────────────────────────────────────────────
8. ── Footer ───────────────────────────────────────────────
   │  Navigation columns
   │  Payment icons
   │  Copyright
   └────────────────────────────────────────────────────────
```

---

## Section Types

### Hero / Slideshow

- Full-width imagery
- Text overlay with headline + CTA
- Often uses Scheme 1 (cream) or a bold scheme
- Height: typically auto or fixed aspect ratio
- Scroll-reveal entrance animation

### Product Grid (Featured Collection)

- 4 columns on desktop, 2 on mobile
- 8px gap desktop, 4px gap mobile
- No card borders, shadows, or rounded corners
- Left-aligned product text
- Quick-add button on hover
- Product images: edge-to-edge, no padding

### Image with Text

- 2-column split layout
- Image on one side, text + CTA on the other
- Great for brand storytelling on colored backgrounds
- Responsive: stacks vertically on mobile
- Can use any color scheme for dramatic effect

### Rich Text

- Centered or left-aligned text content
- Used for brand messaging, FAQs, or descriptions
- Benefits from bold color scheme backgrounds (orange, lime, yellow)
- Can include buttons and links

### Newsletter / Email Signup

- Typically on a dark scheme for contrast
- Email input field + submit button
- Brief headline and description
- Full-width section

### Collapsible Content (FAQ)

- Accordion-style expandable sections
- Clean expand/collapse transitions
- Works well on neutral schemes

---

## Design Rules

### 1. Color Creates Structure

With 0px section spacing, color scheme changes ARE the section dividers. Use them intentionally.

### 2. Flat is Beautiful

No shadows, no gradients, no glassmorphism. Let bold colors and clean typography create visual interest.

### 3. Products are the Stars

Product images have no padding, no borders, no rounded corners — nothing between the customer and the product.

### 4. Typography is Simple

One font (Urbanist), two weights (400, 700). Hierarchy comes from size and weight, not font variety.

### 5. Playful but Professional

The colorful palette is energetic and fun, but the flat design and clean grid keep it professional. Balance bold colors with neutral breathing sections.

### 6. Mobile-First Grid

4px mobile gaps vs 8px desktop gaps. The tighter mobile grid maximizes product visibility on small screens.

### 7. Seamless Flow

The zero-gap design means the page reads as one continuous visual experience rather than a stack of separate cards. This is intentional — it creates a sense of cohesion and energy that matches the brand's playful identity.

### 8. Per-Section Independence

Each section is self-contained with its own color scheme. This modularity means sections can be reordered, added, or removed without breaking the visual flow — as long as adjacent color schemes contrast.
