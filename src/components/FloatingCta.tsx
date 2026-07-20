import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Car } from 'lucide-react'
import type { Coverage } from '../data/coverages'
import { useLocale } from '../i18n/LocaleContext'

export default function FloatingCta({
  coverage,
  clientType,
}: {
  coverage: Coverage
  clientType: 'Persona' | 'Empresa'
}) {
  const { path } = useLocale()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const contactState = { tipoCliente: clientType, categoria: coverage.title }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to={path('contact')}
              state={contactState}
              className="flex items-center gap-2 rounded-full bg-brandred px-4 py-3 text-xs font-semibold uppercase text-white shadow-lg hover:bg-brandred-dark"
            >
              <Car className="h-4 w-4 shrink-0" />
              Cotizar
            </Link>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
