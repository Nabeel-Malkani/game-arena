import { configureStore } from "@reduxjs/toolkit"
import gamesReducer from "./gameSlice"
import thunk from "redux-thunk"
import logger from "redux-logger"

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
  middleware: [thunk, logger],
})
