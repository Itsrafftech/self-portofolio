"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

type FilterId = ProjectCategory | "all";

export function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState<FilterId>("all");

  const filters: { id: FilterId; labelKey: string }[] = [
    { id: "all", labelKey: "projects.filterAll" },
    { id: "fullstack", labelKey: "projects.filterFullstack" },
    { id: "data-science", labelKey: "projects.filterData" },
    { id: "finance", labelKey: "projects.filterFinance" },
    { id: "pm-tool", labelKey: "projects.filterPM" },
  ];

  const visibleProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="px-6 py-24" aria-label="Projects">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03"
          heading={t("projects.heading")}
          subheading={t("projects.subheading")}
        />

        <div
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects by category"
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

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
