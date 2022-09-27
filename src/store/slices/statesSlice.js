import { createSlice } from '@reduxjs/toolkit';

export const statesSlice = createSlice({
    name: 'states',
    initialState: {
        spanish: false
    },
    reducers: {
        onSpanish: (state ) => {
            state.spanish = true;
        },
        onEnglish: (state ) => {
            state.spanish = false;
        },
    }
});

export const { onSpanish, onEnglish } = statesSlice.actions;