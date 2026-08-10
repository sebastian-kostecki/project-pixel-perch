interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  summary: string;
  highlights: string[];
  index?: string;
}

export function ExperienceCard({
  company,
  role,
  duration,
  summary,
  highlights,
  index,
}: ExperienceCardProps) {
  return (
    <article className="relative pl-8">
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary"
      />
      <span aria-hidden="true" className="absolute left-[3px] top-6 h-[calc(100%-1rem)] w-px bg-border" />

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {index && <span className="font-mono text-xs tracking-[0.2em] text-primary">{index}</span>}
        <h3 className="font-mono text-xl font-semibold text-foreground">{company}</h3>
        <span className="font-mono text-xs text-muted-foreground">/ {duration}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-primary">{role}</p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{summary}</p>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {highlights.map((item) => (
          <li
            key={item}
            className="panel rounded-md px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
