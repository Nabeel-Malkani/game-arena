import { createSlice } from "@reduxjs/toolkit"
import baseAPI from "../apicalls"
import axios from "axios"
const initialState = {
  allGames: [],
  searchGames: [],
  pcGames: [],
}

export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    allGames: (state, action) => {
      state.allGames = action.payload
    },
    searchGames: (state, action) => {
      state.searchGames = action.payload
    },
    pcGames: (state, action) => {
      state.pcGames = action.payload
    },
  },
})

export const { allGames, searchGames, pcGames } = gameSlice.actions
export default gameSlice.reducer
