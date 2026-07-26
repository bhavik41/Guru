export default function Logo({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M74 16C86.5 26 92 40 92 52c0 22.6-18.4 41-41 41S10 74.6 10 52c0-3.6.5-7.1 1.3-10.4"
        stroke="var(--teal, #42a49d)"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 12 88 20 74 30Z"
        fill="var(--teal, #42a49d)"
      />
    </svg>
  )
}
