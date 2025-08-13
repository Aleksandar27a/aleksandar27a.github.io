import { configureStore } from "@reduxjs/toolkit";
import HabitsReducer from './HabitSlice.js'

export const store = configureStore({
  reducer:{
    habits:HabitsReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
 