import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { locales, localeNames, type Locale } from '../i18n/config'
import { useLocale } from '../i18n/LocaleContext'
import { getPersonaSlugInLocale } from '../data/personas'
import Icon from './Icon'
import FlagIcon from './FlagIcon'

export default function LanguageSwitcher({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const { locale, t, switchTo } = useLocale()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const go = (target: Locale) => {
    const url = switchTo(target, (sectionKey, currentLocale, slug) =>
      sectionKey === 'individuals' ? getPersonaSlugInLocale(currentLocale, slug, target) : undefined,
    )
    setOpen(false)
    navigate(url)
  }

  if (variant === 'mobile') {
    return (
      <div>
        <p className="flex items-center gap-2 px-1 text-xs font-semibold uppercase tracking-wide text-navy/50">
          <Icon name="globe" className="h-4 w-4" />
          {t.nav.languageLabel}
        </p>
        <div className="mt-2 flex flex-col gap-1">
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => go(l)}
              className={`flex items-center gap-2 rounded px-3 py-2 text-left text-sm font-medium ${
                l === locale ? 'bg-gray-100 text-brandred' : 'text-navy hover:bg-gray-50'
              }`}
            >
              <FlagIcon locale={l} />
              {localeNames[l]}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded border border-gray-200 px-2.5 py-1.5 text-sm font-medium text-navy hover:border-navy"
      >
        <FlagIcon locale={locale} />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <Icon name="chevronDown" className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => go(l)}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm ${
                l === locale ? 'text-brandred' : 'text-navy hover:bg-gray-50'
              }`}
            >
              <FlagIcon locale={l} />
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
