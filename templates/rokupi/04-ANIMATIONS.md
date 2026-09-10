# Animations & Transitions — Rokupi

> Motion guidelines for the Rokupi brand.

---

## Animation Philosophy

Rokupi's brand is friendly, straightforward, and retail-oriented. The animation style should reflect this by being snappy, clear, and unpretentious.

### Key Principles

- **No Shadows:** As mandated by the logo guidelines, do not use shadows. Thus, hover effects should not rely on drop shadows appearing or expanding.
- **Color Transitions:** Use the brand's vibrant primary colors (Blue `#0123FF` and Pink `#F40362`) for state changes.
- **Transformations:** Subtle scaling (growing or shrinking slightly) works well with the rounded Fredoka aesthetic to provide tactile feedback without relying on depth (shadows).

---

## Interaction Patterns

### Button Hover
Buttons should provide immediate visual feedback.
```css
/* Example: Color inversion or slight scale */
button {
  transition: transform 0.2s ease, background-color 0.2s ease;
}
button:hover {
  transform: scale(1.05);
}
```

### Page Transitions
Keep page transitions fast and flat. Simple fades or quick slides fit the no-nonsense retail vibe better than slow, cinematic transitions.
