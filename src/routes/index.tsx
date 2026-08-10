import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Server } from "lucide-react";
import { ExperienceCard } from "../components/ExperienceCard";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { SkillBadge } from "../components/SkillBadge";

const title = "Backend Developer · PHP & Laravel";
const description =
  "Backend developer with 4 years of commercial experience building and maintaining production PHP backends — APIs, infrastructure integrations, and WordPress automation in a B2B SaaS product.";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const stats = [
  { label: "commercial", value: "4 years" },
  { label: "infra integrations", value: "15+" },
  { label: "B2B product", value: "SaaS platform" },
];

const experience = [
  {
    company: "B2B SaaS platform",
    role: "Backend Developer",
    duration: "3.5+ years",
    summary:
      "I develop the Laravel backend of a production B2B platform that automates WordPress management for service companies — APIs, integrations with external infrastructure, and the logic for managing WordPress instances.",
    highlights: [
      "Infrastructure integrations — hosting panels (cPanel, Plesk, DirectAdmin), DNS (PowerDNS, Cloudflare), mail servers and SSL automation (Let's Encrypt)",
      "WordPress lifecycle — instance import and management, Git support, onboarding flows",
      "Backup and storage — local and remote backups (S3, FTP, SFTP, FTPS)",
      "Billing and API — WHMCS integrations and platform API development",
      "Full-stack — Vue.js / Vuetify frontend for features that span backend and UI",
    ],
  },
  {
    company: "Hosting billing modules",
    role: "PHP Developer",
    duration: "~6 months",
    summary:
      "Custom WHMCS modules for a hosting billing platform — business logic, integrations, and operational tooling (PHP, JavaScript, Smarty).",
    highlights: [
      "Billing automation — invoice sub-statuses, automated refunds, upgrades for early payments",
      "Integrations — domain data from Plesk, container-based storage tooling",
      "Operational tooling — bulk update utilities for large WHMCS installations",
    ],
  },
];

const featuredProjects = [
  {
    title: "Household budget app",
    description:
      "A budget app with spending categories and reports, built on Laravel and MySQL, with a live demo online.",
    tags: ["Laravel", "MySQL", "Reports"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Mobile companion app",
    description:
      "A cross-platform mobile app bundling content and daily tools in one place, built with Ionic and Vue.",
    tags: ["Ionic", "Vue", "Capacitor"],
    repoUrl: "#",
  },
  {
    title: "Menu Maker (WIP)",
    description:
      "Weekly meal planning with AI suggestions, ingredient scaling, and PDF export. Laravel, Vue and Inertia.",
    tags: ["Laravel", "Vue", "Inertia.js", "AI"],
    repoUrl: "#",
  },
];

const featuredSkills = [
  { name: "PHP", icon: Code2, level: "Core language" },
  { name: "Laravel", icon: Server, level: "Production backends" },
  { name: "MySQL", icon: Database, level: "Data modelling & queries" },
];

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
              // Backend Developer · Laravel
            </p>
            <h1 className="mt-4 font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              I build and maintain production PHP backends.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Backend developer with 4 years of commercial experience — API integrations, infrastructure,
              and WordPress automation in a B2B SaaS product.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Let's talk <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                View my work
              </Link>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border/50 bg-card p-4">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 font-mono text-lg font-semibold text-card-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-primary">$ cat about.md</p>
          <SectionHeading
            title="About me"
            subtitle="What I do day to day and how I like to work."
          />
          <div className="max-w-3xl space-y-4 text-muted-foreground">
            <p>
              For 4 years I've been building PHP backends — mostly Laravel — on a production B2B product
              that helps service companies automate WordPress management.
            </p>
            <p>
              I like owning a feature from the backend layer through to working business logic — and when
              needed, I pick up the frontend (Vue.js). I work on a live product, so I care about code that
              actually works for customers.
            </p>
            <p>
              Day to day I use AI tools to support implementation and refactoring. Outside of code — family,
              time outdoors, and keeping up with the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-border/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-primary">$ git log --experience</p>
          <SectionHeading
            title="Experience"
            subtitle="Commercial work on production PHP systems and integrations."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {experience.map((item) => (
              <ExperienceCard key={item.company} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-border/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-primary">$ ls projects/</p>
          <SectionHeading
            title="Personal projects"
            subtitle="Side projects where I try out ideas and tools outside of commercial work."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              See all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="border-t border-border/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-primary">$ ls skills/</p>
          <SectionHeading
            title="Core stack"
            subtitle="The stack I use to build and maintain production backends — and frontend when a feature requires it."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSkills.map((skill) => (
              <SkillBadge key={skill.name} {...skill} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Explore all skills <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-border/50 bg-card p-8 text-center sm:p-12">
            <h2 className="font-mono text-2xl font-bold text-card-foreground sm:text-3xl">
              Want to learn more about my experience?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Interested in working together or chatting about backend? Get in touch.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Let's talk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
