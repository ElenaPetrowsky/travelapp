import { configureStore } from '@reduxjs/toolkit'
import SearchSlice from './Search/SearchSlice'
import FavoriteSlice from './Favorite/FavoriteSlice'

export const store = configureStore({
  reducer: {
    search:SearchSlice,
    favorite:FavoriteSlice
  },
})