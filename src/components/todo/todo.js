import { useState } from "react"


const Todo = ()=>{
    const [task,newtask]=useState([])

    const addtask=()=>{
        const newTask = prompt("enter your task")
        newtask(task=>[...task,newTask])
        console.log(task);
    }
    const clearAllTasks=()=>{
        newtask([])
    }
    
    return(
        <>
        {
            task.map((task)=>{
                return(
                    <div>
                    <h1>{task}</h1>
                    <button>Delete</button>
                    </div>
                )
            })
        }
        <button onClick={addtask}>Add Task</button>
        <button onClick={clearAllTasks}>Clear All Tasks</button>
        </>
    )
}

export default Todo