import { useState } from "react"
import { useTasks } from "./state"
import Line from "./Line";

export default function Console() {

    const [task, setTask] = useState();

    const tasks = useTasks((state) => state.tasks);
    const addTask = useTasks((state) => state.addTask);


  return (
    <div>
        <form action="">
            <input type="text" onChange={(event) => {
            setTask(event.target.value);
            }}/>
        </form>
        <button onClick={()=>addTask(task)}>ОК</button>
        <div>
        {tasks.map((el, index) => {
          return (
            <Line
              key={index}
              index = {index}
              value = {el}
            />
          );
        })}
      </div>
    </div>
  )
}
