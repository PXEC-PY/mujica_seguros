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
          className="fixed bottom-5 right-5 z-40"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to={path('contact')}
              state={contactState}
              className="flex items-center gap-1.5 rounded-full bg-brandred py-2 pl-3 pr-3.5 text-xs font-semibold uppercase text-white shadow-lg hover:bg-brandred-dark"
            >
              <Car className="h-3.5 w-3.5 shrink-0" />
              Cotizar
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
