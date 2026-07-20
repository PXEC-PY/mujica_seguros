import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import CountUp from 'react-countup'
import {
  Handshake,
  ShieldPlus,
  Scale,
  CarFront,
  LifeBuoy,
  RefreshCw,
  ShieldCheck,
  TrendingDown,
  Flame,
  Siren,
  Cross,
  Users,
  Accessibility,
  Stethoscope,
  Hammer,
  CloudHail,
  Lock,
  Image,
  Laptop,
  Lightbulb,
  ShieldAlert,
  DoorOpen,
  Plane,
  Wrench,
  TrendingUp,
  Network,
  FileEdit,
  UserCheck,
  Coins,
  CreditCard,
  Biohazard,
  HeartCrack,
  Syringe,
  Building2,
  BedDouble,
  Bell,
  Zap,
  BarChart3,
  Ambulance,
  Bandage,
  Briefcase,
  FileCheck2,
  HandCoins,
  BadgeDollarSign,
  PhoneCall,
  Landmark,
  Globe,
  Check,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react'
import { getCoverageBySlug } from '../data/coverages'
import { getPersonaBySlug } from '../data/personas'
import Icon from '../components/Icon'
import Faq from '../components/Faq'
import FloatingCta from '../components/FloatingCta'
import { useLocale } from '../i18n/LocaleContext'
import { assetUrl } from '../lib/assetUrl'

const benefitIcons: Record<string, LucideIcon> = {
  Handshake,
  ShieldPlus,
  Scale,
  CarFront,
  LifeBuoy,
  RefreshCw,
  ShieldCheck,
  TrendingDown,
  Flame,
  Siren,
  Cross,
  Users,
  Accessibility,
  Stethoscope,
  Hammer,
  CloudHail,
  Lock,
  Image,
  Laptop,
  Lightbulb,
  ShieldAlert,
  DoorOpen,
  Plane,
  Wrench,
  TrendingUp,
  Network,
  FileEdit,
  UserCheck,
  Coins,
  CreditCard,
  Biohazard,
  HeartCrack,
  Syringe,
  Building2,
  BedDouble,
  Bell,
  Zap,
  BarChart3,
  Ambulance,
  Bandage,
  Briefcase,
  FileCheck2,
  HandCoins,
  BadgeDollarSign,
  PhoneCall,
  Landmark,
  Globe,
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const heroTextParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const heroTextItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

type Group = 'empresas' | 'personas'

export default function CoverageDetalle({ group }: { group: Group }) {
  const { slug } = useParams<{ slug: string }>()
  const { locale, t, path } = useLocale()
  const section = group === 'empresas' ? 'business' : 'individuals'
  const coverage = group === 'empresas' ? getCoverageBySlug(locale, slug) : getPersonaBySlug(locale, slug)
  const groupLabel = group === 'empresas' ? t.businessPage.label : t.individualsPage.label
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (coverage) document.title = `${coverage.title} | Mujica Seguros`
  }, [coverage])

  if (!coverage) return <Navigate to={path(section)} replace />

  return (
    <div key={coverage.slug}>
      <section className="relative min-h-[420px] overflow-hidden bg-navy py-16 text-white">
        {coverage.image && (
          <>
            {coverage.heroEnhanced ? (
              <motion.img
                src={assetUrl(coverage.image)}
                alt={coverage.title}
                className="absolute inset-0 h-full w-full object-cover brightness-110 contrast-105"
                style={{ objectPosition: coverage.heroImagePosition ?? '78% 22%' }}
                animate={reduceMotion ? undefined : { scale: [1.1, 1.16, 1.1] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : (
              <img
                src={assetUrl(coverage.image)}
                alt={coverage.title}
                className="absolute inset-0 h-full w-full object-cover object-[65%_20%]"
              />
            )}
            {coverage.heroEnhanced ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 bg-navy/80" />
            )}
          </>
        )}
        <motion.div
          className="relative mx-auto max-w-4xl px-6"
          variants={coverage.heroEnhanced ? heroTextParent : undefined}
          initial={coverage.heroEnhanced ? 'hidden' : undefined}
          animate={coverage.heroEnhanced ? 'show' : undefined}
        >
          <motion.nav
            variants={coverage.heroEnhanced ? heroTextItem : undefined}
            className="text-xs uppercase tracking-wide text-white/60"
          >
            <Link to={path(section)} className="hover:text-white">
              {groupLabel}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{coverage.title}</span>
          </motion.nav>

          <motion.div
            variants={coverage.heroEnhanced ? heroTextItem : undefined}
            className="mt-6 flex items-center gap-4"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brandred">
              <Icon name={coverage.icon} className="h-7 w-7 text-white" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl">{coverage.heroTitle ?? coverage.title}</h1>
          </motion.div>

          <motion.p variants={coverage.heroEnhanced ? heroTextItem : undefined} className="mt-5 max-w-2xl text-white/80">
            {coverage.heroTagline ?? coverage.intro}
          </motion.p>

          {coverage.heroCtas && coverage.heroCtas.length > 0 && (
            <motion.div variants={heroTextItem} className="mt-7 flex flex-wrap gap-4">
              {coverage.heroCtas.map((cta) =>
                cta.href.startsWith('#') ? (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className={
                      cta.variant === 'primary'
                        ? 'rounded bg-brandred px-6 py-3 text-sm font-semibold uppercase text-white hover:bg-brandred-dark'
                        : 'rounded border border-white/70 px-6 py-3 text-sm font-semibold uppercase text-white hover:bg-white/10'
                    }
                  >
                    {cta.label}
                  </a>
                ) : (
                  <Link
                    key={cta.label}
                    to={path('contact')}
                    state={{ tipoCliente: group === 'empresas' ? 'Empresa' : 'Persona', categoria: coverage.title }}
                    className={
                      cta.variant === 'primary'
                        ? 'rounded bg-brandred px-6 py-3 text-sm font-semibold uppercase text-white hover:bg-brandred-dark'
                        : 'rounded border border-white/70 px-6 py-3 text-sm font-semibold uppercase text-white hover:bg-white/10'
                    }
                  >
                    {cta.label}
                  </Link>
                ),
              )}
            </motion.div>
          )}

          {coverage.heroChecklist && coverage.heroChecklist.length > 0 && (
            <motion.ul variants={heroTextItem} className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {coverage.heroChecklist.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-white/85">
                  <Check className="h-4 w-4 shrink-0 text-brandred" />
                  {point}
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>

        {coverage.heroEnhanced && (
          <a
            href="#detalle-automoviles"
            aria-label="Seguir bajando"
            className="absolute inset-x-0 bottom-4 flex justify-center text-white/70 hover:text-white"
          >
            <motion.span animate={reduceMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <ChevronDown className="h-6 w-6" />
            </motion.span>
          </a>
        )}
      </section>

      {coverage.authorityStats && coverage.authorityStats.length > 0 && (
        <section className="border-y border-gray-100 bg-white py-8">
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4 px-6 text-center">
            {coverage.authorityStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-brandred sm:text-4xl">
                  <CountUp end={stat.value} suffix={stat.suffix ?? ''} enableScrollSpy scrollSpyOnce duration={2} />
                </p>
                <p className="mt-1 text-xs text-navy/60 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {coverage.about && (
        <section id="detalle-automoviles" className="mx-auto max-w-6xl px-6 py-14">
          <nav className="text-xs text-navy/50">
            <Link to={path()} className="text-brandred hover:text-brandred-dark">
              {t.nav.home}
            </Link>
            <span className="mx-1.5">»</span>
            <Link to={path(section)} className="text-brandred hover:text-brandred-dark">
              {groupLabel}
            </Link>
            <span className="mx-1.5">»</span>
            <span>{coverage.title}</span>
          </nav>

          <div className="mt-6 grid gap-10 md:grid-cols-[2fr_3fr] md:items-start">
            <motion.div
              initial={{ opacity: 0, x: reduceMotion ? 0 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="font-serif text-2xl text-brandred sm:text-3xl">{coverage.about.title}</h2>
              <div className="mt-4 space-y-4 text-navy/80">
                {coverage.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {coverage.about.checklist && coverage.about.checklist.length > 0 && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {coverage.about.checklist.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-navy/80">
                      <Check className="h-4 w-4 shrink-0 text-brandred" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {coverage.about.ctaLabel && (
                <Link
                  to={path('contact')}
                  state={{ tipoCliente: group === 'empresas' ? 'Empresa' : 'Persona', categoria: coverage.title }}
                  className="mt-6 inline-block rounded bg-brandred px-6 py-3 text-sm font-semibold uppercase text-white hover:bg-brandred-dark"
                >
                  {coverage.about.ctaLabel}
                </Link>
              )}
            </motion.div>

            {coverage.secondaryImage && (
              <motion.div
                className="group aspect-[4/3] overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0, x: reduceMotion ? 0 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <img
                  src={assetUrl(coverage.secondaryImage)}
                  alt={coverage.title}
                  className="h-full w-full object-cover object-[80%_50%] transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </motion.div>
            )}
          </div>
        </section>
      )}

      {coverage.benefits && (
        <section className="bg-gray-50 py-14">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-serif text-2xl text-brandred sm:text-3xl">{coverage.benefits.title}</h2>
            <p className="mx-auto mt-3 max-w-3xl text-navy/70">{coverage.benefits.subtitle}</p>

            <motion.div
              className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {coverage.benefits.items.map((item) => {
                const BenefitIcon = benefitIcons[item.icon] ?? ShieldCheck
                return (
                  <motion.div key={item.title} variants={staggerItem}>
                    <BenefitIcon className="mx-auto h-11 w-11 text-brandred" strokeWidth={1.75} />
                    <h3 className="mt-4 text-base font-bold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-navy/70">{item.text}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
      )}

      {coverage.promoBanner && (
        <section className="relative py-14">
          <Link to={path('contact')} className="relative block">
            <img src={assetUrl(coverage.promoBanner)} alt={coverage.title} className="w-full" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
          </Link>
        </section>
      )}

      {coverage.risks && (
        <section id="coberturas" className="py-14">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-serif text-2xl text-brandred sm:text-3xl">{coverage.risks.title}</h2>
            <p className="mx-auto mt-3 max-w-3xl text-navy/70">{coverage.risks.subtitle}</p>

            <motion.div
              className={`mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 ${
                coverage.risks.items.length % 3 === 0 && coverage.risks.items.length % 4 !== 0
                  ? 'lg:grid-cols-3'
                  : 'lg:grid-cols-4'
              }`}
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {coverage.risks.items.map((item) => {
                const RiskIcon = benefitIcons[item.icon] ?? ShieldCheck
                return (
                  <motion.div key={item.label} variants={staggerItem}>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy text-white">
                      <RiskIcon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <p className="mt-4 text-sm font-medium text-navy/80">{item.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
      )}

      {coverage.feature && (
        <section className="relative overflow-hidden bg-gradient-to-br from-navy to-brandred-dark py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: reduceMotion ? 0 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="font-serif text-2xl sm:text-3xl">{coverage.feature.title}</h2>
              <div className="mt-4 space-y-4 text-white/85">
                {coverage.feature.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link
                to={path('contact')}
                state={{ tipoCliente: group === 'empresas' ? 'Empresa' : 'Persona', categoria: coverage.title }}
                className="mt-6 inline-block rounded bg-brandred px-6 py-3 text-sm font-semibold uppercase text-white hover:bg-brandred-dark"
              >
                {coverage.feature.ctaLabel}
              </Link>
            </motion.div>

            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg md:aspect-auto md:h-full md:min-h-[360px]"
              initial={{ opacity: 0, x: reduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src={assetUrl(coverage.feature.image)}
                alt={coverage.title}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: coverage.feature.imagePosition ?? 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>
      )}

      {coverage.ctaBanner && (
        <section className="mx-auto max-w-6xl px-6 py-4">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-brandred to-brandred-dark">
            <div className="relative z-10 flex flex-col gap-6 px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4 sm:max-w-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Icon name={coverage.icon} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white sm:text-3xl">{coverage.ctaBanner.title}</h3>
                  <p className="mt-2 text-white/85">{coverage.ctaBanner.text}</p>
                </div>
              </div>
              <Link
                to={path('contact')}
                state={{ tipoCliente: group === 'empresas' ? 'Empresa' : 'Persona', categoria: coverage.title }}
                className="inline-flex w-fit items-center gap-2 rounded bg-white px-6 py-3 text-sm font-semibold uppercase text-brandred shadow hover:bg-gray-100"
              >
                {coverage.ctaBanner.buttonLabel}
              </Link>
            </div>
            <img
              src={assetUrl(coverage.ctaBanner.image)}
              alt=""
              className="absolute inset-y-0 right-0 hidden w-1/3 object-cover opacity-90 [mask-image:linear-gradient(to_right,transparent,black_25%)] sm:block"
              style={{ objectPosition: coverage.ctaBanner.imagePosition ?? 'center' }}
            />
          </div>
        </section>
      )}

      {coverage.promoBanner2 && (
        <section className="relative py-14">
          <Link to={path('contact')} className="relative block">
            <img src={assetUrl(coverage.promoBanner2)} alt={coverage.title} className="w-full" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
          </Link>
        </section>
      )}

      {coverage.faq && (
        <section id="preguntas-frecuentes" className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-center font-serif text-2xl text-brandred sm:text-3xl">{coverage.faq.title}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-navy/70">{coverage.faq.subtitle}</p>
          <div className="mt-8">
            <Faq items={coverage.faq.items} />
          </div>
        </section>
      )}

      {coverage.items.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brandred">
            {t.detailPage.coveragesIncluded}
          </h2>
          <div className="mt-6 divide-y divide-gray-100 border-t border-gray-100">
            {coverage.items.map((item) => (
              <div key={item.name} className="py-5">
                <h3 className="text-base font-bold text-navy">{item.name}</h3>
                <p className="mt-1 text-sm text-navy/70">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {!coverage.hideAdviceCta && (
        <section className="bg-gray-50 py-14 text-center">
          <h2 className="font-serif text-2xl text-navy">{t.detailPage.needAdviceTitle(coverage.title)}</h2>
          <p className="mt-2 text-navy/70">{t.detailPage.needAdviceText}</p>
          <Link
            to={path('contact')}
            state={{ tipoCliente: group === 'empresas' ? 'Empresa' : 'Persona', categoria: coverage.title }}
            className="mt-6 inline-block rounded bg-brandred px-6 py-3 text-sm font-semibold uppercase text-white hover:bg-brandred-dark"
          >
            {t.detailPage.requestAdvice}
          </Link>
        </section>
      )}

      {coverage.floatingCta && <FloatingCta coverage={coverage} clientType={group === 'empresas' ? 'Empresa' : 'Persona'} />}
    </div>
  )
}
