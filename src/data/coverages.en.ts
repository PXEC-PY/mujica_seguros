import type { Coverage } from './coverages'

const coverages: Coverage[] = [
  {
    slug: 'property',
    title: 'Property',
    icon: 'building',
    shortDescription: 'Comprehensive protection for assets and facilities.',
    intro:
      'We protect your assets, facilities and operations against physical risks that could affect the continuity of your business.',
    items: [
      {
        name: 'All Operating Risks',
        description: 'Broad cover against unforeseen physical damage in your company’s operations.',
      },
      {
        name: 'Fire',
        description: 'Protection against losses caused by fire, lightning and explosion.',
      },
      {
        name: 'Business Interruption',
        description: 'Compensates for lost income when a claim disrupts your activity.',
      },
      {
        name: 'Machinery Breakdown',
        description: 'Covers sudden and unforeseen damage to productive equipment and machinery.',
      },
      {
        name: 'Terrorism',
        description: 'Cover for physical damage resulting from acts of terrorism.',
      },
      {
        name: 'Construction & Erection All Risks',
        description: 'Comprehensive protection during civil works and equipment installation.',
      },
      {
        name: 'Electronic Equipment',
        description: 'Covers damage to sensitive computer and electronic equipment.',
      },
      {
        name: 'Theft',
        description: 'Cover against theft of contents, valuables or employee dishonesty.',
      },
      {
        name: 'Motor Fleet',
        description: 'Protection for the company’s vehicle fleet.',
      },
    ],
  },
  {
    slug: 'marine-cargo',
    title: 'Marine & Cargo',
    icon: 'ship',
    shortDescription: 'Marine and international transport insurance.',
    intro:
      'Coverage for vessels, cargo and logistics operations in maritime, inland and international transit.',
    items: [
      {
        name: 'Hull & Machinery',
        description: 'Cover for the hull and machinery of vessels against physical damage.',
      },
      {
        name: 'War',
        description: 'Protection against damage arising from war, strikes or civil unrest.',
      },
      {
        name: 'Loss of Hire',
        description: 'Compensates for lost income due to vessel downtime.',
      },
      {
        name: 'Increased Value',
        description: 'Additional cover on the increased value of the insured vessel.',
      },
      {
        name: 'Liability',
        description: 'Third-party liability arising from vessel operation.',
      },
      {
        name: 'P&I',
        description: 'Protection & Indemnity cover for third parties, crew and cargo.',
      },
      {
        name: 'Marine Cargo',
        description: 'Protection of goods during international maritime transport.',
      },
      {
        name: 'Inland Transit',
        description: 'Cover for goods during domestic land transport.',
      },
      {
        name: 'Stock Throughput',
        description: 'Combined cover for goods in transit and in storage.',
      },
      {
        name: 'Marine Liability',
        description: 'Third-party liability related to maritime and port operations.',
      },
    ],
  },
  {
    slug: 'aviation',
    title: 'Aviation',
    icon: 'plane',
    shortDescription: 'Coverage for aircraft and operators.',
    intro: 'Solutions for aircraft, operators and risks specific to aviation activity.',
    items: [
      {
        name: 'Aviation Hull',
        description: 'Cover for physical damage to the aircraft.',
      },
      {
        name: 'Liability',
        description: 'Third-party and passenger liability.',
      },
      {
        name: 'War',
        description: 'Protection against damage from acts of war or terrorism in aviation.',
      },
    ],
  },
  {
    slug: 'casualty-professional-lines',
    title: 'Casualty & Professional Lines',
    icon: 'contract',
    shortDescription: 'Liability and professional coverage.',
    intro: 'Protection against liability and professional claims arising from your business activity.',
    items: [
      {
        name: 'General Liability',
        description: 'Cover against third-party claims for damage caused by the company’s activity.',
      },
      {
        name: 'Employers Liability',
        description: 'Protection against employee claims for workplace accidents.',
      },
      {
        name: 'Directors & Officers (D&O)',
        description: 'Cover for directors and officers against claims arising from management decisions.',
      },
      {
        name: 'Errors & Omissions (E&O)',
        description: 'Protection against claims for professional errors or omissions.',
      },
    ],
  },
  {
    slug: 'agro',
    title: 'Agro',
    icon: 'leaf',
    shortDescription: 'Coverage for the agribusiness sector.',
    intro: 'Insurance designed for the agricultural sector and agribusiness.',
    items: [
      {
        name: 'Multi-Peril',
        description: 'Comprehensive cover against multiple agricultural risks.',
      },
      {
        name: 'Hail & Fire',
        description: 'Protection of crops against hail and fire.',
      },
      {
        name: 'Forestry',
        description: 'Cover for forestry plantations and operations.',
      },
      {
        name: 'Livestock',
        description: 'Protection for livestock against disease, accident or death.',
      },
    ],
  },
  {
    slug: 'surety',
    title: 'Surety',
    icon: 'infinity',
    shortDescription: 'Bonds and bid guarantees.',
    intro: 'Bid, performance and customs bonds to back up your contracts and operations.',
    items: [
      {
        name: 'Bid Bond',
        description: 'Guarantees compliance with the terms of a bid in a tender process.',
      },
      {
        name: 'Performance Bond',
        description: 'Guarantees the correct execution of a contract.',
      },
      {
        name: 'Advance Payment Bond',
        description: 'Guarantees the return of advance payments received in case of default.',
      },
    ],
  },
  {
    slug: 'employee-benefits',
    title: 'Employee Benefits',
    icon: 'heart',
    shortDescription: 'Health, life and international private medical coverage.',
    intro:
      'Health and welfare benefits for your employees, including access to international private medical insurance.',
    featured: true,
    items: [
      {
        name: 'Group & Individual Life',
        description: 'Cover in the event of death or disability of the insured.',
      },
      {
        name: 'Personal Accidents',
        description: 'Protection against accidents with medical expense coverage.',
      },
      {
        name: 'Medical Expenses',
        description: 'Cover for medical expenses due to illness or accident.',
      },
      {
        name: 'Health',
        description: 'Comprehensive medical coverage plans.',
      },
      {
        name: 'Private Medical Plan Consulting',
        description: 'Advice on choosing the most suitable health plan, including international options.',
      },
    ],
  },
]

export default coverages
