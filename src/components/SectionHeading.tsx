interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  index?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, index, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "mx-auto max-w-2xl text-center" : ""}`}>
      {index && (
        <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="font-mono text-xs font-medium tracking-[0.3em] text-primary">
            {index}
          </span>
          <span aria-hidden="true" className="rule-accent h-px w-16" />
        </div>
      )}
      <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed text-muted-foreground ${centered ? "" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
