function Card({ children, className = '', as: Component = 'div' }) {
  return (
    <Component
      className={`rounded-xl border border-gray-300 bg-white/50 ${className}`}
    >
      {children}
    </Component>
  )
}

export default Card
