import React, { useState } from "react"

interface InputProps {
  value?: string
  label?: string // Optional label text
  icon?: string // Optional icon name from an icon library
  placeholder?: string // Optional placeholder text
  error?: string // Optional error message to display
  type?: string // Input type (e.g., 'text', 'email', 'password')
  disabled?: boolean // Whether the input is disabled
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void // onChange callback
}

export const Input = ({
  label,
  icon,
  placeholder,
  error,
  value,
  type = "text",
  disabled = false,
  onChange,
  ...rest
}: InputProps) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)

  return (
    <div className='w-full flex flex-col sm:flex-row'>
      {label && (
        <label
          htmlFor='input'
          className='pr-2 text-sm font-medium text-gray-700'
        >
          {label}
        </label>
      )}
      <div className='relative w-full'>
        {icon && (
          <div
            className={`absolute top-[60%] left-2 mt-[-5px] transform -translate-y-1/2 z-10 ${
              focused ? "text-primary" : "text-gray-400"
            }`}
          >
            <i className={icon}></i>
          </div>
        )}
        <input
          id='input'
          type={type}
          placeholder={placeholder}
          // className={`focus:ring focus:ring-primary focus:ring-opacity-50 rounded-md px-3 py-2 border border-gray-300 text-gray-700 sm:rounded-l${
          //   disabled ? " opacity-50 cursor-not-allowed" : ""
          // }`}
          className='w-full self-stretch px-8 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex'
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          disabled={disabled}
        />
        {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
      </div>
    </div>
  )
}
