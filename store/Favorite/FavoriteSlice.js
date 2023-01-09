import { createSlice } from '@reduxjs/toolkit'
import {setToken} from "../../utils/Tokens"

const initialState = {
  favorites: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state,action) => {
        if(state.favorites.find((item)=>item?.name===action.payload?.name)){
            state.favorites = state.favorites.filter((item)=>item?.name !==action?.payload?.name)
        }else{
            state.favorites.push(action.payload)
        }

    },
    loadFavorite:(state,action)=>{
        state.favorites = action.payload
    }
  },
})

export const { addFavorite,loadFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer