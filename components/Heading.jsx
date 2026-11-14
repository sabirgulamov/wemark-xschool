export default function Heading({ children, className = '' }) {
  return <h2 className={`font-display text-[32px] font-normal uppercase leading-none tracking-[-0.01em] lg:text-[56px] ${className}`}>{children}</h2>;
}
