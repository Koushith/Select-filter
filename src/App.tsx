import React from "react"
import { OnboradingScreen } from "./screens"
import { useAppSelector } from "./redux/hooks"
import { useSelector } from "react-redux"
import { getAllDocumentSelectorState } from "./redux/document-selector/selectors"

export const App = () => {
  return (
    <div className='bg-gray-50'>
      <OnboradingScreen />
    </div>
  )
}
