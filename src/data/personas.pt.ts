import type { Coverage } from './coverages'

const personas: Coverage[] = [
  {
    id: 'vida-individual',
    slug: 'vida-individual',
    title: 'Vida Individual',
    icon: 'shield',
    shortDescription: 'Proteção financeira para sua família.',
    intro:
      'Protege financeiramente sua família em caso de falecimento ou invalidez, com um capital segurado à sua escolha.',
    items: [],
  },
  {
    id: 'accidentes-personales',
    slug: 'acidentes-pessoais',
    title: 'Acidentes Pessoais',
    icon: 'user',
    shortDescription: 'Cobertura para acidentes do dia a dia.',
    intro:
      'Cobertura para acidentes que causem invalidez, falecimento ou despesas médicas, dentro e fora do horário de trabalho.',
    items: [],
  },
  {
    id: 'salud',
    slug: 'saude',
    title: 'Saúde',
    icon: 'heart',
    shortDescription: 'Cobertura médica integral.',
    intro:
      'Cobertura de despesas médicas, internação e exames em caso de doença ou acidente, com planos no Paraguai e no exterior.',
    items: [],
  },
  {
    id: 'hogar',
    slug: 'residencial',
    title: 'Residencial',
    icon: 'building',
    shortDescription: 'Proteção para sua casa e seus bens.',
    intro:
      'Proteção para sua residência e seus bens contra incêndio, roubo, danos elétricos e responsabilidade civil perante terceiros.',
    items: [],
  },
  {
    id: 'automoviles',
    slug: 'automoveis',
    title: 'Automóveis',
    icon: 'car',
    shortDescription: 'Cobertura para o seu veículo particular.',
    intro:
      'Cobertura de responsabilidade civil e danos para o seu veículo particular, com assistência em caso de sinistro.',
    image: '/images/automoviles.png',
    secondaryImage: '/images/choque-automovil.png',
    items: [],
  },
]

export default personas
