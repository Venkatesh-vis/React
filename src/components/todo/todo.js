import { useState } from "react";

const Todo = () => {
  const [task, newtask] = useState([]);

  const addtask = () => {
    const newTask = prompt("enter your task");
    newtask((task) => [...task, newTask]);
    console.log(task);
  };
  const clearAllTasks = () => {
    newtask([]);
  };
  const del = (i) => {
    task.map((t, ind) => {
      if (i !== ind) {
        return t
      }
    });
  };
  const update = (ind) => {
    const updatedTask = prompt("enter updated task");
    newtask(task);
  };

  return (
    <>
      <div>
        <button onClick={addtask}>Add Task</button>
        <button onClick={clearAllTasks}>Clear All Tasks</button>
      </div>
      <>
        {task.map((task, index) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => del(index)}>Delete</button>
              <button onClick={() => update(index)}>Update</button>
            </div>
          );
        })}
      </>
    </>
  );
};

export default Todo;
