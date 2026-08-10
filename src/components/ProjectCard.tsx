import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export function ProjectCard({ title, description, tags, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:bg-card/80">
      <h3 className="font-mono text-xl font-semibold text-card-foreground">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Live demo <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Source <Github className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
