import { createFileRoute } from "@tanstack/react-router";
import { Code2, Database, Server, Container, GitBranch, Shield, Zap, Layers } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { SkillBadge } from "../components/SkillBadge";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Skills — PHP Developer Portfolio" },
      { name: "description", content: "PHP, Laravel, Symfony, MySQL, Docker, and the tools I use to build production-ready web applications." },
      { property: "og:title", content: "Skills — PHP Developer Portfolio" },
      { property: "og:description", content: "PHP, Laravel, Symfony, MySQL, Docker, and the tools I use to build production-ready web applications." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/skills" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
});

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "PHP", icon: Code2, level: "Expert" },
      { name: "Laravel", icon: Server, level: "Advanced" },
      { name: "Symfony", icon: Layers, level: "Advanced" },
      { name: "JavaScript / TypeScript", icon: Zap, level: "Intermediate" },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MySQL", icon: Database, level: "Advanced" },
      { name: "PostgreSQL", icon: Database, level: "Intermediate" },
      { name: "Redis", icon: Zap, level: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: Container, level: "Advanced" },
      { name: "Git", icon: GitBranch, level: "Advanced" },
      { name: "CI/CD", icon: Zap, level: "Intermediate" },
      { name: "Testing", icon: Shield, level: "Advanced" },
    ],
  },
];

function SkillsPage() {
  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Skills & Tools"
          subtitle="The technologies I work with to design, build, deploy, and maintain reliable web applications."
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
