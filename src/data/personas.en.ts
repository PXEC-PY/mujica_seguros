import type { Coverage } from './coverages'

const personas: Coverage[] = [
  {
    id: 'vida-individual',
    slug: 'individual-life',
    title: 'Individual Life',
    icon: 'shield',
    shortDescription: 'Financial protection for your family.',
    intro:
      'Financially protects your family in the event of death or disability, with a sum insured of your choice.',
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
    secondaryImage: '/images/choque-automovil.png',
    items: [],
  },
]

export default personas
