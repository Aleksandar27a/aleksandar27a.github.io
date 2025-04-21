import { useDispatch, useSelector } from "react-redux"
import { toggleHabit } from "./HabitSlice"

export const HabitList = () => {
    const habits = useSelector((state)=> state.habits.habits)
    
    const dispatch = useDispatch()
    const today = new Date().toISOString().split('T')[0]
  const habitStreak = (habit) =>{
    let streak = 0;
    const date = new Date();
    while(true){
      const currentDate = date.toISOString().split('T')[0];
      if(habit.completedAt.includes(currentDate)){
        streak++;
        date.setDate(date.getDate() - 1);
      }
      else{
        break;
      }
    }
    return streak;
  }
    return (
      <div className="habit-container">
      {habits.map((habit) => (
        <div key={habit.id} className="habit">
          <h1>Habit: {habit.name}</h1>
          <p>Created at: {habit.createdAt}</p>
          <p>Frequency: {habit.frequency}</p>
          <button onClick={() => dispatch(toggleHabit({ id: habit.id, date: today }))}>
            {habit.completedAt.includes(today) ? "Unmark" : "Mark Completed"}
          </button>
          <p>Current Streak: {habitStreak(habit)}</p>
        </div>
      ))}
    </div>
    
    )
}

export default HabitList