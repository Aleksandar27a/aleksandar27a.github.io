import { configureStore } from "@reduxjs/toolkit";
import HabitsReducer from './HabitSlice'

export const store = configureStore({
  reducer:{
    habits:HabitsReducer
  }
})