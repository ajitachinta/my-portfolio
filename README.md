# Ajita Chinta — Portfolio

My personal portfolio site — a single-page application showcasing my background as a
Technical Program Manager and Senior Software Engineer, the programs I've delivered,
my technical skills, and how to get in touch.

🔗 **Live site:** https://ajitachinta.github.io/my-portfolio/

## Features

- **Responsive, single-page layout** — About, Featured Programs, Skills, FAQ, and Contact
- **Dark / light theme toggle** with no-flash theme loading and `prefers-color-scheme` support
- **Scroll progress bar** and subtle **scroll-reveal animations** (respects `prefers-reduced-motion`)
- **Ambient gradient background** and a custom SVG monogram logo
- Built mobile-first with CSS Grid and Flexbox — no UI framework

## Tech Stack

- [React](https://react.dev/) — component-based UI
- [Vite](https://vitejs.dev/) — build tooling and dev server with HMR
- Plain CSS with custom properties (CSS variables) for theming

## Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.jsx        nav bar, theme toggle, mobile menu
    ScrollProgress.jsx scroll progress indicator
    About.jsx         hero / intro section
    Projects.jsx      "Featured Programs" cards
    Skills.jsx        categorized skill badges
    FAQ.jsx           expandable Q&A accordion
    Contact.jsx       contact method cards
  App.jsx             root component + scroll-reveal observer
  main.jsx            app entry point
  index.css           global styles, theme variables, animations
```

## Deployment

The site is deployed to **GitHub Pages** via GitHub Actions. Every push to `main`
triggers the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the app and publishes the `dist/` output.

---

Built by Ajita Chinta · Seattle, WA
