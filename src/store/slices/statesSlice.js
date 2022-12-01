import { createSlice } from '@reduxjs/toolkit';

export const statesSlice = createSlice({
    name: 'states',
    initialState: {
        spanish: false,
        darkmode: false
    },
    reducers: {
      onSpanish: (state) => {
          state.spanish = true;
      },
      onEnglish: (state) => {
          state.spanish = false;
      },
      onDarkModeOn: (state) => {
          state.darkmode = true;
      },
      onDarkModeOff: (state) => {
        state.darkmode = false;
    }
  }
});

export const { onSpanish, onEnglish, onDarkModeOn, onDarkModeOff } = statesSlice.actions;