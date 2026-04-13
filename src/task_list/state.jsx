import { create } from "zustand";

export const useTasks = create((set) =>({
    tasks: ["Vasia", "Pol"],
    addTask: (value)=>set((state)=>({
        tasks: [...state.tasks, value],
    })),
    removeTask: (index)=>set((state)=>({
        tasks: state.tasks.filter((el, i)=>i!=index),
    })),
    changeTask: (index, value)=>set((state)=>({
        tasks: state.tasks.map((el, i)=>i==index? value: el),
    }))

}))

export const useVisibleTask = create((set) =>({
    visible: false,
    setInvisible: ()=>set({visible: false}),
    setVisible: ()=>set({visible: true})
}))