import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

type DropdownItem = { slug: string; title: string }

export default function NavDropdown({
  label,
  to,
  submenuLabel,
  items,
}: {
  label: string
  to: string
  submenuLabel: string
  items: DropdownItem[]
}) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const ref = useRef<HTMLDivElement>(null)

  // Cierra el desplegable en cuanto cambia la ruta (por ej. al hacer clic en un ítem),
  // sin depender de que el mouse se haya movido fuera del área.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={to}
        onFocus={() => setOpen(true)}
        className={({ isActive }) =>
          `flex items-center gap-1 border-b-2 pb-1 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brandred ${
            isActive ? 'border-brandred text-brandred' : 'border-transparent text-navy'
          }`
        }
      >
        {label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </NavLink>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg">
            <p className="border-b border-gray-100 bg-gray-50 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy/60">
              {submenuLabel}
            </p>
            <div className="py-1">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  to={`${to}/${item.slug}`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-navy hover:bg-gray-50 hover:text-brandred"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
