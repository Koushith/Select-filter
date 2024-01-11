
import React, { useState } from "react"

interface ToggleSwitchProps {
  onToggle: (isChecked: boolean) => void
  initialChecked: boolean
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  onToggle,
  initialChecked,
}) => {
  const [checked, setChecked] = useState(initialChecked)

  const handleToggle = () => {
    setChecked(!checked)
    onToggle(!checked)
  }

  return (
    <label className='flex items-center cursor-pointer'>
      <div className='relative'>
        <input
          type='checkbox'
          className='hidden'
          checked={checked}
          onChange={handleToggle}
        />
        <div className='toggle-switch__slider h-4 w-8 bg-gray-200 rounded-full shadow-inner transition-transform duration-300 ease-in-out transform'>
          <div
            className={`toggle-switch__knob h-4 w-4 bg-white rounded-full shadow-md border-2 border-gray-300 transform ${
              checked ? "translate-x-4" : "translate-x-0"
            } transition-transform duration-300 ease-in-out`}
          />
        </div>

        
      </div>
    </label>
  )
}
