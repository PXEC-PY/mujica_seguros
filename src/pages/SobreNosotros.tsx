import fachada from '../assets/fachada.png'
import Reveal from '../components/Reveal'
import { useLocale } from '../i18n/LocaleContext'

export default function SobreNosotros() {
  const { t } = useLocale()
  const { aboutPage: a } = t

  return (
    <div>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brandred">{a.label}</p>
          <h1 className="mt-2 font-serif text-4xl text-navy">{a.title}</h1>
          <p className="mt-6 text-navy/70">{a.p1}</p>
          <p className="mt-4 text-navy/70">{a.p2}</p>
        </Reveal>
        <Reveal delay={0.1} className="overflow-hidden rounded-lg shadow-xl">
          <img src={fachada} alt="Oficinas de Mujica Seguros" className="h-full w-full object-cover" />
        </Reveal>
      </section>

      <section className="bg-navy-dark py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-3">
          <Reveal>
            <p className="font-serif text-4xl text-brandred">{a.stat1Value}</p>
            <p className="mt-2 text-sm text-white/70">{a.stat1Text}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-serif text-4xl text-brandred">{a.stat2Value}</p>
            <p className="mt-2 text-sm text-white/70">{a.stat2Text}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-serif text-4xl text-brandred">{a.stat3Value}</p>
            <p className="mt-2 text-sm text-white/70">{a.stat3Text}</p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
