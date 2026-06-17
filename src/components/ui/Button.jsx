function Button({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}) {
  const variants = {
    primary:
      'bg-btn text-forest hover:bg-btn-hover disabled:opacity-60 disabled:cursor-not-allowed',
    ghost:
      'bg-transparent text-muted hover:text-forest border border-gray-300',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full rounded-2xl border-none px-4 py-3.5 text-base font-medium transition-colors duration-200 sm:text-lg ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
