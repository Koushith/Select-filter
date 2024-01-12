import React, { useEffect, useState } from "react"
import { Input } from "../primitives/input/input.component"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  setFilteredOptions,
  setSelectedDocuments,
} from "../../redux/document-selector/document-selector.slice"
import { AVALIABLE_DOCS } from "../../utils/constants"
import {
  getFilterForDropdown,
  getFilteredOptions,
  getJobTemplates,
  getLocations,
  getSearchResults,
  getSelectedDocuments,
  getSeniority,
} from "../../redux/document-selector/selectors"
import { Accordion } from "../primitives/accordion/accordian.component"
import { SelectedDocument } from "../seletced-documents/selected-documents.component"
import { Select } from "../primitives/select/select.component"

export const DocumentSelect = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [searchQuery, setSearchQuey] = useState("")

  const allDocuments = useAppSelector(getSearchResults)
  const jobTemplates = useAppSelector(getJobTemplates)

  const locations = useAppSelector(getLocations)
  const seniority = useAppSelector(getSeniority)

  const [filteredDocuments, setFilterdDocument] = useState(allDocuments)
  const dispatch = useAppDispatch()

  const filteredOptions = useAppSelector(getFilteredOptions)

  const selectHandler = (e) => {
    dispatch(setFilteredOptions([...filteredOptions, e.target.value]))
  }

  const filterOption = useAppSelector(getFilterForDropdown)

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

  const handleToggle = (value: boolean) => {
    setIsEnabled(value)
  }
  return (
    <div className='my-0 mx-auto  h-[auto] flex items-center justify-center mt-2'>
      <div className='w-[1024px] justify-start items-center gap-6 inline-flex'>
        <div className='w-[500px] self-stretch p-4 bg-white rounded-lg border border-gray-300 flex-col justify-start items-start gap-3 inline-flex'>
          <div className="self-stretch text-gray-900 text-base font-medium font-['Inter'] leading-normal">
            Available Documents
          </div>
          <div className='self-stretch h-56 flex-col justify-start items-start gap-3 flex'>
            <div className='self-stretch h-9 flex-col justify-start items-start gap-2 flex'>
              <>
                <>
                  <Input
                    type='search'
                    placeholder='search'
                    icon='fa-solid fa-magnifying-glass'
                    value={searchQuery}
                    onChange={(e) => setSearchQuey(e.target.value)}
                  />
                </>
              </>
            </div>
            <div className="w-96 text-gray-900 text-sm font-medium font-['Inter'] leading-none">
              Filter by:
            </div>
            <div className='self-stretch justify-start items-start gap-3 inline-flex'>
              <select
                className='w-[231px] flex-1 h-9 px-2.5 py-2 bg-white rounded-lg border border-gray-300 '
                name='jontemplates'
                id='senioruty'
                onChange={(e) => selectHandler(e)}
              >
                {jobTemplates.map((template) => (
                  <option value={template} key={template}>
                    {template}
                  </option>
                ))}
              </select>

              <select
                className=' w-[231px]  h-9 px-2.5 py-2 bg-white rounded-lg border border-gray-300 '
                name='jontemplates'
                id='senioruty'
                onChange={(e) => selectHandler(e)}
              >
                {locations.map((location) => (
                  <option value={location} key={location}>
                    {location}
                  </option>
                ))}
              </select>

              {/* <div className='grow shrink basis-0 h-9 px-2.5 py-2 bg-white rounded-lg border border-gray-300 flex-col justify-between items-start inline-flex'>
                <div className='self-stretch justify-start items-center gap-2.5 inline-flex'>
                  <div className="grow shrink basis-0 text-gray-900 text-sm font-normal font-['Inter'] leading-tight">
                    Locations
                  </div>
                  <div className='w-2.5 h-2.5 relative' />
                </div>
              </div> */}
            </div>
            <div className='self-stretch justify-start items-start gap-3 inline-flex'>
              <select
                className=' w-[231px]  h-9 px-2.5 py-2 bg-white rounded-lg border border-gray-300 '
                name='Subsidory'
                id='Subsidory'
              >
                <option value={"Subsidory"}>Subsidory</option>
              </select>

              <select
                name='seniority'
                className=' w-[231px]  h-9 px-2.5 py-2 bg-white rounded-lg border border-gray-300 '
                id='senioruty'
                onChange={(e) => selectHandler(e)}
              >
                {seniority.map((seniority) => (
                  <option value={seniority} key={seniority}>
                    {seniority}
                  </option>
                ))}
              </select>
            </div>

            {/* <div className=' h-20 p-2 bg-white rounded-lg border border-gray-200 justify-start items-center gap-2 inline-flex'>
              <div className='px-3 py-0.5 bg-sky-100 rounded-md justify-start items-center gap-1 flex'>
                <div className="text-center text-blue-500 text-sm font-medium font-['Inter'] leading-tight">
                  New York, NY
                </div>
                <div className='w-2.5 justify-center items-center flex'>
                  <div className="w-2.5 h-2.5 text-center text-blue-500 text-xs font-black font-['Font Awesome 6 Pro']">
                    xmark
                  </div>
                </div>
              </div>
              <div className='px-3 py-0.5 bg-green-100 rounded-md justify-start items-center gap-1 flex'>
                <div className="text-center text-emerald-600 text-sm font-medium font-['Inter'] leading-tight">
                  Manager
                </div>
                <div className='w-2.5 justify-center items-center flex'>
                  <div className="w-2.5 h-2.5 text-center text-emerald-600 text-xs font-black font-['Font Awesome 6 Pro']">
                    xmark
                  </div>
                </div>
              </div>
              <div className='px-3 py-0.5 bg-sky-100 rounded-md justify-start items-center gap-1 flex'>
                <div className="text-center text-blue-500 text-sm font-medium font-['Inter'] leading-tight">
                  Cobb, CA
                </div>
                <div className='w-2.5 justify-center items-center flex'>
                  <div className="w-2.5 h-2.5 text-center text-blue-500 text-xs font-black font-['Font Awesome 6 Pro']">
                    xmark
                  </div>
                </div>
              </div>
              <div className='px-3 py-0.5 bg-violet-100 rounded-md justify-start items-center gap-1 flex'>
                <div className="text-center text-violet-500 text-sm font-medium font-['Inter'] leading-tight">
                  Electricians
                </div>
                <div className='w-2.5 justify-center items-center flex'>
                  <div className="w-2.5 h-2.5 text-center text-violet-500 text-xs font-black font-['Font Awesome 6 Pro']">
                    xmark
                  </div>
                </div>
              </div>
            </div> */}

            <div className='self-stretch px-1.5 py-2 bg-white rounded justify-start items-center gap-2 inline-flex'>
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
                  <div className='w-14 h-7 relative'>
                    <div className='w-14 h-7 left-0 top-0 absolute bg-gray-200 rounded-3xl' />
                    <div className='w-5 h-5 left-[3.50px] top-[2.80px] absolute bg-white rounded-3xl' />
                  </div>
                  <div className='flex-col justify-start items-start gap-1.5 inline-flex'>
                    <div className="text-gray-900 text-base font-normal font-['Inter'] leading-tight">
                      Select All
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* avaliable docs */}
          <div className='w-full border rounded'>
            {filteredDocuments.length > 0 && (
              <>
                {filteredDocuments.map((document, i) => (
                  <Accordion
                    heading={document.heading}
                    children={document.content}
                    selectedItem={handleItemSelect}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <div className='w-[500px] self-stretch p-4 bg-white rounded-lg border border-gray-300 flex-col justify-start items-start gap-3 inline-flex'>
          <SelectedDocument />
        </div>
      </div>
    </div>
  )
}
