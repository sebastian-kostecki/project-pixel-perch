import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon?: LucideIcon;
  level?: string;
}

export function SkillBadge({ name, icon: Icon, level }: SkillBadgeProps) {
  return (
    <div className="panel panel-hover group flex items-center gap-3 rounded-md px-4 py-3">
      {Icon && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-primary/25 bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </span>
      )}
      <div className="min-w-0">
        <p className="truncate font-mono text-sm font-medium text-card-foreground">{name}</p>
        {level && <p className="truncate text-xs text-muted-foreground">{level}</p>}
      </div>
    </div>
  );
}
