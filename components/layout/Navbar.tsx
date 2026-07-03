"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLang } from "@/hooks/useLanguage";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const navLinks: NavLink[] = [
  { href: "about", label: { id: "Tentang", en: "About" } },
  { href: "skills", label: { id: "Keahlian", en: "Skills" } },
  { href: "projects", label: { id: "Proyek", en: "Projects" } },
  { href: "experience", label: { id: "Pengalaman", en: "Experience" } },
  { href: "contact", label: { id: "Kontak", en: "Contact" } },
];

const sectionIds = navLinks.map((link) => link.href);

export function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    // The client's first render must match the server's (which never knows
    // the resolved theme), or React throws a hydration mismatch. Only trust
    // resolvedTheme after this post-hydration effect has run.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isDark = resolvedTheme === "dark";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg-primary/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        
      <a href="#hero" className="flex items-center">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-accent flex-shrink-0">
          <Image
            src="/assets/fotosmuray1.png"
            alt="Rafi Al Arifi"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-accent",
                  activeSection === link.href
                    ? "text-accent"
                    : "text-text-secondary",
                )}
                aria-current={activeSection === link.href ? "page" : undefined}
              >
                {link.label[lang]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold tracking-wide text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            {lang === "id" ? "ID | EN" : "EN | ID"}
          </button>
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            {mounted && isDark ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <Button href="#contact" size="sm">
            {t("nav.hireMe")}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-primary md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col gap-8 bg-bg-secondary p-6 shadow-2xl md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-primary"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={`#${link.href}`}
                      onClick={() => setMobileOpen(false)}
                      className="font-display text-2xl uppercase tracking-wide text-text-primary transition-colors hover:text-accent"
                    >
                      {link.label[lang]}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleLang}
                    aria-label="Toggle language"
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold tracking-wide text-text-secondary hover:border-accent hover:text-accent"
                  >
                    {lang === "id" ? "ID | EN" : "EN | ID"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    aria-label="Toggle theme"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary hover:border-accent hover:text-accent"
                  >
                    {mounted && isDark ? (
                      <Sun className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Moon className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
                <Button href="#contact" onClick={() => setMobileOpen(false)}>
                  {t("nav.hireMe")}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
