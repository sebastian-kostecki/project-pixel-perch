import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  index?: string;
  status?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  repoUrl,
  index,
  status,
}: ProjectCardProps) {
  return (
    <article className="panel panel-hover group relative flex flex-col rounded-md p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {index && (
            <span className="font-mono text-xs tracking-[0.2em] text-primary">{index}</span>
          )}
          {status && (
            <span className="rounded-sm border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
              {status}
            </span>
          )}
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-primary" />
      </div>

      <h3 className="mt-4 font-mono text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-border bg-secondary/60 px-2 py-1 font-mono text-[11px] text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {(demoUrl || repoUrl) && (
        <div className="mt-6 flex items-center gap-4 border-t border-border/60 pt-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-primary transition-colors hover:text-primary-glow"
            >
              Live demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Source <Github className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
