import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCountry: {},
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addCountry: (state,action) => {
      state.selectedCountry = action.payload
    },
  },
})

export const { addCountry } = searchSlice.actions

export default searchSlice.reducer