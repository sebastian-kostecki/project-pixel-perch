import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — PHP Developer Portfolio" },
      { name: "description", content: "A collection of PHP projects built with Laravel, Symfony, and modern backend tooling." },
      { property: "og:title", content: "Projects — PHP Developer Portfolio" },
      { property: "og:description", content: "A collection of PHP projects built with Laravel, Symfony, and modern backend tooling." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const projects = [
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
  {
    title: "CMS Platform",
    description: "A headless CMS with a flexible content model, GraphQL API, and multi-tenant architecture.",
    tags: ["Laravel", "GraphQL", "PostgreSQL", "AWS"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Booking Engine",
    description: "A reservation system with availability calendars, payment processing, and email confirmations.",
    tags: ["Symfony", "MySQL", "Stripe", "Twilio"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "CLI Automation Tool",
    description: "A command-line tool for scaffolding PHP projects, running tests, and deploying to staging environments.",
    tags: ["PHP", "Symfony Console", "GitHub Actions", "Docker"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

function ProjectsPage() {
  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="All Projects"
          subtitle="A collection of work that spans APIs, dashboards, automation tools, and content platforms."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
