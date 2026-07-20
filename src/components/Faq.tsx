import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FaqBlock } from '../data/coverages'

function FaqAnswer({ answer }: { answer: FaqBlock[] | string }) {
  const blocks = Array.isArray(answer) ? answer : [answer]
  return (
    <div className="space-y-3 px-5 py-5 text-sm text-navy/80">
      {blocks.map((block, i) =>
        typeof block === 'string' ? (
          <p key={i}>{block}</p>
        ) : (
          <ul key={i} className="list-disc space-y-1 pl-5">
            {block.list.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ),
      )}
    </div>
  )
}

export default function Faq({
  items,
}: {
  items: { question: string; answer: FaqBlock[] | string }[]
}) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-gray-200 border border-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors ${
                isOpen ? 'bg-brandred-dark text-white' : 'bg-white text-navy hover:bg-gray-50'
              }`}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && <FaqAnswer answer={item.answer} />}
          </div>
        )
      })}
    </div>
  )
}
