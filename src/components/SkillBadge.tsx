import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon?: LucideIcon;
  level?: string;
}

export function SkillBadge({ name, icon: Icon, level }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/30 hover:bg-card/80">
      {Icon && <Icon className="h-5 w-5 text-primary" />}
      <div className="flex-1">
        <p className="font-mono text-sm font-medium text-card-foreground">{name}</p>
        {level && <p className="text-xs text-muted-foreground">{level}</p>}
      </div>
    </div>
  );
}
