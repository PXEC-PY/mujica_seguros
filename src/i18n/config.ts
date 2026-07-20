export const locales = ['es', 'en', 'pt'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
}

/** Segmentos de URL de cada sección, traducidos por idioma. */
export const segments = {
  about: { es: 'sobre-nosotros', en: 'about-us', pt: 'sobre-nos' },
  business: { es: 'empresas', en: 'business', pt: 'empresas' },
  individuals: { es: 'personas', en: 'individuals', pt: 'pessoas' },
  contact: { es: 'contacto', en: 'contact', pt: 'contato' },
  legal: { es: 'aviso-legal', en: 'legal-notice', pt: 'aviso-legal' },
  privacy: {
    es: 'politica-de-privacidad',
    en: 'privacy-policy',
    pt: 'politica-de-privacidade',
  },
} as const

export type SectionKey = keyof typeof segments

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

export function sectionKeyFromSegment(locale: Locale, segment: string): SectionKey | undefined {
  return (Object.keys(segments) as SectionKey[]).find((key) => segments[key][locale] === segment)
}

/** Construye una ruta absoluta localizada, ej. path('en', 'business', 'property') -> /en/business/property */
export function buildPath(locale: Locale, section?: SectionKey, extra?: string): string {
  if (!section) return `/${locale}`
  const seg = segments[section][locale]
  return extra ? `/${locale}/${seg}/${extra}` : `/${locale}/${seg}`
}

/**
 * Dado un pathname actual (de cualquier idioma) devuelve la ruta equivalente en el idioma destino,
 * preservando la sección y, cuando es posible, el detalle (slug) abierto.
 */
export function switchLocalePath(
  pathname: string,
  targetLocale: Locale,
  resolveSlug?: (sectionKey: SectionKey, currentLocale: Locale, slug: string) => string | undefined,
): string {
  const parts = pathname.split('/').filter(Boolean)
  const currentLocale = isLocale(parts[0]) ? parts[0] : defaultLocale
  const rest = parts.slice(1)

  if (rest.length === 0) return buildPath(targetLocale)

  const sectionKey = sectionKeyFromSegment(currentLocale, rest[0])
  if (!sectionKey) return buildPath(targetLocale)

  if (rest.length === 1) return buildPath(targetLocale, sectionKey)

  const currentSlug = rest[1]
  const targetSlug = resolveSlug?.(sectionKey, currentLocale, currentSlug) ?? currentSlug
  return buildPath(targetLocale, sectionKey, targetSlug)
}
