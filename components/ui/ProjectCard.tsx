"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useLang } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(
  ({ project }, ref) => {
    const { lang, t } = useLang();

    return (
      <motion.article
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card p-6 transition-colors duration-200 hover:border-accent",
          project.featured && "sm:col-span-2",
        )}
      >
        <span className="absolute inset-y-0 left-0 w-0 bg-accent transition-all duration-300 group-hover:w-1" />

        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            {project.featured && (
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t("projects.featured")}
              </span>
            )}
            <h3 className="font-display text-2xl uppercase tracking-wide text-text-primary">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight
            className="h-6 w-6 shrink-0 -translate-x-1 translate-y-1 text-text-secondary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.description[lang]}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${t("projects.viewCode")}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              {t("projects.viewCode")}
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${t("projects.liveDemo")}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              {t("projects.liveDemo")}
            </a>
          )}
        </div>
      </motion.article>
    );
  },
);

ProjectCard.displayName = "ProjectCard";
