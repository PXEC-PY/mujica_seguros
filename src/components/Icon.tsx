type IconProps = { name: string; className?: string }

const paths: Record<string, string> = {
  shield: 'M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z',
  globe: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c2.5 2.7 4 6.2 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.2-4-10s1.5-7.3 4-10z',
  user: 'M12 12a5 5 0 100-10 5 5 0 000 10zM4 22c0-4.4 3.6-8 8-8s8 3.6 8 8',
  handshake: 'M8 12l3 3 5-5M3 10l4-4 4 3-3 4-5-3zM21 10l-4-4-4 3 3 4 5-3z',
  building: 'M4 21V5a1 1 0 011-1h6a1 1 0 011 1v16M12 21V9a1 1 0 011-1h6a1 1 0 011 1v12M4 21h16M8 8h.01M8 12h.01M8 16h.01',
  ship: 'M3 18l2-8h14l2 8M6 10V5h8l3 5M2 21c1.5 1 3.5 1 5 0s3.5-1 5 0 3.5 1 5 0 3.5-1 5 0',
  plane: 'M10 21l1-6-8-4 1-2 8 2 1-6a1.5 1.5 0 013 0l1 6 8-2 1 2-8 4 1 6-3-2-2 2-2-2-3 2z',
  contract: 'M6 2h9l5 5v15a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zM9 12h6M9 16h6M9 8h3',
  leaf: 'M5 21c9 0 14-5 14-14V5h-2C8 5 3 10 3 19v2h2z',
  check: 'M20 6L9 17l-5-5',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  chevronDown: 'M6 9l6 6 6-6',
  linkedin: 'M4.98 3.5a2 2 0 110 4 2 2 0 010-4zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.55 4.78 5.86V21H18v-5.5c0-1.3-.02-3-1.85-3-1.85 0-2.13 1.4-2.13 2.9V21H10z',
  badge: 'M12 2l2.4 2.1 3.1-.5.9 3 2.6 1.7-1 3 1 3-2.6 1.7-.9 3-3.1-.5L12 22l-2.4-2.1-3.1.5-.9-3-2.6-1.7 1-3-1-3 2.6-1.7.9-3 3.1.5L12 2z M9.5 12l1.8 1.8 3.2-3.6',
  infinity: 'M6.5 9a3 3 0 100 6 3 3 0 002.4-1.2L12 12l3.1 1.8A3 3 0 1017.5 9a3 3 0 00-2.4 1.2L12 12 8.9 10.2A3 3 0 006.5 9z',
  heart: 'M12 21s-7.5-4.6-10-9.2C.4 8.4 2 5 5.4 5 7.6 5 9.4 6.2 12 9c2.6-2.8 4.4-4 6.6-4 3.4 0 5 3.4 3.4 6.8C19.5 16.4 12 21 12 21z',
  car: 'M3 13l1.6-4.8A2 2 0 016.5 7h11a2 2 0 011.9 1.2L21 13M4 13h16v4.5a1 1 0 01-1 1h-1.2a1 1 0 01-1-1V16H7.2v1.5a1 1 0 01-1 1H5a1 1 0 01-1-1V13zM7 16h.01M17 16h.01',
}

export default function Icon({ name, className = 'h-8 w-8' }: IconProps) {
  const d = paths[name] ?? paths.shield
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={d} />
    </svg>
  )
}
