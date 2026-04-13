import {useTasks, useVisibleTask}  from "./state"
import Window from "./Window";

export default function Line({index, value}) {

    const removeTask = useTasks((state) => state.removeTask);
    const setVisible = useVisibleTask((state) => state.setVisible);

  return (
    <div >
      {index+1}. <span onClick = {setVisible}>{value}</span>
      <button onClick = {()=>{removeTask(index)}}>Удалить</button>
      <Window index={index}/>
    </div>
  )
}
