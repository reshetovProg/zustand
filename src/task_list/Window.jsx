import { useState } from "react";
import { useVisibleTask, useTasks } from "./state"

export default function Window({index}) {

    const [text, setText] = useState();

    const visible = useVisibleTask((state) => state.visible);
    const setInvisible = useVisibleTask((state) => state.setInvisible);
    const changeTask = useTasks((state) => state.changeTask);

    const closeWindow = ()=>{
        console.log(index, text)
        changeTask(index, text)
        setInvisible();
    }

  return (
    <div className = {visible ? "window visible" : "window invisible"}>
      <form action="">
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
      </form>
      <button onClick={closeWindow}>Сохранить</button>
    </div>
  )
}
