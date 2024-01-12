import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../store/store";

export const getAllDocumentSelectorState = (state: RootState) => state.documentSelector
export const getSearchResults = (state: RootState) => state.documentSelector.searchResults

export const getFilteredOptions = (state: RootState) => state.documentSelector.filteredResults
export const getSelectedDocuments = (state: RootState) => state.documentSelector.selectedDocuments

export const getJobTemplates = (state: RootState) => state.documentSelector.jobTemplates
export const getSeniority = (state: RootState) => state.documentSelector.seniority

export const getLocations = (state: RootState) => state.documentSelector.locations
