import React, { useState, useEffect } from "react"
import { Input } from "../primitives/input/input.component"
import { getSelectedDocuments } from "../../redux/document-selector/selectors"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { setSelectedDocuments } from "../../redux/document-selector/document-selector.slice"
import LeftArrow from "../../assets/left-arrow.svg"

export const SelectedDocument = () => {
  const selectedDocuments = useAppSelector(getSelectedDocuments)
  const dispatch = useAppDispatch()

  const [searchQuery, setSearchQuery] = useState("")
  const [filteredDocuments, setFilteredDocuments] =
    useState<string[]>(selectedDocuments)

  useEffect(() => {
    // Update filtered documents when searchQuery or selectedDocuments change
    const filtered = selectedDocuments.filter((document) =>
      //@ts-ignore
      document?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredDocuments(filtered)
  }, [searchQuery, selectedDocuments])

  const removeSelectedDocumentHandler = (documentToRemove: string) => {
    // Filter out the document to be removed
    const updatedSelectedDocuments = selectedDocuments.filter(
      (selectedDocument) => selectedDocument !== documentToRemove
    )

    // Dispatch the updated selected documents
    dispatch(setSelectedDocuments(updatedSelectedDocuments))
  }

  return (
    <>
      <div className="w-[500px] self-stretch text-gray-900 text-base font-medium font-['Inter'] leading-normal">
        Selected Documents
      </div>
      <div className='self-stretch h-9 flex-col justify-start items-start gap-2 flex'>
        <Input
          type='search'
          icon='fa-solid fa-magnifying-glass'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Display filtered documents */}
      {filteredDocuments.length <= 0 ? (
        <EmptyState />
      ) : (
        <div className='mt-3 w-[100%] p-2 rounded-lg border border-emerald-600 flex-col justify-start items-start gap-3 inline-flex'>
          {filteredDocuments.map((document, i) => (
            <div
              key={i}
              className='w-[100%] h-10 px-1.5 py-2 bg-white rounded justify-between items-center gap-2 inline-flex'
            >
              <div className='flex items-center'>
                <div className='w-4 h-4 justify-center items-center flex'>
                  <i className='fa-solid w-3 h-3 text-emerald-600 fa-check'></i>
                </div>
                <div className='grow ml-4 flex-col justify-center items-start gap-0.5 inline-flex'>
                  <div className="self-stretch text-gray-900 text-sm font-medium font-['Inter'] leading-none">
                    {document}
                  </div>
                </div>
              </div>
              <div className='p-1 cursor-pointer bg-white rounded border border-gray-200 justify-center items-center flex'>
                <div
                  onClick={() => removeSelectedDocumentHandler(document)}
                  className='w-4 h-4 justify-center items-center flex'
                >
                  <i className='fa-solid text-gray-800 text-xs font-black fa-xmark'></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export const EmptyState = () => {
  return (
    <div className='w-full h-full   p-10 bg-gray-100 rounded-lg border border-gray-200 flex-col justify-start items-center gap-6 inline-flex'>
      <div className=' justify-center items-center inline-flex'>
        <img src={LeftArrow} />
      </div>
      <p className="self-stretch text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-[1.5]">
        Select documents from the left panel to have employees review them and
        provide a signature acknowledging review
      </p>
    </div>
  )
}
