import type { Coverage } from './coverages'

const coverages: Coverage[] = [
  {
    slug: 'property',
    title: 'Property',
    icon: 'building',
    shortDescription: 'Proteção integral para bens e instalações.',
    intro:
      'Protegemos seus bens, instalações e operações contra riscos materiais que possam afetar a continuidade do seu negócio.',
    items: [
      {
        name: 'Todos os Riscos Operacionais',
        description: 'Cobertura ampla contra danos materiais imprevistos na operação da sua empresa.',
      },
      {
        name: 'Incêndio',
        description: 'Proteção contra perdas causadas por incêndio, raio e explosão.',
      },
      {
        name: 'Lucros Cessantes',
        description: 'Compensa a queda de receita quando um sinistro interrompe sua atividade.',
      },
      {
        name: 'Quebra de Máquinas',
        description: 'Cobre danos súbitos e imprevistos a equipamentos e máquinas produtivas.',
      },
      {
        name: 'Terrorismo',
        description: 'Cobertura contra danos materiais decorrentes de atos terroristas.',
      },
      {
        name: 'Construção e Montagem',
        description: 'Proteção integral durante obras civis e montagem de instalações.',
      },
      {
        name: 'Equipamentos Eletrônicos',
        description: 'Cobre danos a equipamentos de informática e eletrônicos sensíveis.',
      },
      {
        name: 'Roubo',
        description: 'Cobertura contra subtração de conteúdo, valores ou infidelidade de funcionários.',
      },
      {
        name: 'Automóveis',
        description: 'Proteção para a frota de veículos da empresa.',
      },
    ],
  },
  {
    slug: 'marine-cargo',
    title: 'Marine & Cargo',
    icon: 'ship',
    shortDescription: 'Seguros marítimos e de transporte internacional.',
    intro:
      'Cobertura para embarcações, cargas e operações logísticas em trânsito marítimo, terrestre e internacional.',
    items: [
      {
        name: 'Casco e Máquinas',
        description: 'Cobertura para o casco e as máquinas de embarcações contra danos físicos.',
      },
      {
        name: 'War',
        description: 'Proteção contra danos decorrentes de guerra, greves ou distúrbios civis.',
      },
      {
        name: 'Loss of Hire',
        description: 'Compensa a perda de receita por inatividade da embarcação.',
      },
      {
        name: 'Increased Value',
        description: 'Cobertura adicional sobre o valor incrementado da embarcação segurada.',
      },
      {
        name: 'Liability',
        description: 'Responsabilidade civil decorrente da operação da embarcação.',
      },
      {
        name: 'P&I',
        description: 'Cobertura de responsabilidade perante terceiros, tripulação e carga.',
      },
      {
        name: 'Marine Cargo',
        description: 'Proteção de mercadorias durante o transporte marítimo internacional.',
      },
      {
        name: 'Inland Transit',
        description: 'Cobertura de mercadorias durante o transporte terrestre interno.',
      },
      {
        name: 'Stock Throughput',
        description: 'Cobertura combinada de mercadoria em trânsito e em armazenamento.',
      },
      {
        name: 'Marine Liability',
        description: 'Responsabilidade civil vinculada a operações marítimas e portuárias.',
      },
    ],
  },
  {
    slug: 'aviation',
    title: 'Aviation',
    icon: 'plane',
    shortDescription: 'Coberturas para aeronaves e operadores.',
    intro: 'Soluções para aeronaves, operadores e riscos próprios da atividade aeronáutica.',
    items: [
      {
        name: 'Aviation Hull',
        description: 'Cobertura de danos físicos à aeronave.',
      },
      {
        name: 'Liability',
        description: 'Responsabilidade civil perante terceiros e passageiros.',
      },
      {
        name: 'War',
        description: 'Proteção contra danos por atos de guerra ou terrorismo na aviação.',
      },
    ],
  },
  {
    slug: 'casualty-professional-lines',
    title: 'Casualty & Professional Lines',
    icon: 'contract',
    shortDescription: 'Responsabilidade civil e coberturas profissionais.',
    intro: 'Proteção contra reclamações de responsabilidade civil e profissional decorrentes da sua atividade.',
    items: [
      {
        name: 'Responsabilidade Civil',
        description: 'Cobertura contra reclamações de terceiros por danos causados pela atividade da empresa.',
      },
      {
        name: 'Employers Liability',
        description: 'Proteção contra reclamações de funcionários por acidentes de trabalho.',
      },
      {
        name: 'Directors & Officers (D&O)',
        description: 'Cobertura para diretores e gestores contra reclamações por decisões de gestão.',
      },
      {
        name: 'Errors & Omissions (E&O)',
        description: 'Proteção contra reclamações por erros ou omissões profissionais.',
      },
    ],
  },
  {
    slug: 'agro',
    title: 'Agro',
    icon: 'leaf',
    shortDescription: 'Coberturas para o setor agropecuário.',
    intro: 'Seguros pensados para o setor agropecuário e o agronegócio.',
    items: [
      {
        name: 'Multirrisco',
        description: 'Cobertura integral contra múltiplos riscos agrícolas.',
      },
      {
        name: 'Granizo e Incêndio',
        description: 'Proteção de plantações contra granizo e incêndio.',
      },
      {
        name: 'Florestal',
        description: 'Cobertura para plantações e explorações florestais.',
      },
      {
        name: 'Pecuária',
        description: 'Proteção do rebanho contra doença, acidente ou morte.',
      },
    ],
  },
  {
    slug: 'surety',
    title: 'Surety',
    icon: 'infinity',
    shortDescription: 'Garantias e licitações.',
    intro: 'Garantias de cumprimento, licitação e aduaneiras para respaldar seus contratos e operações.',
    items: [
      {
        name: 'Garantia de Proposta',
        description: 'Garante o cumprimento das condições de uma proposta em licitação.',
      },
      {
        name: 'Garantia de Cumprimento de Contrato',
        description: 'Garante a correta execução de um contrato.',
      },
      {
        name: 'Garantia de Adiantamento',
        description: 'Garante a devolução de adiantamentos recebidos em caso de descumprimento.',
      },
    ],
  },
  {
    slug: 'employee-benefits',
    title: 'Employee Benefits',
    icon: 'heart',
    shortDescription: 'Saúde, vida e medicina privada internacional.',
    intro:
      'Benefícios de saúde e previdência para seus colaboradores, incluindo acesso a medicina privada internacional.',
    featured: true,
    items: [
      {
        name: 'Vida em Grupo e Individual',
        description: 'Cobertura em caso de falecimento ou invalidez do segurado.',
      },
      {
        name: 'Acidentes Pessoais',
        description: 'Proteção contra acidentes com cobertura de despesas médicas.',
      },
      {
        name: 'Despesas Médicas',
        description: 'Cobertura de despesas médicas por doença ou acidente.',
      },
      {
        name: 'Saúde',
        description: 'Planos de cobertura médica integral.',
      },
      {
        name: 'Consultoria em Medicina Privada',
        description: 'Assessoria para escolher o plano de saúde mais conveniente, incluindo opções internacionais.',
      },
    ],
  },
]

export default coverages
