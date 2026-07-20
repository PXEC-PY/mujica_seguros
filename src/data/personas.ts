import type { Locale } from '../i18n/config'
import type { Coverage } from './coverages'
import personasEs from './personas.es'
import personasEn from './personas.en'
import personasPt from './personas.pt'

const byLocale: Record<Locale, Coverage[]> = {
  es: personasEs,
  en: personasEn,
  pt: personasPt,
}

export function getPersonas(locale: Locale): Coverage[] {
  return byLocale[locale]
}

export function getPersonaBySlug(locale: Locale, slug: string | undefined): Coverage | undefined {
  return byLocale[locale].find((c) => c.slug === slug)
}

/** Dado un slug de un idioma, devuelve el slug equivalente en otro idioma (misma cobertura). */
export function getPersonaSlugInLocale(
  currentLocale: Locale,
  slug: string,
  targetLocale: Locale,
): string | undefined {
  const current = getPersonaBySlug(currentLocale, slug)
  if (!current) return undefined
  const id = current.id ?? current.slug
  return byLocale[targetLocale].find((c) => (c.id ?? c.slug) === id)?.slug
}
