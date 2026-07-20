import { useEffect } from 'react'
import { useRoutes, useLocation, Navigate, type RouteObject } from 'react-router-dom'
import { LocaleProvider } from './i18n/LocaleContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Empresas from './pages/Empresas'
import Personas from './pages/Personas'
import CoverageDetalle from './pages/CoverageDetalle'
import SobreNosotros from './pages/SobreNosotros'
import Contacto from './pages/Contacto'
import AvisoLegal from './pages/AvisoLegal'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'

type LocaleSegments = {
  about: string
  business: string
  individuals: string
  contact: string
  legal: string
  privacy: string
}

function localeRoutes(homePath: string, segments: LocaleSegments): RouteObject[] {
  return [
    { index: true, element: <Home /> },
    { path: segments.about, element: <SobreNosotros /> },
    { path: segments.business, element: <Empresas /> },
    { path: `${segments.business}/:slug`, element: <CoverageDetalle group="empresas" /> },
    { path: segments.individuals, element: <Personas /> },
    { path: `${segments.individuals}/:slug`, element: <CoverageDetalle group="personas" /> },
    { path: segments.contact, element: <Contacto /> },
    { path: segments.legal, element: <AvisoLegal /> },
    { path: segments.privacy, element: <PoliticaPrivacidad /> },
    { path: '*', element: <Navigate to={homePath} replace /> },
  ]
}

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/es" replace /> },
  {
    path: '/es',
    children: localeRoutes('/es', {
      about: 'sobre-nosotros',
      business: 'empresas',
      individuals: 'personas',
      contact: 'contacto',
      legal: 'aviso-legal',
      privacy: 'politica-de-privacidad',
    }),
  },
  {
    path: '/en',
    children: localeRoutes('/en', {
      about: 'about-us',
      business: 'business',
      individuals: 'individuals',
      contact: 'contact',
      legal: 'legal-notice',
      privacy: 'privacy-policy',
    }),
  },
  {
    path: '/pt',
    children: localeRoutes('/pt', {
      about: 'sobre-nos',
      business: 'empresas',
      individuals: 'pessoas',
      contact: 'contato',
      legal: 'aviso-legal',
      privacy: 'politica-de-privacidade',
    }),
  },
  // Rutas antiguas sin idioma: redirigir a la versión en español
  { path: '*', element: <Navigate to="/es" replace /> },
]

function AppRoutes() {
  return useRoutes(routes)
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <LocaleProvider>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  )
}
