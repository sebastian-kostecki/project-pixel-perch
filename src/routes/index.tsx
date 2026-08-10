import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Server } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { SkillBadge } from "../components/SkillBadge";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "PHP Developer — Portfolio" },
      { name: "description", content: "Portfolio of a PHP developer building robust web applications with Laravel, Symfony, and modern tooling." },
      { property: "og:title", content: "PHP Developer — Portfolio" },
      { property: "og:description", content: "Portfolio of a PHP developer building robust web applications with Laravel, Symfony, and modern tooling." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const featuredProjects = [
  {
    title: "E-commerce API",
    description: "A RESTful e-commerce API built with Laravel and MySQL, featuring authentication, payments, and inventory management.",
    tags: ["Laravel", "MySQL", "REST API", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, role-based access control, and automated notifications.",
    tags: ["Symfony", "PostgreSQL", "Docker", "Redis"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Developer Dashboard",
    description: "An analytics dashboard for monitoring application performance, errors, and user activity across projects.",
    tags: ["PHP", "React", "Tailwind", "Chart.js"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

const featuredSkills = [
  { name: "PHP", icon: Code2, level: "Expert" },
  { name: "Laravel", icon: Server, level: "Advanced" },
  { name: "MySQL", icon: Database, level: "Advanced" },
];

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-medium text-primary">Hello, I'm a PHP Developer</p>
            <h1 className="mt-4 font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              I build fast, secure, and scalable web applications.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Specializing in Laravel, Symfony, and modern PHP. I turn complex backend challenges into clean, maintainable solutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View my work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of projects that showcase my backend expertise and attention to clean architecture."
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
          <SectionHeading
            title="Core Skills"
            subtitle="The technologies and tools I use most often to deliver production-ready applications."
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
              Let's build something together
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              I'm currently open to freelance and full-time opportunities. If you have a project in mind, let's talk.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact me <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
