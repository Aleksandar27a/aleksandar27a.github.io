import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addHabit } from './HabitSlice';

export const HabitForm = () => {
    const dispatch = useDispatch()
    
    const [habit,setHabit] = useState('');
    const [frequency,setFrequency] = useState('daily')
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(habit) {
            dispatch(addHabit({name:habit,frequency}))
        }
    }
  return (
    <form onSubmit={handleSubmit}>
    <fieldset>
    <legend>Habit</legend>
    <input type="text" value={habit} placeholder='enter your habbit' onChange={(e)=>setHabit(e.target.value)} />
    <button>Submit</button>
    <select value={frequency} onChange={(e)=> setFrequency(e.target.value)}>
      <option value='daily'>Daily</option>
      <option value='weekly'>Weekly</option>
    </select>
  </fieldset>
  </form>
  )
}
export default HabitForm

 