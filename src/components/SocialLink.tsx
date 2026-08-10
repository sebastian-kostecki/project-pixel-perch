import { LucideIcon, ArrowUpRight } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  value: string;
}

export function SocialLink({ href, icon: Icon, label, value }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="panel panel-hover group flex items-center gap-4 rounded-md p-5"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-primary/25 bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <p className="truncate font-mono text-sm font-medium text-card-foreground">{value}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-primary" />
    </a>
  );
}
