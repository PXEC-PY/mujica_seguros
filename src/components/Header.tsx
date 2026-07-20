import { useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import Icon from './Icon'
import NavDropdown from './NavDropdown'
import LanguageSwitcher from './LanguageSwitcher'
import { useLocale } from '../i18n/LocaleContext'
import { getCoverages } from '../data/coverages'
import { getPersonas } from '../data/personas'

function MobileGroup({
  label,
  to,
  items,
  open,
  onToggle,
  onNavigate,
  viewAllLabel,
}: {
  label: string
  to: string
  items: { slug: string; title: string }[]
  open: boolean
  onToggle: () => void
  onNavigate: () => void
  viewAllLabel: string
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-2 text-sm font-semibold uppercase tracking-wide text-navy hover:text-brandred"
      >
        {label}
        <Icon name="chevronDown" className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="ml-3 flex flex-col gap-1 border-l border-gray-200 pl-3">
          <Link
            to={to}
            onClick={onNavigate}
            className="py-1.5 text-sm font-semibold text-brandred hover:text-brandred-dark"
          >
            {viewAllLabel}
          </Link>
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`${to}/${item.slug}`}
              onClick={onNavigate}
              className="py-1.5 text-sm text-navy/80 hover:text-brandred"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function NavItem({ to, children }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `border-b-2 pb-1 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brandred ${
          isActive ? 'border-brandred text-brandred' : 'border-transparent text-navy'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Header() {
  const { locale, t, path } = useLocale()
  const [open, setOpen] = useState(false)
  const [mobileGroup, setMobileGroup] = useState<'business' | 'individuals' | null>(null)

  const businessItems = getCoverages(locale).map((c) => ({ slug: c.slug, title: c.title }))
  const personaItems = getPersonas(locale).map((c) => ({ slug: c.slug, title: c.title }))

  const closeMobile = () => {
    setOpen(false)
    setMobileGroup(null)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="hidden items-center justify-between bg-navy-dark px-6 py-1.5 text-xs text-white/80 md:flex">
        <span>Corredores de Seguros | Paraguay</span>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-white/80 hover:text-white"
        >
          <Icon name="linkedin" className="h-4 w-4" />
        </a>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link to={path()} className="flex shrink-0 items-center gap-3">
          <img src={logo} alt="Mujica Seguros" className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavItem to={path()}>{t.nav.home}</NavItem>
          <NavItem to={path('about')}>{t.nav.about}</NavItem>
          <NavDropdown
            label={t.nav.individuals}
            to={path('individuals')}
            submenuLabel={t.nav.individualsSubmenuLabel}
            items={personaItems}
          />
          <NavDropdown
            label={t.nav.business}
            to={path('business')}
            submenuLabel={t.nav.businessSubmenuLabel}
            items={businessItems}
          />
          <NavItem to={path('contact')}>{t.nav.contact}</NavItem>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <Link
            to={path('contact')}
            className="hidden items-center gap-2 rounded bg-brandred px-5 py-2.5 text-sm font-semibold uppercase text-white transition-colors hover:bg-brandred-dark lg:inline-flex"
          >
            {t.nav.requestAdvice}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>

          <button
            className="text-navy lg:hidden"
            aria-label={t.nav.openMenu}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-gray-100 bg-white px-6 py-4 lg:hidden">
          <Link
            to={path()}
            onClick={closeMobile}
            className="py-2 text-sm font-semibold uppercase tracking-wide text-navy hover:text-brandred"
          >
            {t.nav.home}
          </Link>
          <Link
            to={path('about')}
            onClick={closeMobile}
            className="py-2 text-sm font-semibold uppercase tracking-wide text-navy hover:text-brandred"
          >
            {t.nav.about}
          </Link>

          <MobileGroup
            label={t.nav.individuals}
            to={path('individuals')}
            items={personaItems}
            open={mobileGroup === 'individuals'}
            onToggle={() => setMobileGroup((g) => (g === 'individuals' ? null : 'individuals'))}
            onNavigate={closeMobile}
            viewAllLabel={t.nav.viewAll}
          />
          <MobileGroup
            label={t.nav.business}
            to={path('business')}
            items={businessItems}
            open={mobileGroup === 'business'}
            onToggle={() => setMobileGroup((g) => (g === 'business' ? null : 'business'))}
            onNavigate={closeMobile}
            viewAllLabel={t.nav.viewAll}
          />

          <Link
            to={path('contact')}
            onClick={closeMobile}
            className="py-2 text-sm font-semibold uppercase tracking-wide text-navy hover:text-brandred"
          >
            {t.nav.contact}
          </Link>

          <Link
            to={path('contact')}
            onClick={closeMobile}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded bg-brandred px-5 py-2.5 text-sm font-semibold uppercase text-white"
          >
            {t.nav.requestAdvice}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>

          <div className="mt-4 border-t border-gray-100 pt-4">
            <LanguageSwitcher variant="mobile" />
          </div>
        </nav>
      )}
    </header>
  )
}
