import { useState, type ReactNode } from 'react'
import Icon from './Icon'

export type AccordionItemData = {
  id: string
  icon?: string
  title: string
  subtitle?: string
  content: ReactNode
}

export default function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="flex items-center gap-4">
                {item.icon && (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                )}
                <span>
                  <span className="block text-base font-bold uppercase text-navy">{item.title}</span>
                  {item.subtitle && (
                    <span className="mt-0.5 block text-sm font-normal normal-case text-navy/60">
                      {item.subtitle}
                    </span>
                  )}
                </span>
              </span>
              <Icon
                name="chevronDown"
                className={`h-5 w-5 shrink-0 text-brandred transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && <div className="pb-6 pl-0 sm:pl-16">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
