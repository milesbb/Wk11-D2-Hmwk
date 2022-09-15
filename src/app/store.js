import { configureStore } from '@reduxjs/toolkit'
import favouriteReducer from '../features/favourite/favouriteSlice.js'

export default configureStore({
  reducer: {
    favourite: favouriteReducer
  },
})