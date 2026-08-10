# PHP Developer Portfolio Plan

## Goal
Build a polished, single-person portfolio site for a PHP developer, inspired by kostecki.dev, with a dark developer-first aesthetic.

## Design decisions (locked from your answers)
- **Palette:** Midnight Indigo — deep navy background (#0a0a1a), indigo accents (#4f46e5), soft text.
- **Typography:** JetBrains Mono for headings/code accents, Work Sans for body text.
- **Layout:** Hero grid — a strong hero banner followed by a card grid for projects and skills.
- **Sections:** Hero/intro, Projects, Skills, Contact.

## Build outline

1. **Design tokens & fonts**
   - Update `src/styles.css` with Midnight Indigo oklch tokens mapped to `--background`, `--foreground`, `--primary`, `--muted`, etc.
   - Load JetBrains Mono and Work Sans via `<link>` in `src/routes/__root.tsx` head.

2. **Shared chrome**
   - Add a minimal fixed/sticky header with logo/name and navigation.
   - Add a compact footer with social links and copyright.
   - Wire both into `src/routes/__root.tsx` around `<Outlet />`.

3. **Routes & SEO metadata**
   - Rewrite `src/routes/index.tsx` as the hero-grid homepage: intro, featured projects, skills, and a contact CTA.
   - Create `src/routes/projects.tsx` for the full project showcase.
   - Create `src/routes/skills.tsx` for the skills/tools page.
   - Create `src/routes/contact.tsx` for contact links/socials.
   - Each leaf route gets its own `head()` with unique title, description, og:title, og:description, og:type, and twitter:card.

4. **Content & components**
   - Use sample PHP-developer content (Laravel, Symfony, MySQL, Docker, etc.) that you can later replace with your real projects.
   - Build small reusable components: ProjectCard, SkillBadge, SectionHeading, SocialLink.
   - Keep everything static — no backend or auth needed for this portfolio.

5. **Polish**
   - Responsive layout, hover states, and accessible contrast.
   - Remove the placeholder blank-page image from `src/routes/index.tsx`.
