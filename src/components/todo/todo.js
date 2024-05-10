import { useState } from "react"


const Todo = ()=>{
    const [task,newtask]=useState([])

    const addtask=()=>{
        const newTask = prompt("enter your task")
        newtask(task.push(newTask))
    }
    
    return(
        <>
        {
            task.map((work)=>{
                return(
                    <>
                    <h1>{work}</h1>
                    </>
                )
            })
        }
        <button onClick={addtask}>Add Task</button>
        <button>Clear All Tasks</button>
        </>
    )
}

export default Todo