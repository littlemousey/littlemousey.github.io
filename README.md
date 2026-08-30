# littlemousey.github.io

Personal portfolio site of [Ans de Nijs](https://littlemousey.github.io), built with [Astro](https://astro.build) and React, styled with Tailwind CSS and deployed to GitHub Pages.

## Tech stack

- **[Astro](https://astro.build)** — static site generator, renders a single page at build time
- **[React 19](https://react.dev)** — all sections are React islands, hydrated with `client:only="react"`
- **[Tailwind CSS 4](https://tailwindcss.com)** — via the `@tailwindcss/vite` plugin (no `tailwind.config.js`; theme lives in `src/styles/global.css`)
- **[shadcn/ui](https://ui.shadcn.com)** — "new-york" style components in `src/components/ui/`, configured in `components.json`
- **[Framer Motion](https://motion.dev)** — scroll and entrance animations, wrapped by `MotionWrapper` and `GlassCard`
- **[lucide-react](https://lucide.dev)** — icons

## Project structure

```text
/
├── .github/workflows/deploy.yml   # GitHub Pages build & deploy
├── public/                        # favicon, profile picture
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui primitives (button, card, glass-card, theme-toggle)
│   │   ├── GlassHeader.tsx        # sticky nav
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ConferencesSection.tsx
│   │   ├── VolunteerSection.tsx
│   │   ├── ArticlesSection.tsx
│   │   ├── TimelineItem.tsx       # shared timeline entry
│   │   ├── MotionWrapper.tsx      # animation helper
│   │   └── Footer.tsx
│   ├── layouts/Layout.astro       # HTML shell, fonts, dark-mode script
│   ├── lib/
│   │   ├── data.ts                # ← all site content lives here
│   │   └── utils.ts               # `cn()` class merge helper
│   ├── pages/index.astro          # the only page; composes the sections
│   └── styles/global.css          # Tailwind import + theme tokens
├── astro.config.mjs
└── components.json                # shadcn/ui config
```

## Updating the content

Everything shown on the site — work experience, education, skills, conferences, volunteer work, articles and contact links — is data in [`src/lib/data.ts`](src/lib/data.ts). Editing that file is usually all that's needed; the components render whatever is exported there:

| Export                | Renders in                |
| :-------------------- | :------------------------ |
| `personalInfo`        | `HeroSection`, `GlassHeader`, `Footer` |
| `workExperience`      | `ExperienceSection`       |
| `education`           | `EducationSection`        |
| `skills`              | `SkillsSection`           |
| `conferences`         | `ConferencesSection`      |
| `volunteerExperiences`| `VolunteerSection`        |
| `articles`            | `ArticlesSection`         |

To add a whole new section, create a component in `src/components/`, add its data to `data.ts`, and include it in [`src/pages/index.astro`](src/pages/index.astro) with `client:only="react"`.

## Development

Requires Node.js 22 (the version used by the deploy workflow).

```sh
npm install     # install dependencies
npm run dev     # dev server on http://localhost:4321
npm run build   # production build into ./dist/
npm run preview # preview the production build locally
```

Path alias `@/*` maps to `./src/*`.

## Theming

The theme follows the visitor's `prefers-color-scheme` by default and can be switched with the toggle in the header. The choice is stored in `localStorage` and applied by an inline script in [`src/layouts/Layout.astro`](src/layouts/Layout.astro) before paint, so there is no flash of the wrong theme. Colours are CSS custom properties defined in `src/styles/global.css`.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which runs `npm ci && npm run build`, adds a `.nojekyll` file, and publishes `dist/` to GitHub Pages. The workflow can also be run manually from the Actions tab.

## License

[MIT](LICENSE)
