'use client'

import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/hooks/useLanguage'
import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="portfolio-theme"
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}