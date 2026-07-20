import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useLocation } from 'react-router-dom'
import { company } from '../data/company'
import { getPersonas } from '../data/personas'
import { getCoverages } from '../data/coverages'
import { useLocale, interpolate } from '../i18n/LocaleContext'

type FormValues = {
  nombre: string
  email: string
  telefono: string
  tipoCliente: 'Persona' | 'Empresa'
  categoria: string
  mensaje: string
  consentimiento: boolean
  marketing?: boolean
}

type ContactState = { tipoCliente?: 'Persona' | 'Empresa'; categoria?: string }

export default function Contacto() {
  const { t, path, locale } = useLocale()
  const location = useLocation()
  const c = t.contactPage
  const navState = (location.state as ContactState | null) ?? {}

  const categoriesByType = {
    Persona: getPersonas(locale).map((cov) => cov.title),
    Empresa: getCoverages(locale).map((cov) => cov.title),
  }

  const schema = useMemo(
    () =>
      z.object({
        nombre: z.string().min(2, c.validation.nombre),
        email: z.string().email(c.validation.email),
        telefono: z.string().min(6, c.validation.telefono),
        tipoCliente: z.enum(['Persona', 'Empresa']),
        categoria: z.string(),
        mensaje: z.string().min(10, c.validation.mensaje),
        consentimiento: z.boolean().refine((val) => val === true, {
          message: c.validation.consentimiento,
        }),
        marketing: z.boolean().optional(),
      }),
    [c.validation],
  )

  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      tipoCliente: navState.tipoCliente ?? 'Persona',
      categoria: navState.categoria ?? '',
      consentimiento: false,
      marketing: false,
    },
  })

  const tipoClienteSeleccionado = watch('tipoCliente')

  const onSubmit = async (data: FormValues) => {
    setError(null)
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('No se pudo enviar la consulta')
      setSent(true)
      reset()
    } catch {
      setError(c.errorMessage)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-brandred">{c.label}</p>
      <h1 className="mt-2 font-serif text-3xl text-navy">{c.title}</h1>
      <p className="mt-3 text-navy/70">{interpolate(c.subtitle, { brand: company.brandName })}</p>

      {sent ? (
        <div className="mt-10 rounded border border-green-200 bg-green-50 p-6 text-green-800">
          {c.successMessage}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5" noValidate>
          {error && (
            <div className="rounded border border-brandred/30 bg-brandred/5 p-4 text-sm text-brandred">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-navy" htmlFor="nombre">
              {c.nameLabel}
            </label>
            <input
              id="nombre"
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-navy focus:outline-none"
              {...register('nombre')}
            />
            {errors.nombre && <p className="mt-1 text-xs text-brandred">{errors.nombre.message}</p>}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-navy" htmlFor="email">
                {c.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-navy focus:outline-none"
                {...register('email')}
              />
              {errors.email && <p className="mt-1 text-xs text-brandred">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy" htmlFor="telefono">
                {c.phoneLabel}
              </label>
              <input
                id="telefono"
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-navy focus:outline-none"
                {...register('telefono')}
              />
              {errors.telefono && <p className="mt-1 text-xs text-brandred">{errors.telefono.message}</p>}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-navy" htmlFor="tipoCliente">
                {c.clientTypeLabel}
              </label>
              <select
                id="tipoCliente"
                className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:border-navy focus:outline-none"
                {...register('tipoCliente')}
              >
                <option value="Persona">{c.clientTypePersona}</option>
                <option value="Empresa">{c.clientTypeEmpresa}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy" htmlFor="categoria">
                {c.categoryLabel}
              </label>
              <select
                id="categoria"
                className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:border-navy focus:outline-none"
                {...register('categoria')}
              >
                <option value="">{c.categoryPlaceholder}</option>
                {categoriesByType[tipoClienteSeleccionado].map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy" htmlFor="mensaje">
              {c.messageLabel}
            </label>
            <textarea
              id="mensaje"
              rows={4}
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-navy focus:outline-none"
              {...register('mensaje')}
            />
            {errors.mensaje && <p className="mt-1 text-xs text-brandred">{errors.mensaje.message}</p>}
          </div>

          <div className="space-y-3 rounded border border-gray-200 bg-gray-50 p-4">
            <label className="flex items-start gap-2 text-sm text-navy/80">
              <input type="checkbox" className="mt-0.5" {...register('consentimiento')} />
              <span>
                {c.consentPrefix}{' '}
                <Link to={path('privacy')} className="text-brandred underline">
                  {c.consentLinkLabel}
                </Link>
                {interpolate(c.consentSuffix, { brand: company.brandName })}
              </span>
            </label>
            {errors.consentimiento && (
              <p className="text-xs text-brandred">{errors.consentimiento.message}</p>
            )}

            <label className="flex items-start gap-2 text-sm text-navy/80">
              <input type="checkbox" className="mt-0.5" {...register('marketing')} />
              <span>{interpolate(c.marketingText, { brand: company.brandName })}</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded bg-brandred px-6 py-3 text-sm font-semibold uppercase text-white hover:bg-brandred-dark disabled:opacity-60"
          >
            {isSubmitting ? c.submittingLabel : c.submitLabel}
          </button>
        </form>
      )}

      <div className="mt-12 grid gap-6 border-t border-gray-100 pt-8 text-sm text-navy/70 sm:grid-cols-3">
        <div>
          <p className="font-semibold text-navy">{c.phoneColumnLabel}</p>
          <p className="mt-1">{company.phone}</p>
        </div>
        <div>
          <p className="font-semibold text-navy">{c.emailColumnLabel}</p>
          <p className="mt-1">{company.email}</p>
        </div>
        <div>
          <p className="font-semibold text-navy">{c.addressColumnLabel}</p>
          <p className="mt-1">{company.address}</p>
        </div>
      </div>
    </div>
  )
}
