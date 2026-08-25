---
name: bootstrap-project-design
description: Use when starting a new project with the universal design system or applying brand colors and typography to a new codebase
---

# Bootstrap Project Design

## Overview
This skill establishes the core brand identity for a new project using the universal design system. It ensures that projects use authentic brand colors extracted directly from the user's logo instead of relying on default placeholder colors.

## When to Use

- Initializing a new project that uses the universal design system
- Setting up design tokens for a new codebase
- When a user asks to "apply the design system" or "setup the brand"
- DO NOT use for modifying existing, established project color tokens unless specifically requested

## Core Pattern

The exact workflow to follow when initializing brand identity:

1. **Stop and Ask:** Ask the user to provide their brand logo (as an uploaded image file or URL).
2. **Vision Extraction:** Analyze the provided logo image to extract the primary and secondary brand colors.
3. **Ask for Details:** Ask the user for their brand name and their preferred fonts (Display, Body, Monospace).
4. **Generate Documents:** Create project-specific `BRAND-CORE.md` and `DESIGN-TOKENS.md` files in the project root.

## Quick Reference

| Step | Action | Description |
|------|--------|-------------|
| 1 | Ask | Request logo image upload or URL from the user |
| 2 | Extract | Use vision capabilities to identify the 2 main brand colors |
| 3 | Query | Ask for brand name and font preferences (Display/Body/Mono) |
| 4 | Generate | Write `BRAND-CORE.md` and `DESIGN-TOKENS.md` |

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

### DESIGN-TOKENS.md

Copy the structure of `design-system/01-DESIGN-TOKENS.md` from the universal design system, but REPLACE the `--primary` and `--secondary` hex values (and their light/dark mode equivalents) with the colors extracted from the logo. Keep all other tokens (backgrounds, radius, typography scale, effects) identical to the universal reference, unless the user explicitly requests changes.

## Common Mistakes

| Mistake | Correction |
|---------|------------|
| Proceeding with example colors | ALWAYS ask the user for their logo first. The example colors are just placeholders. |
| Extracting only one color | Extract at least a Primary and Secondary color to support the design system's mesh gradients and ambient glows. |
| Generating full component docs | Only generate `BRAND-CORE.md` and `DESIGN-TOKENS.md`. The layout, animations, and components remain universal and should simply be referenced. |

## Red Flags - STOP and Start Over

- "I'll just use the default neon lime and purple colors."
- "I'll generate the tokens without asking for a logo."
- "I'll rewrite the entire design system."

**All of these mean: Stop. Ask the user for their logo. Extract the colors.**
