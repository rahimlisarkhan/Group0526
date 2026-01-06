import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './home/index.js'

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
})