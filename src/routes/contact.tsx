import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { SocialLink } from "../components/SocialLink";

const title = "Contact — Backend Developer";
const description =
  "Interested in working together or chatting about backend development? Reach out on LinkedIn, GitHub or by e-mail.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const socials = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/your-profile" },
  { href: "https://github.com", icon: Github, label: "GitHub", value: "github.com/your-username" },
  { href: "mailto:hello@example.com", icon: Mail, label: "E-mail", value: "hello@example.com" },
];

function ContactPage() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="gradient-hero absolute inset-x-0 top-0 h-80" />
      <div aria-hidden="true" className="grid-lines absolute inset-x-0 top-0 h-80" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          index="04 / Contact"
          title="Let's talk"
          subtitle="Interested in working together or chatting about backend? Get in touch — I usually reply within a day."
          centered
        />
        <div className="grid gap-4">
          {socials.map((social) => (
            <SocialLink key={social.label} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
}
