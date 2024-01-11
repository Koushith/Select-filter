// Accordion.tsx
import React, { useState } from "react"
import { useAppSelector } from "../../../redux/hooks"
import { getSelectedDocuments } from "../../../redux/document-selector/selectors"

interface AccordionProps {
  heading: string
  children: string[]
  selectedItem?: (item: string) => void
}

const Accordion: React.FC<AccordionProps> = ({
  heading,
  children,
  selectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  const selectedDocuments = useAppSelector(getSelectedDocuments)

  const handleItemClick = (item: string) => {
    if (selectedItem) {
      selectedItem(item)
    }
  }

  return (
    <div className='border w-[100%] '>
      <div
        className='flex w-full justify-between items-center p-4 cursor-pointer'
        onClick={toggleAccordion}
      >
        <h2 className='text-lg font-semibold'>{heading}</h2>
        <span className='text-gray-600'>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className='p-4'>
          <ul>
            {children.map((item, index) => (
              <li
                key={index}
                className={`mb-2 cursor-pointer ${
                  //@ts-ignore
                  selectedDocuments.includes(item) ? "text-orange-500" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export { Accordion }
