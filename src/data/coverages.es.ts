import type { Coverage } from './coverages'

const coverages: Coverage[] = [
  {
    slug: 'property',
    title: 'Property',
    icon: 'building',
    shortDescription: 'Protección integral para bienes e instalaciones.',
    intro:
      'Protegemos tus bienes, instalaciones y operaciones ante riesgos materiales que puedan afectar la continuidad de tu negocio.',
    items: [
      {
        name: 'Todo Riesgo Operativo',
        description: 'Cobertura amplia contra daños materiales imprevistos en la operación de tu empresa.',
      },
      {
        name: 'Incendio',
        description: 'Protección ante pérdidas causadas por fuego, rayo y explosión.',
      },
      {
        name: 'Pérdida de Beneficios',
        description: 'Compensa la caída de ingresos cuando un siniestro interrumpe tu actividad.',
      },
      {
        name: 'Rotura de Maquinarias',
        description: 'Cubre daños súbitos e imprevistos en equipos y maquinaria productiva.',
      },
      {
        name: 'Terrorismo',
        description: 'Cobertura ante daños materiales derivados de actos terroristas.',
      },
      {
        name: 'Construcción y Montaje',
        description: 'Protección integral durante obras civiles y montaje de instalaciones.',
      },
      {
        name: 'Equipos Electrónicos',
        description: 'Cubre daños a equipos informáticos y electrónicos sensibles.',
      },
      {
        name: 'Robo',
        description: 'Cobertura ante sustracción de contenido, valores o infidelidad de empleados.',
      },
      {
        name: 'Automóviles',
        description: 'Protección para la flota vehicular de la empresa.',
      },
    ],
  },
  {
    slug: 'marine-cargo',
    title: 'Marine & Cargo',
    icon: 'ship',
    shortDescription: 'Seguros marítimos y de transporte internacional.',
    intro:
      'Cobertura para embarcaciones, cargas y operaciones logísticas en tránsito marítimo, terrestre e internacional.',
    items: [
      {
        name: 'Casco y Maquinaria',
        description: 'Cobertura para el casco y la maquinaria de embarcaciones ante daños físicos.',
      },
      {
        name: 'War',
        description: 'Protección ante daños derivados de guerra, huelgas o disturbios civiles.',
      },
      {
        name: 'Loss of Hire',
        description: 'Compensa la pérdida de ingresos por inactividad de la embarcación.',
      },
      {
        name: 'Increased Value',
        description: 'Cobertura adicional sobre el valor incrementado de la nave asegurada.',
      },
      {
        name: 'Liability',
        description: 'Responsabilidad civil derivada de la operación de la embarcación.',
      },
      {
        name: 'P&I',
        description: 'Cobertura de responsabilidad frente a terceros, tripulación y carga.',
      },
      {
        name: 'Marine Cargo',
        description: 'Protección de mercaderías durante el transporte marítimo internacional.',
      },
      {
        name: 'Inland Transit',
        description: 'Cobertura de mercaderías durante el transporte terrestre interno.',
      },
      {
        name: 'Stock Throughput',
        description: 'Cobertura combinada de mercadería en tránsito y en almacenamiento.',
      },
      {
        name: 'Marine Liability',
        description: 'Responsabilidad civil vinculada a operaciones marítimas y portuarias.',
      },
    ],
  },
  {
    slug: 'aviation',
    title: 'Aviation',
    icon: 'plane',
    shortDescription: 'Coberturas para aeronaves y operadores.',
    intro: 'Soluciones para aeronaves, operadores y riesgos propios de la actividad aeronáutica.',
    items: [
      {
        name: 'Aviation Hull',
        description: 'Cobertura de daños físicos a la aeronave.',
      },
      {
        name: 'Liability',
        description: 'Responsabilidad civil frente a terceros y pasajeros.',
      },
      {
        name: 'War',
        description: 'Protección ante daños por actos de guerra o terrorismo en la aviación.',
      },
    ],
  },
  {
    slug: 'casualty-professional-lines',
    title: 'Casualty & Professional Lines',
    icon: 'contract',
    shortDescription: 'Responsabilidad civil y coberturas profesionales.',
    intro: 'Protección frente a reclamos de responsabilidad civil y profesional derivados de tu actividad.',
    items: [
      {
        name: 'Responsabilidad Civil',
        description: 'Cobertura ante reclamos de terceros por daños causados por la actividad de la empresa.',
      },
      {
        name: 'Employers Liability',
        description: 'Protección ante reclamos de empleados por accidentes laborales.',
      },
      {
        name: 'Directors & Officers (D&O)',
        description: 'Cobertura para directores y gerentes ante reclamos por decisiones de gestión.',
      },
      {
        name: 'Errors & Omissions (E&O)',
        description: 'Protección ante reclamos por errores u omisiones profesionales.',
      },
    ],
  },
  {
    slug: 'agro',
    title: 'Agro',
    icon: 'leaf',
    shortDescription: 'Coberturas para el sector agropecuario.',
    intro: 'Seguros pensados para el sector agropecuario y los agronegocios.',
    items: [
      {
        name: 'Multirriesgo',
        description: 'Cobertura integral ante múltiples riesgos agrícolas.',
      },
      {
        name: 'Granizo e Incendio',
        description: 'Protección de cultivos ante granizo e incendio.',
      },
      {
        name: 'Forestal',
        description: 'Cobertura para plantaciones y explotaciones forestales.',
      },
      {
        name: 'Ganado',
        description: 'Protección del ganado ante enfermedad, accidente o muerte.',
      },
    ],
  },
  {
    slug: 'surety',
    title: 'Surety',
    icon: 'infinity',
    shortDescription: 'Garantías y licitaciones.',
    intro: 'Garantías de cumplimiento, licitación y aduaneras para respaldar tus contratos y operaciones.',
    items: [
      {
        name: 'Mantenimiento de Oferta',
        description: 'Garantiza el cumplimiento de las condiciones de una oferta en licitación.',
      },
      {
        name: 'Cumplimiento de Contrato',
        description: 'Garantiza la correcta ejecución de un contrato.',
      },
      {
        name: 'Anticipo',
        description: 'Garantiza la devolución de anticipos recibidos ante incumplimiento.',
      },
    ],
  },
  {
    slug: 'employee-benefits',
    title: 'Employee Benefits',
    icon: 'heart',
    shortDescription: 'Salud, vida y medicina prepaga internacional.',
    intro:
      'Beneficios de salud y previsión para tus colaboradores, incluyendo acceso a medicina prepaga internacional.',
    featured: true,
    items: [
      {
        name: 'Vida Colectiva e Individual',
        description: 'Cobertura ante fallecimiento o invalidez del asegurado.',
      },
      {
        name: 'Accidentes Personales',
        description: 'Protección ante accidentes con cobertura de gastos médicos.',
      },
      {
        name: 'Gastos Médicos',
        description: 'Cobertura de gastos médicos por enfermedad o accidente.',
      },
      {
        name: 'Salud',
        description: 'Planes de cobertura médica integral.',
      },
      {
        name: 'Consultoría en Medicina Prepaga',
        description: 'Asesoramiento para elegir el plan de salud más conveniente, incluyendo opciones internacionales.',
      },
    ],
  },
]

export default coverages
