import React, { useState, ChangeEvent } from "react"

interface SearchDropdownProps {
  items: string[]
  onSelect: (selectedValue: string) => void
  label?: string
}

const SearchDropdownItem: React.FC<{
  label: string
  onSelect: () => void
}> = ({ label, onSelect }) => {
  return (
    <div
      className='py-2.5 hover:bg-orange-50 bg-white z-40 p-2.5 border-b rounded border-gray-200'
      onClick={onSelect}
    >
      <div className='text-gray-900 cursor-pointer hover:text-orange-500 text-sm font-medium font-inter leading-none'>
        {label}
      </div>
    </div>
  )
}

const SearchInput: React.FC<{
  value: string
  label?: string
  onChange: (value: string) => void
}> = ({ value, onChange, label = "Search" }) => {
  return (
    <input
      type='text'
      className='text-gray-400 text-sm font-normal font-inter leading-tight pl-2 flex-grow focus:outline-none'
      placeholder={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  items,
  onSelect,
  label = "Select",
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleInputChange = (value: string) => {
    setSearchTerm(value)
  }

  const handleItemSelect = (item: string) => {
    setSelectedValue(item)
    onSelect(item)
    setIsDropdownVisible(false) // Hide dropdown after selecting an item
  }

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  return (
    <div className='w-full relative'>
      <div
        className='w-full h-9 bg-white rounded-lg border border-gray-300 flex items-center gap-2.5 cursor-pointer relative'
        onClick={toggleDropdown}
      >
        <SearchInput
          label={label}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className='w-8 h-8 flex items-center justify-center'>
          <i className='fas fa-chevron-down text-gray-400'></i>
        </div>
      </div>

      {isDropdownVisible && (
        <div className='absolute w-full overflow-y-auto mt-2.5 z-40 max-h-72'>
          {filteredItems.map((item, index) => (
            <SearchDropdownItem
              key={index}
              label={item}
              onSelect={() => handleItemSelect(item)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export { SearchDropdown }
