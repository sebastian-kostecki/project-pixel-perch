import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";

const title = "Projects — Backend Developer";
const description =
  "Personal and commercial PHP projects: Laravel apps, WHMCS modules, infrastructure integrations and mobile side projects.";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const personalProjects = [
  {
    index: "01",
    title: "Household budget app",
    description:
      "A budget app with spending categories, monthly reports and a live demo. Built on Laravel and MySQL.",
    tags: ["Laravel", "MySQL", "Reports"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    index: "02",
    title: "Mobile companion app",
    description:
      "A cross-platform mobile app bundling daily content and tools in one place. Built with Ionic and Vue.",
    tags: ["Ionic", "Vue", "Capacitor"],
    repoUrl: "#",
  },
  {
    index: "03",
    title: "Menu Maker",
    status: "WIP",
    description:
      "Weekly meal planning with AI suggestions, ingredient scaling and PDF export.",
    tags: ["Laravel", "Vue", "Inertia.js", "AI"],
    repoUrl: "#",
  },
];

const commercialWork = [
  {
    index: "01",
    title: "WordPress automation platform",
    description:
      "Laravel backend of a B2B SaaS that automates WordPress management: instance provisioning, imports, Git support and onboarding flows.",
    tags: ["Laravel", "Vue.js", "MySQL", "Docker"],
  },
  {
    index: "02",
    title: "Infrastructure integrations",
    description:
      "Integrations with hosting panels (cPanel, Plesk, DirectAdmin), DNS providers (PowerDNS, Cloudflare, Bunny), mail servers and SSL automation.",
    tags: ["cPanel", "Plesk", "PowerDNS", "Let's Encrypt"],
  },
  {
    index: "03",
    title: "Backup and storage layer",
    description:
      "Local and remote backup pipelines for WordPress instances with S3, FTP, SFTP and FTPS targets.",
    tags: ["S3", "FTP", "SFTP", "Queues"],
  },
  {
    index: "04",
    title: "WHMCS modules",
    description:
      "Custom billing modules: invoice sub-statuses, automated refunds, upgrades for early payments and bulk update tooling.",
    tags: ["PHP", "WHMCS", "JavaScript", "Smarty"],
  },
];

function ProjectsPage() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="gradient-hero absolute inset-x-0 top-0 h-80" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          index="02 / Projects"
          title="Personal projects"
          subtitle="Side projects where I try out ideas and tools outside of commercial work."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            index="02.1 / Work"
            title="Commercial work"
            subtitle="Areas I own or contribute to on a live B2B product."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {commercialWork.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
