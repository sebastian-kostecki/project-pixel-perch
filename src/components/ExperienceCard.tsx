interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  summary: string;
  highlights: string[];
}

export function ExperienceCard({ company, role, duration, summary, highlights }: ExperienceCardProps) {
  return (
    <article className="rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-mono text-xl font-semibold text-card-foreground">{company}</h3>
        <span className="font-mono text-xs text-primary">{duration}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-muted-foreground">{role}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{summary}</p>
      <ul className="mt-4 space-y-2">
        {highlights.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
            <span aria-hidden="true" className="mt-1 font-mono text-xs text-primary">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
