import type { Locale } from '../i18n/config'
import coveragesEs from './coverages.es'
import coveragesEn from './coverages.en'
import coveragesPt from './coverages.pt'

export type CoverageItem = {
  name: string
  description: string
}

/** Un párrafo de texto, o una lista de puntos, dentro de una respuesta de FAQ. */
export type FaqBlock = string | { list: string[] }

export type Coverage = {
  /** Identificador estable entre idiomas (para mapear un slug traducido al equivalente en otro idioma). Por defecto es igual al slug. */
  id?: string
  slug: string
  title: string
  icon: string
  shortDescription: string
  intro: string
  /** Ruta a una imagen representativa (opcional). Si no se define, la tarjeta usa el ícono. */
  image?: string
  /** Imagen secundaria opcional, mostrada junto al bloque "about". */
  secondaryImage?: string
  /** Bloque explicativo opcional ("¿Qué es...?"), mostrado debajo del banner principal. */
  about?: {
    title: string
    paragraphs: string[]
    /** Checklist corto opcional (✓ + texto), mostrado debajo de los párrafos. */
    checklist?: string[]
    /** Etiqueta opcional de un botón hacia contacto, mostrado debajo de los párrafos/checklist. */
    ctaLabel?: string
  }
  /** Activa el tratamiento visual mejorado del hero (zoom, degradado animado, CTAs, checklist, indicador de scroll). */
  heroEnhanced?: boolean
  /** object-position CSS de la imagen del hero enhanced (ej. '65% 48%'). Por defecto '78% 22%'. */
  heroImagePosition?: string
  /** Título del hero, si difiere del breadcrumb/título de página (ej. título largo vs. breadcrumb corto). Por defecto usa "title". */
  heroTitle?: string
  /** Bajada corta debajo del título del hero. Solo se usa junto con heroEnhanced. */
  heroTagline?: string
  /** Botones del hero (máx. 2): "primary" = sólido, "secondary" = outline. href acepta una sección de ruta ('contact') o un ancla ('#id'). */
  heroCtas?: { label: string; href: string; variant: 'primary' | 'secondary' }[]
  /** Checklist corto debajo de los botones del hero (✓ + texto). */
  heroChecklist?: string[]
  /** Muestra la barra lateral flotante de acciones al hacer scroll. */
  floatingCta?: boolean
  /** Franja de cifras reales con contador animado, mostrada debajo del hero. */
  authorityStats?: { value: number; suffix?: string; label: string }[]
  /** Oculta el bloque final "¿Necesitás asesoramiento...?" (ej. cuando el bloque "about" ya incluye su propio CTA). */
  hideAdviceCta?: boolean
  /** Grilla opcional de beneficios, mostrada debajo del bloque "about". */
  benefits?: {
    title: string
    subtitle: string
    items: { icon: string; title: string; text: string }[]
  }
  /** Banner promocional opcional (imagen autocontenida), mostrado debajo de "benefits". */
  promoBanner?: string
  /** Segundo banner promocional opcional (imagen autocontenida), mostrado debajo de "promoBanner". */
  promoBanner2?: string
  /** Banner de llamado a la acción (título + texto + botón + imagen lateral), mostrado debajo de "risks". */
  ctaBanner?: {
    title: string
    text: string
    buttonLabel: string
    image: string
    /** object-position CSS de la imagen lateral (ej. '65% 55%'). Por defecto 'center'. */
    imagePosition?: string
  }
  /** Sección destacada de fondo oscuro (título + párrafos + CTA + imagen grande a la derecha), mostrada debajo de "risks". */
  feature?: {
    title: string
    paragraphs: string[]
    ctaLabel: string
    image: string
    /** object-position CSS de la imagen (ej. '55% 40%'). Por defecto 'center'. */
    imagePosition?: string
  }
  /** Grilla opcional de riesgos cubiertos, mostrada debajo del banner promocional. */
  risks?: {
    title: string
    subtitle: string
    items: { icon: string; label: string }[]
  }
  /** Acordeón opcional de preguntas frecuentes, mostrado debajo de "risks". */
  faq?: {
    title: string
    subtitle: string
    items: { question: string; answer: FaqBlock[] }[]
  }
  /** Marca coberturas que deben destacarse visualmente en la grilla (ej. Employee Benefits). */
  featured?: boolean
  items: CoverageItem[]
}

const byLocale: Record<Locale, Coverage[]> = {
  es: coveragesEs,
  en: coveragesEn,
  pt: coveragesPt,
}

export function getCoverages(locale: Locale): Coverage[] {
  return byLocale[locale]
}

export function getCoverageBySlug(locale: Locale, slug: string | undefined): Coverage | undefined {
  return byLocale[locale].find((c) => c.slug === slug)
}
