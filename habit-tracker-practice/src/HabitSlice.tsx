import { createSlice } from "@reduxjs/toolkit"
import { getItem, setItem } from "./localStorage"

type HabitElements = {
    id:number,
    name:string,
    frequency:string,
    completedAt:string[],
    createdAt:string
}

const savedHabits = getItem('habits')

const initialState:{habits:HabitElements[]} = {
    habits: savedHabits ?? []
}

export const Habits = createSlice({
    name:'habits',
    initialState,
    reducers:{
        addHabit: (state,action) => {
            const validFrequency = ['daily','weekly']
            const frequency = validFrequency.includes(action.payload.frequency)  ? action.payload.frequency : 'daily'
           const newHabbit:HabitElements = {
            id: Date.now(),
            name: action.payload.name,
            frequency: frequency,
            completedAt: [],
            createdAt: new Date().toISOString().split('T')[0]
           }
           state.habits.push(newHabbit)
           setItem('habits',state.habits)
        },
        removeHabit:(state,action)=>{
            state.habits = state.habits.filter((item)=> item.id !== action.payload.id)
            setItem('habits',state.habits)
        },
        toggleHabit: (state,action)=>{
            const habit = state.habits.find((habit:HabitElements)=> habit.id === action.payload.id);
            if(habit){
                const index = habit.completedAt.indexOf(action.payload.date)
                if(index > -1){
                    habit.completedAt.splice(index,1)
                }else{
                    habit.completedAt.push(action.payload.date)
                }
            }
            setItem('habits',state.habits)
        },
       

    }
})

export const {addHabit,removeHabit,toggleHabit} = Habits.actions
export default Habits.reducer