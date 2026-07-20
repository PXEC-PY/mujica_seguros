import type { Locale } from '../i18n/config'

export default function FlagIcon({ locale, className = 'h-3.5 w-5' }: { locale: Locale; className?: string }) {
  const shared = `${className} shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/10`

  if (locale === 'es') {
    return (
      <svg viewBox="0 0 3 2" className={shared} aria-hidden="true">
        <rect width="3" height="2" fill="#AA151B" />
        <rect y="0.5" width="3" height="1" fill="#F1BF00" />
      </svg>
    )
  }

  if (locale === 'pt') {
    return (
      <svg viewBox="0 0 3 2" className={shared} aria-hidden="true">
        <rect width="3" height="2" fill="#009739" />
        <polygon points="1.5,0.28 2.82,1 1.5,1.72 0.18,1" fill="#FEDD00" />
        <circle cx="1.5" cy="1" r="0.42" fill="#012169" />
      </svg>
    )
  }

  // en -> Estados Unidos
  return (
    <svg viewBox="0 0 30 20" className={shared} aria-hidden="true">
      <rect width="30" height="20" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={(i * 20) / 7} width="30" height={20 / 13} fill="#B22234" />
      ))}
      <rect width="14" height="10.8" fill="#3C3B6E" />
    </svg>
  )
}
