import React from "react"
import { Badge } from "../primitives/badge/badge.component"
import { SearchDropdown } from "../primitives/searchable-dropdown/searchable-dropdown.component"
import { setFilteredOptions } from "../../redux/document-selector/document-selector.slice"
import {
  getFilteredOptions,
  getJobTemplates,
  getLocations,
  getSeniority,
} from "../../redux/document-selector/selectors"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"

export const DocumentFilter = () => {
  const jobTemplates = useAppSelector(getJobTemplates)

  const locations = useAppSelector(getLocations)
  const seniority = useAppSelector(getSeniority)

  const filteredOptions = useAppSelector(getFilteredOptions)
  const dispatch = useAppDispatch()

  const removeFromFilterHandler = (option) => {
    const updatedSelectedItems = filteredOptions.filter(
      (selectedItem) => selectedItem !== option
    )
    dispatch(setFilteredOptions(updatedSelectedItems))
  }

  const selectHandler = (option) => {
    // Check if the option is already in filteredOptions
    //@ts-ignore
    const existingFilter = filteredOptions.includes(option)

    if (!existingFilter) {
      // If the filter does not exist, add it
      dispatch(setFilteredOptions([...filteredOptions, option]))
    }
  }
  return (
    <>
      <div className="mt-2 text-gray-900 text-sm font-medium font-['Inter'] leading-none">
        Filter by:
      </div>
      <div className='self-stretch mt-2 flex flex-col md:flex-row justify-start gap-1'>
        <SearchDropdown
          items={jobTemplates}
          label='Job Templates'
          onSelect={selectHandler}
        />
        <SearchDropdown
          items={locations}
          label='Locations'
          onSelect={selectHandler}
        />
      </div>

      <div className='self-stretch mt-2 flex flex-col md:flex-row justify-start gap-1'>
        <SearchDropdown
          items={seniority}
          label='Subsidiary'
          onSelect={selectHandler}
        />
        <SearchDropdown
          items={seniority}
          label='Seniority'
          onSelect={selectHandler}
        />
      </div>

      {filteredOptions.length > 0 && (
        <>
          <div className='mt-2 w-full p-2 bg-white  rounded-lg border border-gray-200'>
            {filteredOptions.map((option) => (
              <Badge
                key={option}
                text={option}
                onClickHandler={() => removeFromFilterHandler(option)}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}
