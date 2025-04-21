import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    habits:[]
}

export const Habits = createSlice({
    name:'habits',
    initialState,
    reducers:{
        addHabit: (state,action) => {
            const validFrequency = ['daily','weekly']
            const frequency = validFrequency.includes(action.payload.frequency)  ? action.payload.frequency : 'daily'
           const newHabbit = {
            id: new Date().toISOString(),
            name: action.payload.name,
            frequency: frequency,
            completedAt: [],
            createdAt: new Date().toISOString().split('T')[0]
           }
           state.habits.push(newHabbit)
        },
        toggleHabit: (state,action)=>{
            const habit = state.habits.find((habit)=> habit.id === action.payload.id);
            if(habit){
                const index = habit.completedAt.indexOf(action.payload.date)
                if(index > -1){
                    habit.completedAt.splice(index,1)
                }else{
                    habit.completedAt.push(action.payload.date)
                }
            }
        }


    }
})

export const {addHabit,toggleHabit} = Habits.actions
export default Habits.reducer