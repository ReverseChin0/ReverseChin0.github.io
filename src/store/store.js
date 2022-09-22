import { configureStore } from '@reduxjs/toolkit'
import { statesSlice } from './slices/statesSlice'

export const store = configureStore({
  reducer: {
    states: statesSlice.reducer
  },
})