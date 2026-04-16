# Aqua Clear Pool Care — Project Context

> **AI AGENT: READ THIS FIRST before doing anything on this project.**

---

## 🗂️ What This Project Is

- **Business:** Aqua Clear Pool Care — residential pool service in **Austin, TX**
- **Website type:** Marketing/lead-capture site (Next.js App Router)
- **Project path:** `c:\Users\Olatheruler\pool cleaner\aquaclear-pool-service`
- **Dev command:** `npm run dev` inside `aquaclear-pool-service` directory
- **Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS
- **Phone:** (512) 658-3922 → `tel:+15126583922`
- **Email:** service@aquaclearpoolcare.com
- **Service area:** Austin, West Lake Hills, Cedar Park, Round Rock, Lakeway, Bee Cave

---

## 📁 Project Structure

```
src/
  app/
    page.tsx          ← Main home page
    layout.tsx        ← Root layout (Navbar, FinalCTA, Footer)
    globals.css       ← Global styles
    about/
      page.tsx        ← Dedicated About Us page
    contact/
      page.tsx        ← Dedicated Contact Us page
    services/
      page.tsx        ← Comprehensive Services hub
  components/
    Navbar.tsx        ← Fixed nav with phone number (512) 658-3922 visible
    Hero.tsx          ← Hero → links to #quote
    TrustBar.tsx      ← Trust signals strip
    Intro.tsx         ← Brand intro (⚠️ overlaps with About — consider merging)
    Services.tsx      ← Service cards (no images, just icons — needs thumbnails)
    WhyUs.tsx         ← 98% retention stat — text only, needs image
    HowItWorks.tsx    ← 4-step process (Step 1 now says "Reach Out / Call Us")
    BeforeAfter.tsx   ← Slider before/after (stock photos, not real client work yet)
    Reviews.tsx       ← Hardcoded reviews (NOT verified Google reviews — future: embed)
    Pricing.tsx       ← 3 plan cards → all link to #quote
    ServiceArea.tsx   ← Google Maps iframe
    About.tsx         ← Team/about section (image fixed: pool tech, not suited man)
    FinalCTA.tsx      ← Lead form [id="quote"] → wired to Web3Forms
    Footer.tsx        ← Social links fixed (Instagram/Facebook/Google)
style_guide.md        ← Single source of truth for typography, colors, and components
```

---

## ✅ What's Been Fixed (Do NOT redo these)

| Fix | Status | File |
|---|---|---|
| `#quote` anchor — CTAs now work | ✅ Done | `FinalCTA.tsx` — `id="quote"` added |
| Form now submits to Web3Forms + success state | ✅ Done | `FinalCTA.tsx` |
| Phone in navbar (always visible desktop) | ✅ Done | `Navbar.tsx` |
| About image — pool tech, not suited man | ✅ Done | `About.tsx` |
| Footer social links — real URLs | ✅ Done | `Footer.tsx` |
| HowItWorks Step 1 copy — no longer says "fill form" | ✅ Done | `HowItWorks.tsx` |
| Services thumbnails — added pool images | ✅ Done | `Services.tsx` |
| WhyUs image — added water testing photo | ✅ Done | `WhyUs.tsx` |

---

## 🔧 Still To Do (priority order)

1. **Web3Forms key** — Set `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local` (free tier at web3forms.com)
2. **Real social URLs** — Confirm Instagram/Facebook real handles and update Footer.tsx
3. **Google Reviews link** — Update to real Google Maps listing URL
4. **Reviews.tsx** — Replace hardcoded reviews with real testimonials or a Google embed
5. **Intro.tsx** — Repurpose as a stats bar or remove (currently duplicates About)
6. **BeforeAfter.tsx** — Replace with real client before/after photos when available

---

## 🎨 Design System (Tailwind Custom Colors)

| Token | Usage |
|---|---|
| `navy-deep` | Primary dark color (text, buttons) |
| `navy-pool` | Secondary navy/teal |
| `aqua` | Brand accent (turquoise) |
| `cyan` | Lighter aqua hover state |
| `sand` | Warm background sections |
| `offwhite` | Light body text on dark bg |
| `teal` | Italic accent text |

---

## 💡 Business Context

- **Brand position:** Premium, residential-only (no commercial contracts)
- **Key differentiator:** Lab-grade chemistry, detailed visit reports, reliability
- **Pool analysis insight:** Top performers always show phone in nav, use real Google reviews, have working forms
- **Sunniva family of brands:** Owned by Crystal C. Wu, born out of frustration finding reliable home vendors. Sister company to Juany Cleaning Service. Vision is to be a one-stop shop for Austin home services.

---

## ⚠️ Do Not Do

- Do NOT work in `pool cleaner/pool website two/` — that is the KMK (Sacramento) project, different client
- Do NOT use styled-components or CSS modules — use Tailwind utility classes only
- Do NOT add new npm packages without checking if a simpler solution exists
