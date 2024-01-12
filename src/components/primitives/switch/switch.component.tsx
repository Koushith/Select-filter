import React, { ChangeEvent } from "react"

interface ToggleSwitchProps {
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
}) => {
  return (
    <label className='relative inline-block cursor-pointer'>
      <input
        type='checkbox'
        className='hidden'
        checked={checked}
        onChange={onChange}
      />
      <div className='w-11 h-6 bg-gray-200 rounded-3xl relative'>
        <div
          className={`w-5 h-5 absolute left-[${
            checked ? "0" : "0"
          }] top-[2.8px] bg-white rounded-3xl transition-transform duration-300 transform ${
            checked ? "translate-x-full" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  )
}
