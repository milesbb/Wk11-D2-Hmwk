import { createSlice } from '@reduxjs/toolkit'

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favourites: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favourites.push(action.payload)
    },
    removeFavourite: (state, action) => {
      state.favourites.splice(state.favourites.indexOf(action.payload), 1)
    },
  },
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer