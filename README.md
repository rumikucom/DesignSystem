# Universal Design System

> A tech-stack-agnostic design system extracted from production. Drop these files into any project's root or `.agents/` directory, and your AI coding agent will follow these design patterns automatically.

## Overview

This repository contains a comprehensive design system that captures exact visual languages, spacing rules, component shapes, animation timing, and layout patterns. It is designed to be **universal** — meaning it works with any tech stack (React, Vue, Svelte, vanilla HTML/CSS, Flutter, etc.) and any CSS methodology (Tailwind, vanilla CSS, SCSS, CSS-in-JS, etc.).

## AI-Agent Ready

This design system is built to be used by AI coding agents (like Claude Code, Cursor, GitHub Copilot, or Antigravity). 

Instead of manually configuring your colors and fonts, the included AI skill automates the setup process:
1. **Logo Color Extraction**: The agent will ask for your brand's logo and extract the exact primary and secondary colors using vision analysis.
2. **Automated Tokens**: The agent generates project-specific `BRAND-CORE.md` and `DESIGN-TOKENS.md` files based on your logo and font choices, automatically applying them across the universal layout patterns.

## Files in This System

| File | Description |
|------|-------------|
| [`00-OVERVIEW.md`](./00-OVERVIEW.md) | System index, tech stack adaptation guide, and AI integration overview. |
| [`01-DESIGN-TOKENS.md`](./01-DESIGN-TOKENS.md) | The universal reference structure for colors, radii, typography, shadows, and glassmorphism. |
| [`02-LAYOUT-AND-SPACING.md`](./02-LAYOUT-AND-SPACING.md) | Page shell structure, container widths, navbar dimensions, and section spacing rhythm. |
| [`03-COMPONENTS.md`](./03-COMPONENTS.md) | Anatomy and states for every component (navbar, hero, cards, buttons, footer, ASCII background). |
| [`04-ANIMATIONS.md`](./04-ANIMATIONS.md) | Keyframe animations, transition patterns, scroll-reveal systems, and micro-interactions. |
| [`05-PAGE-PATTERNS.md`](./05-PAGE-PATTERNS.md) | Layer stack architecture, section ordering templates, and the 10 universal design rules. |

### AI Integration & Templates

| Folder | Contents |
|--------|----------|
| [`templates/`](./templates/) | Templates (like `BRAND-CORE.md`) that your AI agent will fill out during project setup. |
| [`skills/`](./skills/) | Contains the `bootstrap-project-design` TDD-tested AI Skill that instructs agents on how to initialize the brand identity. |

## Quick Start

1. Clone or copy the contents of this repository into your new project.
2. Ensure the `skills/` subdirectory is moved or symlinked to your project's `.agents/skills/` folder so your AI agent discovers it.
3. Prompt your AI Agent: **"Apply the design system"** or **"Initialize the project design."**
4. The AI will guide you through uploading your logo and completing the brand identity setup.
