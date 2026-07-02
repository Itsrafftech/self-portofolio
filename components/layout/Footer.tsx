"use client";

import { useLang } from "@/hooks/useLanguage";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-text-secondary sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {year} Rafi Al Arifi. {t("footer.rights")}
        </p>
        <p>{t("footer.builtWith")}</p>
      </div>
    </footer>
  );
}
