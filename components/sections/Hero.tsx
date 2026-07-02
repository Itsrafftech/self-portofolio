"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useLang } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/Button";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className="text-accent">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-blink bg-accent align-middle" />
    </span>
  );
}

export function Hero() {
  const { t, tList } = useLang();
  const roles = tList("hero.roles");
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden px-6"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 animate-float-grid opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div
        className="fixed left-6 top-1/2 z-40 hidden h-40 w-px -translate-y-1/2 bg-border lg:block"
        aria-hidden="true"
      >
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="h-full w-full bg-accent"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-start gap-6"
      >
        <motion.p
          variants={item}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-accent"
        >
          {t("hero.greeting")}
        </motion.p>

        <h1 className="font-display text-5xl uppercase leading-[1.05] tracking-wide text-text-primary sm:text-6xl md:text-7xl">
          <motion.span variants={item} className="block">
            {t("hero.headline1")}
          </motion.span>
          <motion.span variants={item} className="block">
            {t("hero.headline2")}
          </motion.span>
          <motion.span variants={item} className="block">
            {t("hero.headline3")}
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="min-h-[2em] text-xl font-medium text-text-secondary sm:text-2xl"
        >
          <Typewriter words={roles} />
        </motion.p>

        <motion.div variants={item} className="mt-4 flex flex-wrap gap-4">
          <Button href="#projects" size="lg">
            {t("hero.viewWork")}
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="/assets/cv.pdf" variant="outline" size="lg" download>
            {t("hero.downloadCV")}
            <Download className="h-4 w-4" aria-hidden="true" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
