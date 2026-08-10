import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Server, Container, Layers } from "lucide-react";
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
  { label: "Commercial experience", value: "4 yrs" },
  { label: "Infra integrations", value: "15+" },
  { label: "Live B2B product", value: "SaaS" },
];

const experience = [
  {
    index: "01",
    company: "B2B SaaS platform",
    role: "Backend Developer",
    duration: "3.5+ years",
    summary:
      "I develop the Laravel backend of a production B2B platform that automates WordPress management for service companies — APIs, integrations with external infrastructure, and the logic for managing WordPress instances.",
    highlights: [
      "Infrastructure integrations — hosting panels (cPanel, Plesk, DirectAdmin), DNS (PowerDNS, Cloudflare), mail servers and SSL automation",
      "WordPress lifecycle — instance import and management, Git support, onboarding flows",
      "Backup and storage — local and remote backups (S3, FTP, SFTP, FTPS)",
      "Billing and API — WHMCS integrations and platform API development",
      "Full-stack — Vue.js / Vuetify frontend for features that span backend and UI",
    ],
  },
  {
    index: "02",
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
    index: "01",
    title: "Household budget app",
    description:
      "A budget app with spending categories and reports, built on Laravel and MySQL, with a live demo online.",
    tags: ["Laravel", "MySQL", "Reports"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    index: "02",
    title: "Mobile companion app",
    description:
      "A cross-platform mobile app bundling content and daily tools in one place, built with Ionic and Vue.",
    tags: ["Ionic", "Vue", "Capacitor"],
    repoUrl: "#",
  },
  {
    index: "03",
    title: "Menu Maker",
    status: "WIP",
    description:
      "Weekly meal planning with AI suggestions, ingredient scaling, and PDF export. Laravel, Vue and Inertia.",
    tags: ["Laravel", "Vue", "Inertia.js", "AI"],
    repoUrl: "#",
  },
];

const coreStack = [
  { name: "PHP", icon: Code2, level: "Core language" },
  { name: "Laravel", icon: Server, level: "Production backends" },
  { name: "MySQL", icon: Database, level: "Data modelling" },
  { name: "Docker", icon: Container, level: "Environments" },
  { name: "Vue.js", icon: Layers, level: "Feature frontends" },
];

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="gradient-hero absolute inset-0" />
        <div aria-hidden="true" className="grid-lines absolute inset-0" />

        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  Backend Developer / Laravel
                </p>
              </div>

              <h1 className="mt-6 font-mono text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                I build and maintain
                <br />
                <span className="text-gradient">production PHP backends.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                4 years of commercial experience — API integrations, infrastructure, and WordPress
                automation inside a live B2B SaaS product.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
                >
                  Let's talk <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-mono text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  View my work
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="panel rounded-md p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  At a glance
                </p>
                <dl className="mt-5 divide-y divide-border">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-baseline justify-between py-3">
                      <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                      <dd className="font-mono text-xl font-bold text-foreground">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-5">
                  {["PHP", "Laravel", "MySQL", "Docker", "Vue.js"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-primary/25 bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading index="01 / About" title="How I work" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8">
            <p>
              For 4 years I've been building PHP backends — mostly Laravel — on a production B2B
              product that helps service companies automate WordPress management.
            </p>
            <p>
              I like owning a feature from the backend layer through to working business logic — and
              when needed, I pick up the frontend (Vue.js). I work on a live product, so I care about
              code that actually works for customers.
            </p>
            <p>
              Day to day I use AI tools to support implementation and refactoring. Outside of code —
              family, time outdoors, and keeping up with the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="02 / Experience"
            title="Commercial work"
            subtitle="Production PHP systems, integrations, and the business logic around them."
          />
          <div className="space-y-14">
            {experience.map((item) => (
              <ExperienceCard key={item.company} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="03 / Projects"
            title="Personal projects"
            subtitle="Side projects where I try out ideas and tools outside of commercial work."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
            >
              See all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core stack */}
      <section className="border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="04 / Stack"
            title="Core stack"
            subtitle="The tools I use to build and maintain production backends — and frontend when a feature requires it."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreStack.map((skill) => (
              <SkillBadge key={skill.name} {...skill} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
            >
              Explore all skills <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
        <div aria-hidden="true" className="gradient-hero absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            Want to learn more about my experience?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Interested in working together or chatting about backend? Get in touch.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
          >
            Let's talk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
