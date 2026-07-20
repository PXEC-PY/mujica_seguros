import { Link } from 'react-router-dom'
import { getCoverages } from '../data/coverages'
import Accordion, { type AccordionItemData } from '../components/Accordion'
import Icon from '../components/Icon'
import { useLocale } from '../i18n/LocaleContext'

export default function Empresas() {
  const { locale, t, path } = useLocale()

  const items: AccordionItemData[] = getCoverages(locale).map((coverage) => ({
    id: coverage.slug,
    icon: coverage.icon,
    title: coverage.title,
    subtitle: coverage.shortDescription,
    content: (
      <div>
        <ul className="space-y-3 text-sm">
          {coverage.items.map((item) => (
            <li key={item.name}>
              <span className="font-semibold text-navy">{item.name}.</span>{' '}
              <span className="text-navy/70">{item.description}</span>
            </li>
          ))}
        </ul>
        <Link
          to={path('business', coverage.slug)}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase text-brandred hover:text-brandred-dark"
        >
          {t.businessPage.viewFullPage}
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>
    ),
  }))

  return (
    <div>
      <section className="bg-navy-dark py-16 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-wide text-brandred">{t.businessPage.label}</p>
        <h1 className="mt-2 font-serif text-4xl">{t.businessPage.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl px-6 text-white/70">{t.businessPage.subtitle}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <Accordion items={items} />
      </section>

      <section className="bg-gray-50 py-14 text-center">
        <h2 className="font-serif text-2xl text-navy">{t.businessPage.notFoundTitle}</h2>
        <p className="mt-2 text-navy/70">{t.businessPage.notFoundText}</p>
        <Link
          to={path('contact')}
          className="mt-6 inline-block rounded bg-brandred px-6 py-3 text-sm font-semibold uppercase text-white hover:bg-brandred-dark"
        >
          {t.businessPage.requestAdvice}
        </Link>
      </section>
    </div>
  )
}
