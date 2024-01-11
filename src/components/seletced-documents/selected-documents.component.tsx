import React, { useState, useEffect } from "react"
import { Input } from "../primitives/input/input.component"
import { getSelectedDocuments } from "../../redux/document-selector/selectors"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setSelectedDocuments } from "../../redux/document-selector/document-selector.slice"

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
      <div className="self-stretch text-gray-900 text-base font-medium font-['Inter'] leading-normal">
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
      <div>
        {filteredDocuments.length <= 0 && <EmptyState />}

        {filteredDocuments.map((document, i) => (
          <div className='flex justify-between' key={i}>
            <h1>{document}</h1>
            <div
              className='cursor-pointer'
              onClick={() => removeSelectedDocumentHandler(document)}
            >
              x
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export const EmptyState = () => {
  return (
    <div className='w-96 h-96 p-10 bg-gray-100 rounded-lg border border-gray-200 flex-col justify-start items-center gap-6 inline-flex'>
      <div className='h-16 justify-center items-center inline-flex'>
        <i className='fa-solid fa-left-long'></i>
      </div>
      <p className="self-stretch text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
        Select documents from the left panel to have employees review them and
        provide a signature acknowledging review
      </p>
    </div>
  )
}
