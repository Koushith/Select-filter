import React, { useEffect, useState } from "react"
import { Input } from "../primitives/input/input.component"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { setSelectedDocuments } from "../../redux/document-selector/document-selector.slice"
import { AVALIABLE_DOCS } from "../../utils/constants"
import { getSearchResults } from "../../redux/document-selector/selectors"
import { Accordion } from "../primitives/accordion/accordian.component"
import { SelectedDocument } from "../seletced-documents/selected-documents.component"
import { ToggleSwitch } from "../primitives/switch/switch.component"
import { DocumentFilter } from "../document-filter/document-filter.component"

export const DocumentSelect = () => {
  const [searchQuery, setSearchQuey] = useState("")
  const [isChecked, setChecked] = useState(false)

  const allDocuments = useAppSelector(getSearchResults)
  const [filteredDocuments, setFilterdDocument] = useState(allDocuments)

  const dispatch = useAppDispatch()

  const handleItemSelect = (item: string) => {
    dispatch((dispatch, getState) => {
      const state = getState()
      const selectedDocuments = state.documentSelector.selectedDocuments
      //@ts-ignore
      if (selectedDocuments.includes(item)) {
        // If already selected, remove it
        const updatedSelectedItems = selectedDocuments.filter(
          (selectedItem) => selectedItem !== item
        )
        dispatch(setSelectedDocuments(updatedSelectedItems))
      } else {
        // If not selected, add it
        const updatedSelectedItems = [...selectedDocuments, item]
        dispatch(setSelectedDocuments(updatedSelectedItems))
      }
    })
  }

  const searchFilter = () => {
    const response = allDocuments.filter((res) =>
      res.heading.toLowerCase().includes(searchQuery)
    )
    // dispatch(setSearchResults(response))
    setFilterdDocument(response)
  }

  useEffect(() => {
    searchFilter()
  }, [searchQuery])

  return (
    <>
      <div className='max-w-md mx-auto px-4 py-4 flex flex-col items-center justify-center sm:flex-row md:flex md:items-center md:justify-center md:gap-4'>
        <div className='w-full md:w-[500px] self-stretch p-4 bg-white rounded-lg border border-gray-300 flex-col justify-start items-start gap-3 inline-flex'>
          <div className="self-stretch text-gray-900 text-base font-medium font-['Inter'] leading-normal">
            Available Documents
          </div>
          <div className='self-stretch  flex-col justify-start items-start gap-3 flex'>
            <div className='self-stretch h-9 flex-col justify-start items-start gap-2 flex'>
              <Input
                type='search'
                placeholder='search'
                icon='fa-solid fa-magnifying-glass'
                value={searchQuery}
                onChange={(e) => setSearchQuey(e.target.value)}
              />
            </div>

            <div className='z-50 w-full'>
              <DocumentFilter />
            </div>
          </div>

          <div className='self-stretch  mt-4 px-1.5 py-2 bg-white rounded justify-start items-center gap-2 inline-flex '>
            <div className='grow shrink basis-0 h-3.5 justify-start items-center gap-0.5 flex'>
              <div className="text-gray-900 text-sm font-medium font-['Inter'] leading-none">
                {filteredDocuments?.length
                  ? filteredDocuments?.length
                  : AVALIABLE_DOCS?.length}
              </div>
              <div className="grow shrink basis-0 text-gray-900 text-sm font-medium font-['Inter'] leading-none">
                Available Documents{" "}
              </div>
            </div>
            <div className='justify-start items-start flex'>
              <div className='justify-start items-center gap-2 flex'>
                <ToggleSwitch
                  checked={isChecked}
                  onChange={() => {
                    setChecked(!isChecked)

                    if (!isChecked) {
                      const allDocuments = filteredDocuments
                        .map((document) => document.content)
                        .flat()

                      dispatch(setSelectedDocuments(allDocuments))
                    } else {
                      // If the switch is turned off, you might want to handle this case as well
                      // For example, dispatch an action to clear selected documents
                      dispatch(setSelectedDocuments([]))
                    }
                  }}
                />
                <div className='flex-col justify-start items-start gap-1.5 inline-flex'>
                  <div className="text-gray-900 text-base font-normal font-['Inter'] leading-tight">
                    Select All
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* avaliable docs */}
          <div className='w-full border rounded'>
            {filteredDocuments.length > 0 && (
              <>
                {filteredDocuments.map((document) => (
                  <Accordion
                    key={document.heading}
                    heading={document.heading}
                    children={document.content}
                    selectedItem={handleItemSelect}
                  />
                ))}
              </>
            )}
          </div>
        </div>

        <div className='w-full md:w-[500px] self-stretch p-4 bg-white rounded-lg border border-gray-300 flex-col justify-start items-start gap-3 inline-flex'>
          <SelectedDocument />
        </div>
      </div>
    </>
  )
}
