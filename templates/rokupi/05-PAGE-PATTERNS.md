# Page Composition Patterns — Rokupi

> Page-level composition, visual flow, and layout rules for Rokupi.

---

## Visual Flow & Architecture

Rokupi pages should be highly legible, structured, and use color intentionally to direct the user's eye, similar to a physical retail environment.

### Block Layout

Rokupi favors a blocky, clean layout with ample clear space, avoiding cluttered or overly dense sections.

```
<body>
  [Header]             → Clean, white or solid brand color
  <main>
    [Hero / Signboard] → High impact, solid Blue or Pink background, White text
    [Content Section]  → White background, Left-aligned text
    [Product Grid]     → Clean product presentation
  </main>
  [Footer]             → High contrast, functional
</body>
```

---

## Color Strategy

Use Rokupi's high-contrast palette to create distinct sections.

- **Primary Impact:** Use the primary Blue (`#0123FF`) for the main brand presence (e.g., hero sections, primary buttons).
- **Secondary Accent:** Use the Pink/Red (`#F40362`) for calls to action, sale tags, or highlighting specific elements.
- **Neutral Rest:** Use White and Black heavily for content areas to ensure the left-aligned Fredoka text is perfectly legible.

### Contrast Rules

1. **White on Color / Color on White:** Always ensure maximum contrast.
2. **Imagery:** When placing text or logos over imagery, use the 100% Black or 100% White logo/text depending on the image's overall brightness.

---

## Typography in Layout

- **Headlines (Fredoka Semi Bold):** Used to grab attention. Can be large and playful.
- **Body Text (Fredoka Regular):** Always left-aligned. Never center-align paragraphs, as it breaks the constant starting point rule defined in the typesetting guide.
- **Line Length:** Keep body text containers narrow enough that lines don't exceed 70-80 characters, maintaining the comfortable reading rhythm established by the calculated `1.4` auto-leading.
