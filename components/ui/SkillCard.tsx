"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, LineChart, Server, type LucideIcon } from "lucide-react";
import { useLang } from "@/hooks/useLanguage";
import type { SkillCategory } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface SkillCardProps {
  category: SkillCategory;
}

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  LineChart,
  Briefcase,
};

export const SkillCard = forwardRef<HTMLDivElement, SkillCardProps>(
  ({ category }, ref) => {
    const { lang } = useLang();
    const Icon = iconMap[category.icon] ?? Code2;

    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-bg-card p-6"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="font-display text-xl uppercase tracking-wide text-text-primary">
            {category.label[lang]}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </motion.div>
    );
  },
);

SkillCard.displayName = "SkillCard";
