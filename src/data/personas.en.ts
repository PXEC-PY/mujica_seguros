import type { Coverage } from './coverages'

// NOTA: el contenido extendido (about, benefits, risks, ctaBanner/feature, faq) todavía
// está en español como relleno temporal, a la espera de la traducción real al inglés.
const personas: Coverage[] = [
  {
    id: 'vida-individual',
    slug: 'individual-life',
    title: 'Individual Life',
    icon: 'shield',
    shortDescription: 'Financial protection for your family.',
    intro:
      'Financially protects your family in the event of death or disability, with a sum insured of your choice.',
    image: '/images/banner-vida.png',
    secondaryImage: '/images/mano-vida.png',
    heroEnhanced: true,
    heroImagePosition: '50% 35%',
    heroTagline: 'Contar con un seguro de vida es una de las formas más nobles de cuidar a tu familia.',
    heroCtas: [{ label: 'Cotizá tu seguro', href: 'contact', variant: 'primary' }],
    heroChecklist: [
      'Protección para vos y tu familia',
      'Asesoramiento personalizado',
      'Coberturas adaptadas a tu etapa de vida',
    ],
    hideAdviceCta: true,
    floatingCta: true,
    about: {
      title: '¿En qué consiste un seguro de vida?',
      paragraphs: [
        'Un seguro de vida es una póliza que se encarga de cubrir los gastos que involucran situaciones de peligro.',
        'Con un seguro de vida, cualquier contingencia que pueda afectar la salud, la integridad o el desenvolvimiento normal de la vida de quienes la adquieren estará bajo protección.',
        'De esta forma, un seguro de vida consiste en una protección financiera para la familia en el caso que el titular de la póliza fallezca o quede inválido. La cantidad de dinero que reciba la familia dependerá de la cobertura de la póliza que contrate.',
      ],
      ctaLabel: 'Cotizá tu seguro',
    },
    benefits: {
      title: 'Beneficios de tener un seguro de vida',
      subtitle:
        'Protegiendo su vida, uno se prepara tanto a sí mismo como a sus familiares para afrontar los momentos más duros de la manera más diligente posible. Proteger la vida trae consigo una larga lista de beneficios.',
      items: [
        {
          icon: 'Users',
          title: 'Tranquilidad para tu familia',
          text: 'Proteger tu vida significa proteger el futuro bienestar de tu familia por medio de la estabilidad económica.',
        },
        {
          icon: 'TrendingUp',
          title: 'Control de Gastos',
          text: 'Una cobertura de vida te permite anticipar gastos médicos por enfermedades o por sepelio.',
        },
        {
          icon: 'ShieldPlus',
          title: 'Protección inmediata',
          text: 'Desde el primer día que comiences a pagar tu póliza de seguro, tanto tu familia como vos estarán protegidos ante cualquier contingencia.',
        },
        {
          icon: 'Network',
          title: 'Creación de herencia',
          text: 'Al proteger tu vida, automáticamente creas una herencia que puedes dejar a tus seres queridos, asegurando su bienestar financiero.',
        },
        {
          icon: 'FileEdit',
          title: 'Modificación de póliza',
          text: 'Una gran ventaja de un seguro de vida es que te permite modificar la póliza para adaptar tu cobertura a diferentes necesidades y situaciones a lo largo del tiempo.',
        },
        {
          icon: 'UserCheck',
          title: 'Elegís tus beneficiarios',
          text: 'Un seguro de vida te permite elegir quién será tu beneficiario y brinda la flexibilidad de modificarlo en cualquier momento.',
        },
        {
          icon: 'Coins',
          title: 'La indemnización es inembargable',
          text: 'La cifra estipulada por el contrato es la que recibirá el beneficiario de la póliza. No hay deducibles ni impuestos que resten a lo estipulado por el contrato.',
        },
        {
          icon: 'CreditCard',
          title: 'La forma de pago de la cobertura la elegís vos',
          text: 'Muchas coberturas de vida te permiten elegir cómo recibir la compensación. Podés elegir mensualmente, trimestralmente, anualmente, o en su totalidad.',
        },
      ],
    },
    risks: {
      title: 'Protegemos tu vida y la de tu familia',
      subtitle:
        'Contar con el respaldo de un seguro de vida protege el futuro de tu familia. El seguro de vida incluye coberturas por todo lo siguiente.',
      items: [
        { icon: 'Biohazard', label: 'COVID-19' },
        { icon: 'Cross', label: 'Muerte por cualquier circunstancia' },
        { icon: 'Accessibility', label: 'Incapacidad total y permanente por enfermedad o accidente' },
        { icon: 'HeartCrack', label: 'Desmembramiento por accidente' },
        { icon: 'Syringe', label: 'Compensación por trasplantes de órganos' },
        { icon: 'Building2', label: 'Gastos médicos y renta diaria hospitalaria en caso de accidentes' },
        { icon: 'BedDouble', label: 'Indemnización por enfermedad terminal' },
        { icon: 'Bell', label: 'Cobertura de gastos por sepelio' },
      ],
    },
    ctaBanner: {
      title: 'Cuidá de tu familia, más allá de tu presencia.',
      text: 'Un seguro de vida es siempre necesario. Es la mejor forma de garantizar que tu familia tenga acceso a su bienestar, educación y calidad de vida, más allá de tu ausencia.',
      buttonLabel: 'Cotizá tu seguro',
      image: '/images/cta-vida.png',
      imagePosition: '45% 45%',
    },
    faq: {
      title: 'Preguntas frecuentes: Seguros de vida',
      subtitle: 'Respondemos las dudas más comunes sobre seguros de vida.',
      items: [
        {
          question: '¿Qué es un seguro de vida y para qué sirve?',
          answer: [
            'Un seguro de vida es una póliza que brinda protección financiera a tu familia ante situaciones como el fallecimiento o la invalidez del titular.',
            'Sirve para garantizar que las personas que dependen de vos puedan cubrir sus gastos y mantener su calidad de vida, incluso si vos ya no estás para proveerlos.',
          ],
        },
        {
          question: '¿Quiénes pueden contratar un seguro de vida?',
          answer: [
            'En general, cualquier persona adulta puede contratar un seguro de vida, dentro de los rangos de edad y condiciones de salud que defina cada aseguradora.',
            'Es especialmente recomendable para quienes tienen personas a cargo, como hijos, cónyuge o padres mayores.',
          ],
        },
        {
          question: '¿Cuál es la diferencia entre seguro de vida y seguro de accidentes personales?',
          answer: [
            'El seguro de vida cubre principalmente el fallecimiento o la invalidez del titular por cualquier causa, incluyendo enfermedad, y protege económicamente a su familia.',
            'El seguro de accidentes personales, en cambio, cubre específicamente hechos accidentales: invalidez, fallecimiento o gastos médicos derivados de un accidente, dentro o fuera del horario laboral.',
            'Muchas personas contratan ambas coberturas de forma complementaria para tener una protección más completa.',
          ],
        },
        {
          question: '¿Cómo se determina el monto de la cobertura?',
          answer: [
            'El capital asegurado se define junto con vos al momento de contratar la póliza, en base a tus necesidades: gastos familiares, deudas pendientes, educación de tus hijos u otros objetivos financieros.',
            'También influyen tu edad, tu estado de salud y el plan que elijas. Nuestro equipo te asesora para calcular un monto adecuado a tu situación.',
          ],
        },
        {
          question: '¿Qué debo hacer para iniciar un reclamo ante un siniestro?',
          answer: [
            'Ante un siniestro, los beneficiarios deben comunicarse con nosotros para recibir orientación sobre la documentación necesaria y los pasos a seguir ante la aseguradora.',
            'Te acompañamos durante todo el proceso para que el trámite sea lo más rápido y simple posible en un momento difícil.',
          ],
        },
        {
          question: '¿Cuáles son las empresas de seguros de vida con las que trabaja Mujica Seguros?',
          answer: [
            'Trabajamos con las principales aseguradoras del mercado paraguayo, seleccionadas por su solidez y calidad de servicio: MAPFRE, Allianz, Zurich, Sancor Seguros, Chubb, Liberty Seguros y Sura.',
            'Esto nos permite comparar opciones y encontrar la cobertura que mejor se adapte a vos y a tu familia.',
          ],
        },
      ],
    },
    items: [],
  },
  {
    id: 'accidentes-personales',
    slug: 'personal-accidents',
    title: 'Personal Accidents',
    icon: 'user',
    shortDescription: 'Coverage for everyday accidents.',
    intro:
      'Coverage for accidents that cause disability, death or medical expenses, on and off the job.',
    image: '/images/banner-accidentes.png',
    secondaryImage: '/images/accidente-lesion.png',
    heroEnhanced: true,
    heroImagePosition: '50% 28%',
    heroTitle: 'Seguros contra accidentes personales',
    heroTagline:
      'Los accidentes suceden y nosotros te ayudamos a estar preparado para enfrentarlos. Buscamos hacer que no duelan tanto, minimizando sus consecuencias.',
    heroCtas: [{ label: 'Cotizá tu seguro', href: 'contact', variant: 'primary' }],
    heroChecklist: ['Protección inmediata', 'Asesoramiento personalizado', 'Coberturas adaptadas a tu vida'],
    hideAdviceCta: true,
    floatingCta: true,
    about: {
      title: '¿Qué es un seguro contra accidentes personales?',
      paragraphs: [
        'Los seguros contra accidentes personales tienen el objetivo de protegerte contra todo tipo de accidentes, desde los que suceden en casa y en los deportes que practicamos como los que pueden sucederte mientras estás trabajando.',
        'En caso de sufrir un accidente personal, la compañía aseguradora se encargará de asistirte en cuanto a los otros gastos que pudieran generarse. Asegurar tu integridad y la de tu familia contra posibles eventos inoportunos es, sin duda, un gran acto de amor.',
        'Mujica Seguros tiene la misión de impulsarte a vivir mejor y asegurarte contra todo tipo de riesgos. Nuestros asesores son expertos en cuanto a la protección personal contra accidentes. En todo momento, buscamos maximizar tu tranquilidad y calidad de vida.',
      ],
      ctaLabel: 'Cotizá tu seguro',
    },
    benefits: {
      title: 'Beneficios de asegurarte contra accidentes',
      subtitle:
        'Los accidentes siempre pueden ocurrir. Sean grandes o pequeños, traen consigo gastos inesperados que pueden ir acumulándose. Por esto, protegerse ante accidentes que atenten contra nuestra integridad es siempre una decisión inteligente.',
      items: [
        {
          icon: 'Zap',
          title: 'Protección inmediata',
          text: 'Una de las grandes ventajas de asegurarte contra accidentes es que el minuto que comience tu cobertura, los beneficios de tu póliza comienzan a estar vigentes.',
        },
        {
          icon: 'RefreshCw',
          title: 'Planes flexibles',
          text: 'Los planes de seguros contra accidentes personales son completamente personalizables. Tenés completo control de qué te gustaría proteger y cómo afrontar estos gastos.',
        },
        {
          icon: 'Building2',
          title: 'Cobertura de gastos médicos',
          text: 'Un seguro contra accidentes te permitirá hacer frente a los gastos médicos que vienen con ellos. De esta forma, te ayudará a preservar la estabilidad financiera familiar.',
        },
        {
          icon: 'BarChart3',
          title: 'Relación costo-beneficio',
          text: 'Son muchos los beneficios de asegurarte contra accidentes en comparación con los costos que estos pueden traer, tanto para vos como para tu carrera. Asegurar tu bienestar es siempre una buena idea.',
        },
      ],
    },
    risks: {
      title: 'Te protegemos contra todo riesgo',
      subtitle:
        'Desafortunadamente, nadie de nosotros puede predecir cuándo sucederán los accidentes. Lo que sí podemos hacer es prepararnos para que, en el caso de que sucedan, tengamos la certeza de que vamos a poder hacer frente a la situación lo más eficientemente posible.',
      items: [
        { icon: 'Cross', label: 'Muerte accidental' },
        { icon: 'Ambulance', label: 'Asistencia médica por accidentes' },
        { icon: 'Bell', label: 'Gastos por sepelio' },
        { icon: 'Bandage', label: 'Asistencia sanitaria por lesión' },
        { icon: 'ShieldCheck', label: 'Protección familiar' },
        { icon: 'Briefcase', label: 'Indemnización por desmembramiento' },
      ],
    },
    feature: {
      title: 'Año tras año, los costos médicos continúan creciendo',
      paragraphs: [
        'Tal como nos informa la OECD, el sistema de salud en Paraguay enfrenta grandes desafíos. El estudio realizado por la organización destacó la fragmentación que se encuentra en el sistema sanitario paraguayo.',
        'Por un lado, los costos relacionados a gastos médicos continúan creciendo año tras año. Por otro, cada vez es más difícil para una familia paraguaya acceder a ellos.',
        'Todos estos resultados fueron más que evidentes durante estos últimos años, con los efectos de la pandemia del COVID-19 en Paraguay. Por eso, y por muchos otros motivos más, es importante estar siempre asegurado ante cualquier posible contingencia.',
        'Un seguro contra accidentes personales te permitirá hacer frente a gastos inesperados y acceder a la atención médica necesaria para tratarte.',
      ],
      ctaLabel: 'Cotizá tu seguro',
      image: '/images/accidente-hospital.png',
      imagePosition: '55% 40%',
    },
    faq: {
      title: 'Preguntas frecuentes: Seguros contra accidentes personales',
      subtitle: 'Respondemos las dudas más comunes sobre seguros contra accidentes personales.',
      items: [
        {
          question: '¿Qué cubre un seguro contra accidentes personales?',
          answer: [
            'Un seguro contra accidentes personales cubre, entre otras cosas, la muerte accidental, la incapacidad total o parcial, los gastos médicos derivados de un accidente y los gastos por sepelio.',
            'El alcance exacto depende del plan y la aseguradora elegida; te ayudamos a definir la cobertura que mejor se ajuste a tu día a día.',
          ],
        },
        {
          question: '¿Los accidentes deben ocurrir en el trabajo para estar cubiertos?',
          answer: [
            'No. Un seguro contra accidentes personales cubre accidentes dentro y fuera del horario laboral: en casa, practicando deportes, en la vía pública o en cualquier otra circunstancia de la vida diaria, salvo exclusiones específicas de la póliza.',
          ],
        },
        {
          question: '¿Cuál es la diferencia entre un seguro contra accidentes personales y un seguro de vida?',
          answer: [
            'El seguro contra accidentes personales cubre específicamente hechos accidentales: invalidez, fallecimiento o gastos médicos derivados de un accidente.',
            'El seguro de vida, en cambio, cubre el fallecimiento o la invalidez del titular por cualquier causa, incluyendo enfermedad, no solo accidentes.',
            'Muchas personas contratan ambas coberturas de forma complementaria para tener una protección más completa.',
          ],
        },
        {
          question: '¿Desde cuándo comienzan a regir las coberturas?',
          answer: [
            'Las coberturas comienzan a regir desde el momento en que se activa la póliza, una vez abonada la primera cuota, salvo que se establezcan períodos de carencia específicos para ciertas coberturas.',
          ],
        },
        {
          question: '¿Qué debo hacer si sufro un accidente cubierto por la póliza?',
          answer: [
            'Ante un accidente, comunicate con nosotros lo antes posible para orientarte sobre la documentación necesaria (parte médico, denuncia, comprobantes) y los pasos a seguir ante la aseguradora.',
            'Te acompañamos durante todo el proceso para que la gestión sea lo más rápida y simple posible.',
          ],
        },
        {
          question: '¿Cuáles son las empresas de seguros con las que trabaja Mujica Seguros?',
          answer: [
            'Trabajamos con las principales aseguradoras del mercado paraguayo, seleccionadas por su solidez y calidad de servicio: MAPFRE, Allianz, Zurich, Sancor Seguros, Chubb, Liberty Seguros y Sura.',
            'Esto nos permite comparar opciones y encontrar la cobertura que mejor se adapte a vos.',
          ],
        },
      ],
    },
    items: [],
  },
  {
    id: 'salud',
    slug: 'health',
    title: 'Health',
    icon: 'heart',
    shortDescription: 'Comprehensive medical coverage.',
    intro:
      'Coverage for medical expenses, hospitalization and diagnostic tests due to illness or accident, with plans in Paraguay and abroad.',
    image: '/images/banner-salud.png',
    secondaryImage: '/images/salud-internacional.png',
    heroEnhanced: true,
    heroImagePosition: '55% 30%',
    heroTitle: 'Cuidamos tu salud con los mejores especialistas del mundo.',
    heroTagline:
      'Con una extensa red de hospitales internacionales, preparados para ofrecer tratamientos de vanguardia.',
    heroCtas: [{ label: 'Cotizá tu seguro', href: 'contact', variant: 'primary' }],
    heroChecklist: ['Cobertura en Paraguay y el exterior', 'Asesoramiento personalizado', 'Planes a tu medida'],
    hideAdviceCta: true,
    floatingCta: true,
    about: {
      title: '¿Por qué un seguro de salud internacional?',
      paragraphs: [
        'Estamos expuestos a distintas situaciones o acontecimientos que pueden darle un giro radical a nuestra vida. Se pueden presentar enfermedades y/o accidentes que necesiten tratamientos extensivos, costosos y de vanguardia, que requieran seguir un tratamiento o atención médica fuera del país por la innovación o mayor experiencia en el área de salud que puedan tener otros destinos.',
        'El seguro de salud internacional te brinda acceso a los mejores cuidados médicos cuando más los necesitás, protegiéndote a vos y a tu familia de los altos costos que conlleva el cuidado de la salud a nivel mundial.',
      ],
      ctaLabel: 'Cotizá tu seguro',
    },
    benefits: {
      title: 'Beneficios de contar con un seguro de salud internacional',
      subtitle: 'Las grandes ventajas que ofrecen nuestras pólizas.',
      items: [
        {
          icon: 'FileCheck2',
          title: 'Seguro médico regulado',
          text: 'Seguro médico internacional regulado y admitido por la Superintendencia de Seguros y el Banco Central del Paraguay.',
        },
        {
          icon: 'Stethoscope',
          title: 'Coberturas completas',
          text: 'Las más completas y exclusivas coberturas de gastos médicos mayores a nivel mundial.',
        },
        {
          icon: 'Globe',
          title: 'Red de hospitales selectos',
          text: 'Red de hospitales selectos y beneficios en los centros médicos de mayor prestigio en el mundo.',
        },
        {
          icon: 'Building2',
          title: 'Red de hospitales locales',
          text: 'Acceso a red de hospitales locales de mayor prestigio en Paraguay.',
        },
        {
          icon: 'BedDouble',
          title: 'Hospitalización cubierta',
          text: 'Hospitalización, urgencias y cirugías ambulatorias cubiertas al 100%, sin deducible, en Paraguay.',
        },
        {
          icon: 'HandCoins',
          title: 'Protección patrimonial',
          text: 'Protección patrimonial ante eventos catastróficos y de alta complejidad.',
        },
        {
          icon: 'Biohazard',
          title: 'Cobertura COVID-19',
          text: 'Coberturas por COVID-19 sin aplicar período de carencia.',
        },
        {
          icon: 'BadgeDollarSign',
          title: 'Renta por incapacidad',
          text: 'Renta mensual por incapacidad, tanto por accidente como por enfermedad.',
        },
        {
          icon: 'PhoneCall',
          title: 'Asistencia al viajero',
          text: 'Asistencia al viajero de hasta 10.000 USD.',
        },
        {
          icon: 'Landmark',
          title: 'Solidez financiera',
          text: 'Solidez financiera y reaseguradores de gran prestigio internacional.',
        },
        {
          icon: 'Cross',
          title: 'Cobertura por fallecimiento',
          text: 'Cobertura por fallecimiento, muerte accidental y desmembramiento (MAD) incluida.',
        },
        {
          icon: 'Network',
          title: 'Cobertura para dependientes',
          text: 'Cobertura para los dependientes elegibles debido a la muerte del titular, hasta 3 años.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes: Seguros de salud',
      subtitle: 'Respondemos las dudas más comunes sobre seguros de salud.',
      items: [
        {
          question: '¿Qué diferencia hay entre un seguro de salud local e internacional?',
          answer: [
            'Un seguro de salud local cubre gastos médicos dentro de Paraguay, mientras que un seguro de salud internacional además te da acceso a tratamientos, especialistas y hospitales de referencia en el exterior, para situaciones que requieran atención de mayor complejidad.',
          ],
        },
        {
          question: '¿Qué gastos cubre un seguro de salud?',
          answer: [
            'Un seguro de salud puede cubrir, entre otros:',
            {
              list: [
                'Consultas médicas, estudios y análisis.',
                'Internación, cirugías y urgencias.',
                'Tratamientos por enfermedad o accidente.',
                'Asistencia al viajero.',
                'Cobertura por fallecimiento o incapacidad.',
              ],
            },
            'El alcance exacto depende del plan que contrates; te ayudamos a definir la cobertura que mejor se ajuste a vos y a tu familia.',
          ],
        },
        {
          question: '¿Tiene período de carencia el seguro de salud?',
          answer: [
            'Depende de la cobertura y de la aseguradora elegida. Algunas coberturas, como las relacionadas a COVID-19, pueden no aplicar período de carencia, mientras que otras sí lo requieren. Te asesoramos sobre las condiciones de cada plan antes de contratar.',
          ],
        },
        {
          question: '¿Puedo incluir a mi familia en la misma póliza?',
          answer: [
            'Sí. Podés incluir a tu cónyuge e hijos como dependientes dentro de la misma póliza, con coberturas adaptadas a cada etapa de vida.',
          ],
        },
        {
          question: '¿Cuáles son las empresas de seguros de salud con las que trabaja Mujica Seguros?',
          answer: [
            'Trabajamos con las principales aseguradoras del mercado paraguayo, seleccionadas por su solidez y calidad de servicio: MAPFRE, Allianz, Zurich, Sancor Seguros, Chubb, Liberty Seguros y Sura.',
            'Esto nos permite comparar opciones y encontrar la cobertura que mejor se adapte a vos.',
          ],
        },
      ],
    },
    items: [],
  },
  {
    id: 'hogar',
    slug: 'home',
    title: 'Home',
    icon: 'building',
    shortDescription: 'Protection for your home and belongings.',
    intro:
      'Protection for your home and its contents against fire, theft, electrical damage and liability toward third parties.',
    image: '/images/banner-hogar.png',
    secondaryImage: '/images/hogar.png',
    heroEnhanced: true,
    heroImagePosition: '65% 48%',
    heroTagline: 'Protegé tu vivienda y disfrutá de la tranquilidad de saber que lo más importante está seguro.',
    heroCtas: [{ label: 'Cotizar ahora', href: 'contact', variant: 'primary' }],
    heroChecklist: ['Protección para tu hogar', 'Asesoramiento profesional', 'Cobertura personalizada'],
    hideAdviceCta: true,
    floatingCta: true,
    about: {
      title: '¿Qué es un seguro para el hogar?',
      paragraphs: [
        'Un seguro para el hogar te brinda protección ante daños patrimoniales. La póliza resguarda tu vivienda y los objetos dentro de ella ante situaciones inesperadas y desafortunadas.',
        'Contar con un seguro de hogar te ayuda a hacerle frente a robos, incendios, pérdidas, explosiones, rayos, rotura de cristales, caídas y otras situaciones que puedan ocurrir en tu hogar, junto a tu familia.',
        'Es importante estar preparados para prevenir estos momentos, es por eso que es bueno tener previsiones que nos ahorran molestias y preocupaciones.',
      ],
      ctaLabel: 'Cotizá tu seguro',
    },
    benefits: {
      title: 'Tu casa guarda tus bienes más preciados. Por eso nuestro placer es protegerla.',
      subtitle:
        'Nuestros seguros para el hogar te acompañan con coberturas pensadas para cuidar tu vivienda, tus objetos de valor y a tu familia ante cualquier imprevisto.',
      items: [
        {
          icon: 'Lock',
          title: 'Seguridad financiera',
          text: 'Te brinda tranquilidad ante cualquier eventualidad, cubriendo los gastos y daños que puedan ocurrir.',
        },
        {
          icon: 'Image',
          title: 'Recuerdos que valen oro',
          text: 'Protección para tus objetos de valor y recuerdos especiales que forman parte de tu historia.',
        },
        {
          icon: 'Laptop',
          title: 'Equipos electrónicos',
          text: 'Cubre tus dispositivos electrónicos ante daños accidentales o robos.',
        },
        {
          icon: 'Lightbulb',
          title: 'Atención y soluciones rápidas',
          text: 'Asistencia inmediata para resolver lo que necesités y cuidar tu patrimonio.',
        },
        {
          icon: 'RefreshCw',
          title: 'Flexibilidad',
          text: 'Planes adaptados a tus necesidades y al tipo de protección que buscás para tu hogar.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Responsabilidad civil',
          text: 'Cobertura ante daños que puedan afectar a terceros dentro o fuera de tu propiedad.',
        },
      ],
    },
    risks: {
      title: 'Cuidamos tu hogar ante lo que puede pasar.',
      subtitle:
        'Protegemos tu hogar contra todo riesgo. Aunque tomes precauciones, los imprevistos pueden ocurrir en cualquier momento, y estar preparado marca la diferencia.',
      items: [
        { icon: 'DoorOpen', label: 'Robo y/o asalto de propiedad' },
        { icon: 'ShieldAlert', label: 'Rotura de cristales, vidrios o espejos' },
        { icon: 'Laptop', label: 'Robo y/o daños a equipos eléctricos' },
        { icon: 'CloudHail', label: 'Daños por causas naturales (granizo, rayos, vientos, etc.)' },
        { icon: 'Plane', label: 'Daños por caída de aeronaves y/o sus partes' },
        { icon: 'Wrench', label: 'Averías físicas o estructurales' },
        { icon: 'Flame', label: 'Daños por incendios' },
        { icon: 'Users', label: 'Daños a terceros dentro o fuera de tu propiedad' },
      ],
    },
    ctaBanner: {
      title: '¿Querés proteger tu hogar?',
      text: 'Solicitá asesoramiento y encontrá la cobertura ideal para vos y tu familia.',
      buttonLabel: 'Solicitar asesoramiento',
      image: '/images/banner-hogar.png',
      imagePosition: '65% 55%',
    },
    faq: {
      title: 'Preguntas frecuentes: Seguros para el hogar',
      subtitle: 'Respondemos las dudas más comunes sobre seguros para el hogar.',
      items: [
        {
          question: '¿Es obligatorio tener un seguro para el hogar en Paraguay?',
          answer: [
            'No, en Paraguay contratar un seguro para el hogar no es obligatorio por ley. La decisión de contratarlo queda a criterio del propietario o inquilino de la vivienda.',
            'Sin embargo, contar con esta cobertura te da tranquilidad ante imprevistos que pueden implicar gastos importantes, como un incendio o un robo.',
          ],
        },
        {
          question: '¿Qué cubre un seguro para el hogar?',
          answer: [
            'Un seguro de hogar puede cubrir, entre otras cosas:',
            {
              list: [
                'Incendio, explosión y rayo.',
                'Robo con violencia o efracción, y hurto de contenido.',
                'Rotura de cristales, vidrios o espejos.',
                'Daños eléctricos a electrodomésticos y equipos electrónicos.',
                'Daños por causas naturales, como granizo, vientos o inundaciones.',
                'Responsabilidad civil ante terceros dentro y fuera de la propiedad.',
              ],
            },
            'El alcance exacto depende del plan y la aseguradora elegida; te ayudamos a definir la cobertura que mejor se ajuste a tu vivienda.',
          ],
        },
        {
          question: '¿Cómo se determina el valor asegurado de mi vivienda?',
          answer: [
            'El valor asegurado se calcula en base al valor de reconstrucción de la vivienda (no el valor de mercado del terreno) y, si corresponde, al valor de reposición del contenido: muebles, electrodomésticos y objetos de valor.',
            'Nuestro equipo te acompaña para estimar correctamente estos valores y evitar quedar sub o sobre asegurado.',
          ],
        },
        {
          question: '¿El seguro de hogar cubre tanto la vivienda como su contenido?',
          answer: [
            'Sí. Podés contratar cobertura para la estructura de la vivienda (paredes, techos, instalaciones fijas) y también para el contenido (muebles, electrodomésticos, ropa y objetos personales), según el plan que elijas.',
          ],
        },
        {
          question: '¿Qué debo hacer si sufro un siniestro en mi hogar?',
          answer: [
            'Ante un siniestro, comunicate con nosotros lo antes posible para orientarte en los primeros pasos: cómo resguardar el lugar, qué documentación reunir y cómo iniciar el reclamo ante la aseguradora.',
            'Te acompañamos durante todo el proceso de gestión del siniestro, para que la resolución sea lo más rápida y simple posible.',
          ],
        },
        {
          question: '¿Cuáles son las empresas de seguros para el hogar con las que trabaja Mujica Seguros?',
          answer: [
            'Trabajamos con las principales aseguradoras del mercado paraguayo, seleccionadas por su solidez y calidad de servicio: MAPFRE, Allianz, Zurich, Sancor Seguros, Chubb, Liberty Seguros y Sura.',
            'Esto nos permite comparar opciones y encontrar la cobertura que mejor se adapte a tu vivienda y a tu presupuesto.',
          ],
        },
      ],
    },
    items: [],
  },
  {
    id: 'automoviles',
    slug: 'auto',
    title: 'Auto',
    icon: 'car',
    shortDescription: 'Coverage for your personal vehicle.',
    intro:
      'Liability and damage coverage for your personal vehicle, with roadside assistance in the event of a claim.',
    image: '/images/automoviles.png',
    secondaryImage: '/images/banner-automoviles-2.png',
    heroEnhanced: true,
    heroTagline: 'Protegé tu vehículo y manejá con tranquilidad, con la cobertura ideal para vos.',
    heroCtas: [{ label: 'Cotizar ahora', href: 'contact', variant: 'primary' }],
    heroChecklist: [
      'Asesoramiento personalizado',
      'Comparamos las mejores aseguradoras',
      'Atención rápida y sin complicaciones',
    ],
    authorityStats: [
      { value: 30, suffix: '+', label: 'años de experiencia' },
      { value: 7, label: 'aseguradoras aliadas' },
      { value: 7, suffix: '+', label: 'líneas de cobertura' },
    ],
    about: {
      title: 'Manejá tranquilo, nosotros te acompañamos',
      paragraphs: [
        'Un imprevisto puede ocurrir en cualquier momento. Con la cobertura adecuada, protegés tu vehículo y a las personas que más te importan.',
        'Nuestro equipo te acompaña antes, durante y después de un siniestro, para que nunca estés solo frente a un imprevisto.',
      ],
      checklist: [
        'Atención personalizada',
        'Cobertura adaptada a vos',
        'Asistencia inmediata',
        'Respaldo en cada etapa',
      ],
    },
    hideAdviceCta: true,
    floatingCta: true,
    benefits: {
      title: 'Beneficios de tener un seguro de autos',
      subtitle:
        'Nuestros seguros de autos incluyen un equipo capacitado para atenderte y protegerte en caso de que te veas involucrado en algún imprevisto, brindándote la tranquilidad que necesitas en ese momento.',
      items: [
        {
          icon: 'Handshake',
          title: 'Cobertura personalizada',
          text: 'Mujica Seguros se especializa en el asesoramiento de sus clientes, asesorándolos en las mejores decisiones en cuanto a la cobertura de vehículos.',
        },
        {
          icon: 'ShieldPlus',
          title: 'Daños y gastos médicos',
          text: 'Nos encargamos de gestionar la cobertura de la aseguradora de todos los gastos médicos y materiales, inclusive los daños a terceros, según la póliza de seguro de auto contratada.',
        },
        {
          icon: 'Scale',
          title: 'Asesoría legal',
          text: 'Ponemos a tu disposición un equipo de abogados especializados para proporcionarte asesoría legal sobre la situación.',
        },
        {
          icon: 'CarFront',
          title: 'Daños materiales cubiertos',
          text: 'Después de un accidente de tránsito, con tu seguro de autos gestionamos la cobertura con la aseguradora para que tu auto quede como nuevo.',
        },
        {
          icon: 'LifeBuoy',
          title: 'Asistencia en camino',
          text: 'Si tenés algún imprevisto en ruta, como quedarte sin combustible, cambiar un neumático, o llamar a una grúa, Mujica Seguros podrá asistirte las 24 hs.',
        },
        {
          icon: 'RefreshCw',
          title: 'Reponen tu auto',
          text: 'En casos de pérdida total, o de robo, la aseguradora se encarga de reponer tu vehículo.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Tranquilidad al volante',
          text: 'Con una buena cobertura, tus preocupaciones quedarán reducidas a la mitad en cuanto a posibles accidentes.',
        },
        {
          icon: 'TrendingDown',
          title: 'Reducción de riesgos',
          text: 'Con una buena póliza de seguro para autos, se minimizan los costos de accidentes como también protegerse de daños legales personales.',
        },
      ],
    },
    risks: {
      title: 'Protegemos tu auto ante cualquier riesgo',
      subtitle:
        'Aunque confíes en tu manera de manejar, es fácil pensar que a vos nunca te va a pasar. Pero por más cuidado que tengas al volante, los imprevistos pueden ocurrir en cualquier momento, seas o no el responsable.',
      items: [
        { icon: 'Flame', label: 'Daños totales por accidente o incendio' },
        { icon: 'Siren', label: 'Robo total de tu vehículo' },
        { icon: 'Cross', label: 'Lesiones corporales a los ocupantes' },
        { icon: 'Users', label: 'Daños ocasionados a terceros' },
        { icon: 'Accessibility', label: 'Muerte o incapacidad permanente de los ocupantes' },
        { icon: 'Stethoscope', label: 'Gastos de asistencia médica para cada ocupante' },
        { icon: 'Hammer', label: 'Daños por actos de vandalismo' },
        { icon: 'CloudHail', label: 'Daños por granizo o inundaciones' },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes: Seguros para autos',
      subtitle: 'Nos encanta ayudarte a proteger todo lo que amás. Contestamos tus preguntas para ayudarte a proteger tu vehículo.',
      items: [
        {
          question: '¿Es obligatorio tener un seguro para autos en Paraguay?',
          answer: [
            'En Paraguay, tener un seguro de auto no es obligatorio por ley. A diferencia de otros países de la región, que exigen un seguro obligatorio de accidentes de tránsito (SOAT), en Paraguay la contratación queda a criterio del propietario del vehículo.',
            'Sin embargo, que no sea obligatorio no significa que no sea necesario: siempre es mejor prevenir que lamentar un imprevisto sin cobertura.',
          ],
        },
        {
          question: '¿Cuáles son los beneficios de tener un seguro para autos en Paraguay?',
          answer: [
            'Contar con un seguro de auto te da protección económica ante daños al vehículo y, sobre todo, respaldo financiero frente a situaciones donde se vean afectados terceros, ya sea por lesiones o por daños a sus bienes.',
            'Los accidentes de tránsito son más frecuentes de lo que se piensa, y estar preparado marca la diferencia frente a un siniestro.',
            'Así como protegés tu casa o tu salud, tu vehículo también merece estar cubierto.',
          ],
        },
        {
          question: '¿Qué clase de coberturas para seguros de autos ofrece Mujica Seguros?',
          answer: [
            'Te ayudamos a elegir entre las principales coberturas disponibles para tu vehículo, entre ellas:',
            {
              list: [
                'Daños por incendio, accidente, robo, tumultos populares y vandalismo.',
                'Daños a neumáticos, baterías y demás componentes y accesorios del vehículo.',
                'Daños por granizo o aguas pluviales.',
                'Robo total o parcial del vehículo, incluyendo sus componentes y contenido.',
                'Reposición de airbags en caso de accidente.',
                'Lesiones corporales y/o muerte de terceros, y daños a sus bienes.',
                'Lesiones corporales y/o muerte de los ocupantes del vehículo, y sus gastos médicos.',
                'Extensión de cobertura para circular por los países del Mercosur, Chile y Bolivia, con Carta Verde incluida.',
                'Servicio de grúa ante siniestros o desperfectos mecánicos.',
                'Auto de reemplazo, según el plan contratado.',
              ],
            },
            'Si creés que alguna de estas coberturas puede ayudarte, contactanos y te asesoramos sin cargo.',
          ],
        },
        {
          question: '¿Cuáles son las empresas de seguros para autos con las que trabaja Mujica Seguros?',
          answer: [
            'Trabajamos con las principales aseguradoras del mercado paraguayo, seleccionadas por su solidez y calidad de servicio: MAPFRE, Allianz, Zurich, Sancor Seguros, Chubb, Liberty Seguros y Sura.',
            'Esto nos permite ofrecerte distintas opciones de cobertura y encontrar la que mejor se adapte a tus necesidades y a tu presupuesto.',
          ],
        },
        {
          question: '¿Cómo me ayuda Mujica Seguros a personalizar mi seguro para autos?',
          answer: [
            'Nuestro equipo de asesores está capacitado para acompañarte en todo el proceso, entendiendo tu situación particular para recomendarte la opción que mejor se ajuste a tus necesidades y a tu presupuesto.',
          ],
        },
        {
          question: '¿Aproximadamente cuánto cuesta un seguro de autos por mes?',
          answer: [
            'El costo de un seguro de auto depende de variables como el valor del vehículo en el mercado, su antigüedad y equipamiento, además del tipo de cobertura elegida, que puede ir desde un plan básico hasta uno full con todos los beneficios disponibles.',
            'En Mujica Seguros trabajamos para que encuentres el producto acorde a tu necesidad y a tu capacidad de pago. Solicitá tu cotización sin cargo.',
          ],
        },
        {
          question: '¿Qué elementos debes considerar para elegir el mejor seguro para autos?',
          answer: [
            'Contar con atención oportuna y eficiente ante un accidente de tránsito es fundamental, y tener un asesor de confianza marca la diferencia.',
            'Al contratar un seguro de autos, te recomendamos tener en cuenta:',
            {
              list: [
                'El costo mensual del servicio.',
                'Los daños y siniestros que cubre la póliza (robos, accidentes, lesiones, daños a terceros, vandalismo, granizo, entre otros).',
                'Los plazos de pago disponibles.',
                'Los acompañantes habituales en el vehículo.',
                'La calidad de atención de la aseguradora ante un siniestro.',
              ],
            },
            'La rapidez y efectividad del servicio pueden ser determinantes en el momento de un accidente, así que asesorate bien antes de decidir.',
          ],
        },
        {
          question: '¿Cuáles son los factores que influencian una cobertura para autos?',
          answer: [
            'Entre los factores que influyen en el precio de un seguro de auto se encuentran:',
            {
              list: [
                'Las características del vehículo: año, tipo y modelo.',
                'El valor actual del auto en el mercado.',
                'La edad del propietario del auto.',
                'Las coberturas deseadas por el titular de la póliza.',
              ],
            },
            'En Mujica Seguros nos encargamos del asesoramiento de nuestros clientes para que ellos, sus vehículos y sus acompañantes estén siempre protegidos.',
          ],
        },
      ],
    },
    items: [],
  },
]

export default personas
