---
name: bootstrap-project-design
description: Use when starting a new project with a design preset/template, or applying brand colors and typography to a new codebase
---

# Bootstrap Project Design

## Overview
This skill establishes the core brand identity for a new project using one of the available design templates. It ensures that projects use authentic brand colors extracted directly from the user's logo instead of relying on default placeholder colors.

## Available Templates

This repo contains brand-specific design templates under `templates/`:

| Template | Brand | Style |
|----------|-------|-------|
| `templates/rumiku/` | Rumiku | Dark cinematic, glassmorphism, neon lime + electric purple |
| `templates/makeyo/` | Makeyo | Colorful flat e-commerce, 10 color schemes, Urbanist font |

Each template contains 6 design documents (`00-OVERVIEW.md` through `05-PAGE-PATTERNS.md`) plus a `BRAND-CORE.md` with the brand's identity summary.

## When to Use

- Initializing a new project using one of the available design templates
- Setting up design tokens for a new codebase based on a template
- When a user asks to "apply the design system", "setup the brand", or "use the [brand] template"
- Creating a new brand template from scratch (logo extraction + document generation)
- DO NOT use for modifying existing, established project color tokens unless specifically requested

## Core Pattern

The exact workflow to follow when initializing brand identity:

1. **Ask Which Template:** Ask the user which design template to use (rumiku, makeyo, or a new brand).
2. **If using an existing template:** Copy the template's design documents into the project and apply them. Skip to step 5.
3. **If creating a new brand:** Ask the user to provide their brand logo (as an uploaded image file or URL).
4. **Extract Colors Reliably:** Analyze the provided logo to extract the primary and secondary brand colors.
   - **For SVG logos:** Read the file text directly and extract the `fill` or `stroke` hex codes.
   - **For PNG/JPG logos:** DO NOT rely on vision estimation (it hallucinates hex codes). Instead, strictly run the helper script: 
     `python skills/bootstrap-project-design/scripts/extract_colors.py <path_to_logo>`
     *(If the script fails due to a missing dependency, run `pip install Pillow` and try again).*
5. **Ask for Details:** Ask the user for their brand name and their preferred fonts (Display, Body, Monospace).
6. **Generate Documents:** Create project-specific `BRAND-CORE.md` and design token documents in the project root, using the chosen template's structure as the base.

## Quick Reference

| Step | Action | Description |
|------|--------|-------------|
| 1 | Ask | Which template to use, or if creating a new brand |
| 2 | Extract | Run `extract_colors.py` for PNGs, or read SVG text directly (new brands only) |
| 3 | Query | Ask for brand name and font preferences (Display/Body/Mono) |
| 4 | Generate | Write `BRAND-CORE.md` and design docs using the template's structure |

## Implementation

When generating the project-specific documents, use these structures:

### BRAND-CORE.md

```markdown
# Brand Core Identity
- **Brand Name:** [Name]
- **Primary Color:** [Hex]
- **Secondary Color:** [Hex]
- **Display Font:** [Font]
- **Body Font:** [Font]
- **Monospace Font:** [Font]
```

### Design Token Documents

Copy the structure from the chosen template's `01-DESIGN-TOKENS.md`, but REPLACE the color values with the colors extracted from the logo. Keep all other tokens (radius, typography scale, effects) from the template, unless the user explicitly requests changes.

## Common Mistakes

| Mistake | Correction |
|---------|------------|
| Proceeding with example colors | ALWAYS ask the user for their logo first when creating a new brand. |
| Extracting only one color | Extract at least a Primary and Secondary color to support gradients and glows. |
| Generating full component docs | Only generate `BRAND-CORE.md` and `01-DESIGN-TOKENS.md`. The layout, animations, and components come from the template. |
| Ignoring existing templates | Check `templates/` first — the brand may already have a complete template. |

## Red Flags - STOP and Start Over

- "I'll just use the default placeholder colors."
- "I'll generate the tokens without asking for a logo."
- "I'll rewrite the entire design template."

**All of these mean: Stop. Ask the user for their logo. Extract the colors.**
