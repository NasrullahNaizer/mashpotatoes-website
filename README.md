# 🥔 MashPotatoes — Official Portfolio & Business Website

> Modern, affordable websites for local businesses ready to grow online.

**MashPotatoes** is a small web-development and design studio that creates modern, fast, and budget-friendly websites for local shops, barbershops, bakeries, cafes, and tradespeople.

This repository contains the official MashPotatoes business and portfolio website. It is built strictly with **HTML5, CSS3, and Vanilla JavaScript** with zero heavy framework bloat. It can be opened and tested directly by opening `index.html` in any web browser, or served using standard static hosting.

---

## 📁 1. File Structure & What Each File Does

```text
/
├── index.html          # Main semantic HTML5 webpage with all sections & JSON-LD SEO schema
├── style.css           # Complete CSS3 stylesheet: variables, glassmorphism, responsive rules & animations
├── script.js           # Vanilla JavaScript: navigation, mobile menu, scroll reveal, modals & form logic
├── assets/
│   ├── images/         # Showcase mockups (Aqua World, Barber Studio, Sweet Crumbs)
│   └── icons/          # Supporting assets and icon graphics
├── metadata.json       # Applet title and system metadata
└── README.md           # Documentation, editing guides, and deployment instructions
```

### Detailed Breakdown:
- **`index.html`**:
  - Contains semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Implements complete SEO metadata, Open Graph preview tags, and Schema.org `ProfessionalService` structured data.
  - Divided into clean, clearly commented sections: Navigation, Hero, Feature Highlights, Services ("What we build"), Portfolio ("Selected Work"), Why MashPotatoes, Process Timeline ("From idea to online"), Pricing ("Simple, Honest Pricing"), Honest Early Client Spotlight, About Studio ("Small team. Big ideas."), FAQ Accordion, Contact Form, Footer, and the Project Detail Modal.
- **`style.css`**:
  - Centralized design system using standard CSS custom properties (`:root`).
  - Dark futuristic glassmorphism aesthetic with subtle warm potato-golden accents (`#f5b335`).
  - Fully responsive with CSS `clamp()`, flexible grids, and mobile-first layouts.
  - Includes `@media (prefers-reduced-motion: reduce)` accessibility compliance.
- **`script.js`**:
  - Manages sticky navbar blur state upon scrolling.
  - Handles mobile hamburger toggle with full accessibility and keyboard traps.
  - Executes scroll-spy to highlight current active navigation sections.
  - Runs `IntersectionObserver` scroll-reveal animations.
  - Controls the interactive FAQ accordion with smooth height calculations.
  - Powers the portfolio concept modal with dynamic data injection.
  - Provides real-time frontend form validation for the contact and inquiry section.
  - Synchronizes pricing plan CTA buttons with the contact form selector.

---

## ✏️ 2. How to Change Business Information

All contact details and copy are centralized and easy to update:

1. **WhatsApp Number**:
   - In `index.html`, find `WHATSAPP_NUMBER_HERE` and replace it with your international number (without spaces or plus signs, e.g. `94771234567`).
   - Example:
     ```html
     <a href="https://wa.me/94771234567?text=Hi%20MashPotatoes..." ...>
     ```
2. **Email Address**:
   - In `index.html`, find `EMAIL_HERE` and replace it with your actual business email (e.g., `hello@mashpotatoes.lk`).
3. **Location**:
   - In the About section of `index.html`, locate the `<div class="location-tag">` to change the country, city, or neighborhood.
4. **Social Links**:
   - In the `<footer>` section of `index.html`, update the placeholder URLs for Instagram and Facebook.

---

## 🎨 3. How to Change Colors & Theming

All theme colors are defined at the very top of `style.css` inside the `:root` block:

```css
:root {
  /* Backgrounds */
  --bg-primary: #090b0e;          /* Main dark canvas */
  --bg-surface: #10141a;          /* Surface panel */
  --bg-surface-card: rgba(22, 28, 38, 0.7); /* Translucent glass cards */

  /* Text */
  --text-primary: #f8fafc;        /* High-contrast white */
  --text-muted: #94a3b8;          /* Secondary description text */

  /* Potato-Inspired Warm Golden Accent */
  --accent-gold: #f5b335;         /* Primary brand accent */
  --accent-gold-hover: #e6a422;   /* Hover state */
  --accent-gold-glow: rgba(245, 179, 53, 0.35);

  /* Corner Radii */
  --radius-lg: 20px;
  --radius-xl: 28px;
}
```
To change the accent color from gold to electric blue, emerald green, or orange, simply change the hex code for `--accent-gold` and its corresponding glow.

---

## 🚀 4. How to Add a Portfolio Project

Adding a new project requires two quick steps:

### Step A: Add a Card in `index.html`
Inside `<div class="portfolio-grid">` in `index.html`, duplicate one of the `<article class="portfolio-card">` blocks and update:
1. The domain in `.frame-url` (e.g. `myclient.lk`).
2. The image source in `<img src="./assets/images/your_new_image.jpg" ... />`.
3. The title and short description.
4. The `data-project-id="yournewid"` attribute on the "View Project" button.

### Step B: Add Details to `PORTFOLIO_DATA` in `script.js`
Open `script.js` and add an entry to the `PORTFOLIO_DATA` object matching your `data-project-id`:

```javascript
yournewid: {
  title: 'Urban Cafe',
  category: 'Cafe & Brunch Concept',
  description: 'A cozy, aesthetic website concept designed for an artisanal coffee shop.',
  image: './assets/images/your_new_image.jpg',
  targetAudience: 'Cafes, Coffee Shops, Bistros',
  deliverables: 'Drink Menu, Table Booking, Instagram Feed',
  turnaround: '3–4 Days',
  previewUrl: 'https://urbancafe.demo.lk', // Put your live link here!
},
```

---

## 💰 5. How to Change Pricing

All pricing plans are located in the Pricing Section (`<section class="section">`) of `index.html`:

1. **Starter Plan Rate**:
   - Locate `<span class="pricing-amount">Rs. 2,500</span>` and edit the amount or currency.
   - Edit the bullet points inside `<ul class="pricing-features-list">`.
2. **Business Plan**:
   - Locate the `BUSINESS` card to modify custom pricing wording, features, or promotional tags.
3. **Footnote**:
   - Update the `<p class="pricing-notice">` note at the bottom of the section.

---

## 🌐 6. How to Deploy the Website

Because this website uses pure HTML, CSS, and JavaScript with standard relative paths, you can deploy it anywhere in seconds:

### Option 1: GitHub Pages (Free)
1. Push this repository to GitHub.
2. Go to your repository's **Settings > Pages**.
3. Under **Branch**, select `main` and root `/`.
4. Click **Save**. Your site is live!

### Option 2: Netlify or Vercel (Free)
1. Drag and drop the project folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. Or link your GitHub repository to Vercel/Netlify. Set build command to empty and publish directory to `.`.

### Option 3: Traditional cPanel or Shared Hosting
1. Upload `index.html`, `style.css`, `script.js`, and the `/assets` folder into your `public_html` directory via FTP or File Manager.

### Option 4: Local Testing
Double-click `index.html` on your computer to open it immediately in any browser (Chrome, Safari, Firefox, Edge).
