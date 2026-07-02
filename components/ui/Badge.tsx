import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
}

export function Badge({ active = false, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-200",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-border bg-bg-secondary text-text-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
