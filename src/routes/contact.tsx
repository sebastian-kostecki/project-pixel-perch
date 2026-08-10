import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { SocialLink } from "../components/SocialLink";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — PHP Developer Portfolio" },
      { name: "description", content: "Get in touch for freelance, full-time, or collaboration opportunities." },
      { property: "og:title", content: "Contact — PHP Developer Portfolio" },
      { property: "og:description", content: "Get in touch for freelance, full-time, or collaboration opportunities." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const socials = [
  { href: "https://github.com", icon: Github, label: "GitHub", value: "github.com/phpdeveloper" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/phpdeveloper" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter", value: "@phpdeveloper" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Email", value: "hello@example.com" },
];

function ContactPage() {
  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="I'm currently open to new opportunities. Whether you have a project, a role, or just want to connect, I'd love to hear from you."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {socials.map((social) => (
            <SocialLink key={social.label} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
}
