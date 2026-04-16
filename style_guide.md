# Aqua Clear Pool Care — Style Guide

> **Reference this file when creating ANY new page or component.** Every new page must feel like it belongs to the same family as the existing homepage.

---

## Typography

| Role | Font | Tailwind Class | Usage |
|---|---|---|---|
| **Headings** | DM Serif Display (400) | `font-serif` | All `h1`–`h6`, blockquotes, stat numbers |
| **Body** | DM Sans | `font-sans` | Paragraphs, labels, buttons, nav links |
| **Labels/Tags** | DM Sans (bold) | `font-sans font-bold` | Section labels, uppercase tags |

### Heading Hierarchy

| Level | Example Class | Context |
|---|---|---|
| `h1` | `text-5xl md:text-7xl lg:text-[90px] font-serif` | Hero title only — one per page |
| `h2` | `text-4xl md:text-5xl lg:text-6xl font-serif` | Major section headings |
| `h3` | `text-3xl md:text-4xl font-serif` | Sub-section headings |
| `h4` | `text-2xl font-serif` | Card titles |
| Section label | `text-xs uppercase tracking-[0.2em] text-navy-pool font-bold mb-4` | "Our Philosophy", "What We Do", etc. |

---

## Color Palette

| Token | Hex | Tailwind | Usage |
|---|---|---|---|
| **Navy Deep** | `#0A1628` | `navy-deep` | Primary dark: backgrounds, text, buttons |
| **Navy Pool** | `#0D3B5E` | `navy-pool` | Secondary dark: hover states, labels |
| **Aqua** | `#4FC3D8` | `aqua` | Brand accent: highlights, CTAs, icons, italic text |
| **Cyan** | `#00D4F0` | `cyan` | Hover state for aqua elements |
| **Teal** | `#1A6B8A` | `teal` | Italic accent text in headings |
| **Off-White** | `#F0EDE6` | `offwhite` | Light backgrounds, body bg |
| **Sand** | `#E8DFD0` | `sand` | Warm alternate section backgrounds |
| **Stone** | `#8A9BA8` | `stone` | Muted text on dark backgrounds |
| **Green** | `#7BC67E` | `green` | Success states, checkmarks |

### Color Rules
- **Dark sections**: `bg-navy-deep text-white` — use `text-offwhite/70` for body, `text-aqua` for accents
- **Light sections**: `bg-offwhite` or `bg-sand` — use `text-navy-deep` for body, `text-navy-deep/70` for muted
- **CTA buttons**: `bg-aqua text-navy-deep` → hover: `bg-cyan`
- **Secondary buttons**: `border border-navy-deep text-navy-deep` → hover: `bg-navy-deep text-white`
- **Never** use raw hex values — always use the Tailwind tokens above

---

## Layout

| Property | Value | Notes |
|---|---|---|
| **Max content width** | `max-w-[1400px]` | Consistent on ALL sections |
| **Horizontal padding** | `px-6 md:px-12 lg:px-20` | Standard for all content blocks |
| **Section vertical padding** | `py-24 md:py-32` | Standard section spacing |
| **Content grid** | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` | Service cards, features |

---

## Components & Patterns

### Section Template
Every new section should follow this structure:
```tsx
<section className="bg-offwhite py-24 md:py-32" id="section-id">
  <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
    {/* Section label */}
    <h2 className="text-xs uppercase tracking-[0.2em] text-navy-pool font-bold mb-4">
      Label
    </h2>
    {/* Section heading */}
    <h3 className="text-4xl md:text-5xl lg:text-6xl text-navy-deep mb-8">
      Title <span className="italic text-teal">Accent</span>
    </h3>
    {/* Content */}
  </div>
</section>
```

### CTA Button (Primary)
```tsx
<a href="/contact" className="inline-block bg-aqua text-navy-deep px-10 py-5 font-bold uppercase tracking-wider hover:bg-cyan transition-colors duration-300">
  Get a Free Assessment
</a>
```

### CTA Button (Secondary/Outline)
```tsx
<a href="#" className="inline-block border border-navy-deep text-navy-deep px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-navy-deep hover:text-white transition-colors duration-300">
  Learn More
</a>
```

### Card Pattern
```tsx
<div className="bg-white p-8 md:p-10 border border-navy-deep/5 group cursor-pointer hover:shadow-lg transition-shadow duration-300">
  {/* Content */}
</div>
```

---

## Images

- **All images** must have descriptive `alt` text
- **External images**: Always add `referrerPolicy="no-referrer"`
- **Image styling**: Prefer `rounded-2xl` for standalone images, no rounding for full-bleed
- **Grayscale effect**: `grayscale hover:grayscale-0 transition-all duration-700` (used in About section)
- **Image sources**: Use pool-related Unsplash photos ONLY. Verify the image actually shows a pool/water/technician before using

---

## Interactions

| Element | Behavior |
|---|---|
| All clickable elements | Must have `cursor-pointer` |
| Hover transitions | `transition-colors duration-200` or `transition-all duration-300` |
| Links | Color shift only — no layout shift |
| Cards | `hover:shadow-lg` or `hover:-translate-y-1` — subtle only |
| Form focus | `focus:outline-none focus:border-aqua focus:ring-1 focus:ring-aqua` |

---

## Page Structure for New Pages

Every new page should include:
1. **Navbar** (existing shared component)
2. **Hero banner** — shorter than homepage hero. Pattern: `h-[50vh] min-h-[400px]` with image + overlay + title
3. **Content sections** — using section template above
4. **FinalCTA** (existing shared component) — reuse on every page
5. **Footer** (existing shared component)

### Inner Page Hero Pattern
```tsx
<section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img src="..." alt="..." className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
  </div>
  <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 pb-16">
    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-4">
      Page Title
    </h1>
    <p className="text-lg text-offwhite/80 max-w-2xl">
      Page subtitle text.
    </p>
  </div>
</section>
```

---

## SEO

- Every page needs unique `<title>` and `<meta description>` via Next.js `metadata` export
- Use `generateMetadata()` for dynamic pages
- Title format: `Page Name | Aqua Clear Pool Care`
- One `<h1>` per page only
- Use semantic HTML (`<section>`, `<article>`, `<nav>`, `<footer>`)

---

## Anti-Patterns (DO NOT DO)

- ❌ Do NOT use emojis as icons — use Lucide icons
- ❌ Do NOT use `rounded-full` for content images (rectangular `rounded-2xl` only)
- ❌ Do NOT use inconsistent max-widths — always `max-w-[1400px]`
- ❌ Do NOT add scale transforms on hover that shift layout
- ❌ Do NOT use raw hex colors — always use the Tailwind tokens
- ❌ Do NOT forget `cursor-pointer` on interactive elements
- ❌ Do NOT reference "KMK" or "Sacramento" — this is Aqua Clear / Austin TX
