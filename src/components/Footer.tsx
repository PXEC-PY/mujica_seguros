import { Link } from 'react-router-dom'
import { company } from '../data/company'
import Icon from './Icon'
import { useLocale, interpolate } from '../i18n/LocaleContext'

export default function Footer() {
  const { t, path } = useLocale()

  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-5">
          <div>
            <h3 className="text-lg font-semibold">{t.footer.needAdviceTitle}</h3>
            <p className="mt-2 text-sm text-white/70">{t.footer.needAdviceText}</p>
            <Link
              to={path('contact')}
              className="mt-4 inline-flex items-center gap-2 rounded bg-brandred px-5 py-2.5 text-sm font-semibold uppercase text-white hover:bg-brandred-dark"
            >
              {t.footer.contactUsCta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              {t.footer.callUsLabel}
            </h4>
            <p className="mt-2 text-sm">{company.phone}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              {t.footer.writeUsLabel}
            </h4>
            <p className="mt-2 text-sm">{company.email}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              {t.footer.visitUsLabel}
            </h4>
            <p className="mt-2 text-sm">{company.address}</p>
          </div>

          <div className="flex gap-3">
            <Icon name="badge" className="h-9 w-9 shrink-0 text-brandred" />
            <p className="text-xs leading-relaxed text-white/70">
              {t.footer.brokerLicenseText}
              <br />
              Matrícula N° {company.matricula} · Res. {company.resolucion}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            <strong className="text-white/80">{company.brandName}</strong> {t.footer.brandLine} · RUC:{' '}
            {company.ruc} · {company.titulares}
          </p>
          <p className="flex flex-wrap gap-x-2">
            <Link to={path('legal')} className="underline hover:text-white">
              {t.footer.legalNotice}
            </Link>
            <span>·</span>
            <Link to={path('privacy')} className="underline hover:text-white">
              {t.footer.privacyPolicy}
            </Link>
          </p>
        </div>
        <p className="mt-3 text-xs text-white/60">
          {interpolate(t.footer.disclaimer, { brand: company.brandName })}
        </p>
        <p className="mt-4 text-white/40">{t.footer.internalNote}</p>
      </div>
    </footer>
  )
}
