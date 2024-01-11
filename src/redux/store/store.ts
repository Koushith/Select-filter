import { configureStore } from '@reduxjs/toolkit';
import documentSelectorSlice from '../document-selector/document-selector.slice';

export const store = configureStore({
  reducer: {
    // TODO: add all reducers
    documentSelector: documentSelectorSlice,
  },
  
  devTools: {
    name: 'DocumentSeclector', 
    trace: true, 
    traceLimit: 25, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
