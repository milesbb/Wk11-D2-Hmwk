import { createSlice } from '@reduxjs/toolkit'

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favourites: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.favourites.push(action.payload)
    },
    removeFavourite: (state, action) => {
      state.favourites.splice(state.favourites.indexOf(action.payload), 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFavourite, removeFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer