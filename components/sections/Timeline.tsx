"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useLang } from "@/hooks/useLanguage";
import { timeline } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Timeline() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      id="experience"
      className="relative bg-bg-secondary px-6 py-24"
      aria-label="Experience"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="04"
          heading={t("timeline.heading")}
          subheading={t("timeline.subheading")}
        />

        <div ref={containerRef} className="relative">
          <div
            className="absolute left-[13px] top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[13px] top-0 h-full w-px origin-top bg-accent sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {timeline.map((entry, index) => (
              <TimelineItem key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
