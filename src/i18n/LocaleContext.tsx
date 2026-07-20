import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import {
  buildPath,
  defaultLocale,
  isLocale,
  switchLocalePath,
  type Locale,
  type SectionKey,
} from './config'
import type { Dictionary } from './dictionary'
import es from './dictionaries/es'
import en from './dictionaries/en'
import pt from './dictionaries/pt'

const dictionaries: Record<Locale, Dictionary> = { es, en, pt }

type LocaleContextValue = {
  locale: Locale
  t: Dictionary
  path: (section?: SectionKey, extra?: string) => string
  switchTo: (
    targetLocale: Locale,
    resolveSlug?: (sectionKey: SectionKey, currentLocale: Locale, slug: string) => string | undefined,
  ) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const firstSegment = location.pathname.split('/').filter(Boolean)[0]
  const locale: Locale = isLocale(firstSegment) ? firstSegment : defaultLocale

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      path: (section, extra) => buildPath(locale, section, extra),
      switchTo: (targetLocale, resolveSlug) =>
        switchLocalePath(location.pathname, targetLocale, resolveSlug),
    }),
    [locale, location.pathname],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale debe usarse dentro de <LocaleProvider>')
  return ctx
}

/** Reemplaza placeholders simples tipo {brand} en un string traducido. */
export function interpolate(str: string, vars: Record<string, string>): string {
  return str.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '')
}
