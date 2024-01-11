import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  AVALIABLE_DOCS,
  JOB_TEMPLATE,
  LOCATIONS,
  SENIORITY,
} from "../../utils/constants"

const initialState = {
  searchResults: AVALIABLE_DOCS,
  jobTemplates: JOB_TEMPLATE,
  seniority: SENIORITY,
  locations: LOCATIONS,
  filterOptions: [
    {
      jobTemplates: JOB_TEMPLATE.map((template) => {
        return { label: template, value: template }
      }),
    },
    {
      seniority: SENIORITY.map((template) => {
        return { label: template, value: template }
      }),
    },
    {
      locations: LOCATIONS.map((template) => {
        return { label: template, value: template }
      }),
    },
  ],
  filteredResults: [],
  selectedDocuments: [],
}

const documentSelectorSlice = createSlice({
  name: "document/selector",
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<any>) {
      state.searchResults = action.payload
    },
    setFilteredOptions(state, action: PayloadAction<any>) {
      state.filteredResults = action.payload
    },
    setSelectedDocuments(state, action: PayloadAction<string[] | any>) {
      state.selectedDocuments = action.payload
    },
  },
})

export const { setSearchResults, setFilteredOptions, setSelectedDocuments } =
  documentSelectorSlice.actions

export default documentSelectorSlice.reducer
