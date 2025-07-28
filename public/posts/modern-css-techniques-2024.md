---
title: "Modern CSS Techniques for 2024"
date: "2024-01-08"
excerpt: "Explore the latest CSS features and techniques that are revolutionizing how we style modern web applications."
author: "Trần Hữu Tài  (Dev On Wheels)"
readTime: 6
tags: ["CSS", "Web Development", "Frontend"]
featured: true
image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
---

# Modern CSS Techniques for 2024

CSS has evolved tremendously in recent years. Here are the modern techniques every developer should know to create better, more maintainable stylesheets.

## Container Queries

Finally, we can style elements based on their container size, not just the viewport:

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
  
  .card__image {
    aspect-ratio: 1;
  }
}

@container (min-width: 600px) {
  .card {
    grid-template-columns: 1fr 3fr;
  }
}
```

This is revolutionary for component-based design systems where components need to adapt to their container, not the viewport.

## CSS Grid Subgrid

Subgrid allows nested grids to align with their parent grid:

```css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.child {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: span 3;
}

.grandchild {
  /* These will align with the parent grid columns */
  grid-column: 1 / 3;
}
```

Perfect for card layouts where you want consistent alignment across nested elements.

## Custom Properties (CSS Variables) Advanced Patterns

Dynamic theming made easy with CSS custom properties:

```css
:root {
  --primary-hue: 220;
  --primary-saturation: 100%;
  --primary-lightness: 50%;
  
  --primary-color: hsl(
    var(--primary-hue) 
    var(--primary-saturation) 
    var(--primary-lightness)
  );
  
  --primary-light: hsl(
    var(--primary-hue) 
    var(--primary-saturation) 
    calc(var(--primary-lightness) + 20%)
  );
}

[data-theme="dark"] {
  --primary-lightness: 70%;
}

[data-theme="high-contrast"] {
  --primary-saturation: 0%;
  --primary-lightness: 0%;
}
```

## Logical Properties

Write CSS that works for all writing modes:

```css
.element {
  /* Instead of margin-left */
  margin-inline-start: 1rem;
  
  /* Instead of margin-top and margin-bottom */
  margin-block: 2rem;
  
  /* Instead of border-bottom */
  border-block-end: 1px solid var(--border-color);
  
  /* Instead of padding-left and padding-right */
  padding-inline: 1.5rem;
}
```

This makes your CSS automatically work for RTL languages and vertical writing modes.

## Modern Layout with CSS Grid and Flexbox

### The Holy Grail Layout (Modern Version)

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 200px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

@media (max-width: 768px) {
  .layout {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

### Intrinsic Web Design

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    padding: 2rem;
  }
}
```

## Advanced Selectors

### :has() - The Parent Selector

```css
/* Style a card that contains an image */
.card:has(img) {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

/* Style a form that has invalid inputs */
.form:has(:invalid) {
  border-color: red;
}

/* Style navigation when it contains a current page link */
.nav:has(.current) {
  background-color: var(--active-bg);
}
```

### :is() and :where() for Grouping

```css
/* :is() adds specificity */
:is(h1, h2, h3, h4, h5, h6) {
  font-family: var(--heading-font);
  line-height: 1.2;
}

/* :where() has zero specificity */
:where(ul, ol) :where(ul, ol) {
  margin-block: 0;
}
```

## Modern Animation Techniques

### View Transitions API

```css
@view-transition {
  navigation: auto;
}

.page-transition {
  view-transition-name: page-content;
}

::view-transition-old(page-content) {
  animation: slide-out 0.3s ease-out;
}

::view-transition-new(page-content) {
  animation: slide-in 0.3s ease-out;
}

@keyframes slide-out {
  to { transform: translateX(-100%); }
}

@keyframes slide-in {
  from { transform: translateX(100%); }
}
```

### Scroll-Driven Animations

```css
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-on-scroll {
  animation: reveal linear;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
```

## Conclusion

These modern CSS techniques enable us to:

- Create more responsive and adaptive layouts
- Write more maintainable and logical code
- Build better user experiences with smooth animations
- Support international users with logical properties
- Reduce JavaScript dependencies for layout and styling

The future of CSS is bright, and these features are making web development more powerful and enjoyable than ever before.