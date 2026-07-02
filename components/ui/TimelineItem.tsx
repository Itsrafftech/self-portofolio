"use client";

import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

export function TimelineItem({ entry, index }: TimelineItemProps) {
  const { lang, t } = useLang();
  const isLeft = index % 2 === 0;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-4 pl-10 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0",
      )}
    >
      <span
        className="absolute left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg-primary sm:left-1/2 sm:-translate-x-1/2"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={cn(
          "rounded-2xl border border-border bg-bg-card p-6",
          isLeft ? "sm:col-start-1 sm:text-right" : "sm:col-start-2",
        )}
      >
        <div
          className={cn(
            "mb-2 flex items-center gap-2",
            isLeft && "sm:flex-row-reverse",
          )}
        >
          <Badge active>{entry.type === "work" ? t("timeline.work") : t("timeline.education")}</Badge>
          <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
            {entry.year}
          </span>
        </div>
        <h3 className="font-display text-xl uppercase tracking-wide text-text-primary">
          {entry.title[lang]}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">{entry.company}</p>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {entry.description[lang]}
        </p>
      </motion.div>
    </div>
  );
}
