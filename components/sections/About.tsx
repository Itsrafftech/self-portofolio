"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/hooks/useLanguage";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

const totalTech = new Set(skillCategories.flatMap((category) => category.skills)).size;

const stats = [
  { value: projects.length, suffix: "+", labelKey: "about.statProjects" },
  { value: totalTech, suffix: "+", labelKey: "about.statTech" },
  { value: 3, suffix: "+", labelKey: "about.statYears" },
];

function CountUpCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-bg-card px-6 py-8 text-center"
    >
      <span className="font-display text-4xl text-accent">
        {count}
        {suffix}
      </span>
      <span className="text-sm text-text-secondary">{label}</span>
    </div>
  );
}

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="px-6 py-24" aria-label="About">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="01" heading={t("about.heading")} />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-3xl leading-tight text-text-primary sm:text-4xl">
              &ldquo;{t("about.quote")}&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              {t("about.bio")}
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <CountUpCard
              key={stat.labelKey}
              value={stat.value}
              suffix={stat.suffix}
              label={t(stat.labelKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
