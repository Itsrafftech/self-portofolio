"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import { skillCategories } from "@/data/skills";
import type { SkillCategoryId } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/ui/SkillCard";

type FilterId = SkillCategoryId | "all";

export function Skills() {
  const { t } = useLang();
  const [filter, setFilter] = useState<FilterId>("all");

  const filters: { id: FilterId; labelKey: string }[] = [
    { id: "all", labelKey: "skills.filterAll" },
    { id: "frontend", labelKey: "skills.filterFrontend" },
    { id: "backend", labelKey: "skills.filterBackend" },
    { id: "data-science", labelKey: "skills.filterData" },
    { id: "pm-finance", labelKey: "skills.filterPM" },
  ];

  const visibleCategories =
    filter === "all"
      ? skillCategories
      : skillCategories.filter((category) => category.id === filter);

  return (
    <section id="skills" className="bg-bg-secondary px-6 py-24" aria-label="Skills">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02"
          heading={t("skills.heading")}
          subheading={t("skills.subheading")}
        />

        <div
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                filter === f.id
                  ? "border-accent bg-accent text-bg-primary"
                  : "border-border text-text-secondary hover:border-accent hover:text-accent",
              )}
            >
              {t(f.labelKey)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((category) => (
              <SkillCard key={category.id} category={category} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
