function Input({ label, id, required, className = '', ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={id} className="mt-5 text-lg text-forest sm:text-xl">
          {label}
          {required && ' *'}
        </label>
      )}
      <input
        id={id}
        required={required}
        className="mt-2.5 rounded-xl border-none bg-cream px-4 py-3.5 text-base text-gray-800 outline-none ring-forest/30 transition focus:ring-2"
        {...props}
      />
    </div>
  )
}

export default Input
