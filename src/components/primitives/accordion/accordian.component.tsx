// Accordion.tsx
import React, { useState } from "react"
import { useAppSelector } from "../../../hooks/hooks"
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
    <div className='border-b  rounded w-[100%] bg-gray-50 '>
      <div
        className='flex w-full justify-between items-center p-4 cursor-pointer'
        onClick={toggleAccordion}
      >
        <h2 className='text-gray-600 text-base font-medium '>{heading}</h2>

        <i
          className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>
      </div>
      {isOpen && (
        <div className=''>
          <>
            {children.map((item, index) => (
              <div className='p-4 h-10 w-full hover:bg-orange-50 bg-white bg-white  py-2 rounded  items-center  inline-flex justify-between'>
                <div
                  className='grow shrink basis-0 flex-col justify-end items-start gap-0.5 inline-flex '
                  onClick={() => handleItemClick(item)}
                >
                  <p
                    className={`self-stretch ${
                      //@ts-ignore
                      selectedDocuments.includes(item)
                        ? "text-orange-600"
                        : "text-gray-900"
                    } text-sm font-medium font-['Inter'] leading-none cursor-pointer`}
                  >
                    {item}
                  </p>
                </div>
                <div className='p-1 bg-white rounded border border-gray-200 justify-center items-center flex'>
                  <div
                    className='w-4 h-4 justify-center items-center flex'
                    onClick={() => handleItemClick(item)}
                  >
                    <i
                      className={`w-3 h-3 text-center ${
                        //@ts-ignore
                        selectedDocuments.includes(item)
                          ? "text-orange-600"
                          : "text-gray-900"
                      }  text-xs font-black fa-solid fa-right-long cursor-pointer`}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </>
        </div>
      )}
    </div>
  )
}

export { Accordion }
