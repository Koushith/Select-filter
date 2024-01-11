// components/CustomSelect.tsx
import React, { SelectHTMLAttributes } from "react"

interface Option {
  label: string
  value: string
}

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[]
}

const Select: React.FC<CustomSelectProps> = ({ options, ...props }) => {
  return (
    <select
      className='border rounded-md p-2 focus:border-teal-500 outline-none'
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export { Select }
