import { Link } from 'react-router-dom'
import fachada from '../assets/fachada.png'
import Icon from '../components/Icon'
import { useLocale } from '../i18n/LocaleContext'

const insurers = ['MAPFRE', 'Allianz', 'Zurich', 'Sancor Seguros', 'Chubb', 'Liberty Seguros', 'Sura']

export default function Home() {
  const { t, path } = useLocale()
  const { home } = t

  return (
    <div>
      <section className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-navy lg:min-h-[600px]">
        <img
          src={fachada}
          alt="Fachada de Mujica Seguros"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              {home.heroTitlePrefix} <span className="text-brandred">{home.heroTitleHighlight}</span>
            </h1>
            <div className="mt-4 h-1 w-16 bg-brandred" />
            <p className="mt-6 max-w-md text-white/80">{home.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Elegí tu perfil: Empresas / Personas */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brandred">{home.profileLabel}</p>
          <h2 className="mt-1 font-serif text-3xl text-navy">{home.profileTitle}</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link
            to={path('business')}
            className="group flex flex-col items-start gap-4 rounded-lg bg-navy p-8 text-white shadow-sm transition-shadow hover:shadow-lg sm:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brandred">
              <Icon name="building" className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase">{home.businessCardTitle}</h3>
              <p className="mt-2 text-sm text-white/70">{home.businessCardDesc}</p>
            </div>
            <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase text-brandred group-hover:text-white">
              {home.businessCardCta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </Link>

          <Link
            to={path('individuals')}
            className="group flex flex-col items-start gap-4 rounded-lg border border-gray-200 p-8 shadow-sm transition-shadow hover:shadow-lg sm:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy">
              <Icon name="user" className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase text-navy">{home.individualsCardTitle}</h3>
              <p className="mt-2 text-sm text-navy/70">{home.individualsCardDesc}</p>
            </div>
            <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase text-brandred group-hover:text-brandred-dark">
              {home.individualsCardCta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-navy-dark py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {home.features.map((f) => (
            <div key={f.title} className="text-center">
              <Icon name={f.icon} className="mx-auto h-9 w-9 text-brandred" />
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wide">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-xl lg:order-2">
          <img src={fachada} alt="Oficinas de Mujica Seguros" className="h-full w-full object-cover" />
        </div>
        <div className="lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-brandred">{home.aboutLabel}</p>
          <h2 className="mt-1 font-serif text-3xl text-navy">{home.aboutTitle}</h2>
          <p className="mt-4 text-navy/70">{home.aboutParagraph}</p>
          <Link
            to={path('about')}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase text-brandred hover:text-brandred-dark"
          >
            {home.aboutCta}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brandred">{home.statsLabel}</p>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <Icon name="badge" className="h-8 w-8 text-brandred" />
                <p className="mt-2 font-serif text-3xl text-navy">30+</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/70">{home.yearsLabel}</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-navy">100+</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/70">{home.clientsLabel}</p>
              </div>
              <div>
                <Icon name="globe" className="h-8 w-8 text-brandred" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-navy/70">
                  {home.globalLabel}
                </p>
                <p className="mt-1 text-xs text-navy/60">{home.globalText}</p>
              </div>
            </div>
          </div>

          <div className="hidden h-full w-px bg-gray-200 lg:block" />

          <div>
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-navy/60 lg:text-left">
              {home.insurersLabel}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
              {insurers.map((name) => (
                <span key={name} className="text-base font-semibold text-navy/50">
                  {name}
                </span>
              ))}
              <span className="text-sm text-navy/40">{home.andMore}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
