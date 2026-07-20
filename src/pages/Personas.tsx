import { Link } from 'react-router-dom'
import { getPersonas } from '../data/personas'
import CoverageGrid from '../components/CoverageGrid'
import Reveal from '../components/Reveal'
import { useLocale } from '../i18n/LocaleContext'

export default function Personas() {
  const { locale, t, path } = useLocale()
  const personas = getPersonas(locale)

  return (
    <div>
      <section className="bg-navy-dark py-16 text-center text-white">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brandred">
            {t.individualsPage.label}
          </p>
          <h1 className="mt-2 font-serif text-4xl">{t.individualsPage.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl px-6 text-white/70">{t.individualsPage.subtitle}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <CoverageGrid
          coverages={personas}
          hrefFor={(slug) => path('individuals', slug)}
          viewMoreLabel={t.individualsPage.viewMore}
        />
      </section>

      <Reveal>
        <section className="bg-gray-50 py-14 text-center">
          <h2 className="font-serif text-2xl text-navy">{t.individualsPage.notFoundTitle}</h2>
          <p className="mt-2 text-navy/70">{t.individualsPage.notFoundText}</p>
          <Link
            to={path('contact')}
            className="mt-6 inline-block rounded bg-brandred px-6 py-3 text-sm font-semibold uppercase text-white hover:bg-brandred-dark"
          >
            {t.individualsPage.requestAdvice}
          </Link>
        </section>
      </Reveal>
    </div>
  )
}
