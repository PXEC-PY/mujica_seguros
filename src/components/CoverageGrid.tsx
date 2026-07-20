import { Link } from 'react-router-dom'
import type { Coverage } from '../data/coverages'
import Icon from './Icon'
import Reveal from './Reveal'
import { assetUrl } from '../lib/assetUrl'

export default function CoverageGrid({
  coverages,
  hrefFor,
  viewMoreLabel,
}: {
  coverages: Coverage[]
  hrefFor: (slug: string) => string
  viewMoreLabel: string
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {coverages.map((coverage, index) => (
        <Reveal key={coverage.slug} delay={Math.min(index * 0.08, 0.32)}>
          <Link
            to={hrefFor(coverage.slug)}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-navy">
              {coverage.image ? (
                <img
                  src={assetUrl(coverage.image)}
                  alt={coverage.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-dark">
                  <Icon name={coverage.icon} className="h-14 w-14 text-white/30" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent" />
              <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-brandred shadow">
                <Icon name={coverage.icon} className="h-5 w-5 text-white" />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-base font-bold uppercase text-navy">{coverage.title}</h3>
              <p className="mt-2 flex-1 text-sm text-navy/70">{coverage.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase text-brandred group-hover:text-brandred-dark">
                {viewMoreLabel}
                <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
