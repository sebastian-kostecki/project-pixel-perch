import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Database,
  Server,
  Container,
  GitBranch,
  Globe,
  HardDrive,
  Lock,
  Mail,
  Layers,
  Palette,
  Receipt,
  Sparkles,
  Zap,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { SkillBadge } from "../components/SkillBadge";

const title = "Skills — Backend Developer";
const description =
  "PHP, Laravel, MySQL, Docker and Vue.js, plus hosting panels, DNS, storage, WordPress and billing integrations used in production.";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/skills" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
});

const skillCategories = [
  {
    title: "Core stack",
    skills: [
      { name: "PHP", icon: Code2, level: "Core language" },
      { name: "Laravel", icon: Server, level: "Production backends" },
      { name: "MySQL", icon: Database, level: "Data modelling & queries" },
      { name: "Docker", icon: Container, level: "Local & deploy environments" },
      { name: "Vue.js", icon: Layers, level: "Feature frontends" },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "cPanel", icon: Server, level: "Hosting panel API" },
      { name: "Plesk", icon: Server, level: "Hosting panel API" },
      { name: "DirectAdmin", icon: Server, level: "Hosting panel API" },
      { name: "PowerDNS", icon: Globe, level: "DNS automation" },
      { name: "Cloudflare", icon: Globe, level: "DNS & proxy" },
      { name: "Let's Encrypt", icon: Lock, level: "SSL automation" },
      { name: "mailcow", icon: Mail, level: "Mail server" },
    ],
  },
  {
    title: "Storage and backup",
    skills: [
      { name: "S3", icon: HardDrive, level: "Remote backups" },
      { name: "FTP / FTPS", icon: HardDrive, level: "File transfer" },
      { name: "SFTP", icon: HardDrive, level: "Secure transfer" },
    ],
  },
  {
    title: "WordPress and billing",
    skills: [
      { name: "WordPress lifecycle", icon: Sparkles, level: "Import & management" },
      { name: "WHMCS", icon: Receipt, level: "Billing integrations" },
      { name: "Google Analytics", icon: Zap, level: "Reporting" },
      { name: "Onboarding tooling", icon: Sparkles, level: "Extendify, 10Web" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Vuetify", icon: Palette, level: "Component library" },
      { name: "Tailwind CSS", icon: Palette, level: "Styling" },
      { name: "JavaScript", icon: Zap, level: "Interactivity" },
      { name: "Inertia.js", icon: Layers, level: "Laravel + Vue apps" },
      { name: "Ionic", icon: Layers, level: "Mobile apps" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitBranch, level: "Version control" },
      { name: "AI-assisted coding", icon: Sparkles, level: "Implementation & refactoring" },
    ],
  },
];

function SkillsPage() {
  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm text-primary">$ ls skills/</p>
        <SectionHeading
          title="Skills & Tools"
          subtitle="The stack I use to build and maintain production backends — the integration categories mirror the areas from my experience."
        />
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <section key={category.title}>
              <h3 className="mb-4 font-mono text-xl font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
