'use client'

interface SimpleDropdownProps {
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string }>
}

export default function SimpleDropdown({ value, onChange, options }: SimpleDropdownProps) {
  return (
    <div className="fixed top-4 left-4 z-50">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm text-sm text-gray-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}