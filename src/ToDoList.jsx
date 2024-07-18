import React, { useState } from "react";
function ToDoList() {
  //It is a separate array
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "take a shower",
    "Walk the dog",
  ]);
  // new array for adding to curent array
  const [newTask, setNewTask] = useState("");
  function inputchange(event) {
    //In this some event of element is taken to store in the new array
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      //connecting the input box and button and we to need update previous element so we are puting arrow function
      setTasks((t) => [...t, newTask]);
      // In this after adding a new element we need to free up the input element
      setNewTask("");
    }
  }
  function deleteTask(index) {
    // underscore is used to ignore the element in the argument
    const updatetask=tasks.filter((_,i)=>i !== index);
    setTasks(updatetask); 
  }
  function moveTaskup(index) {
    if(index>0)
    {
        const update=[...tasks];
        [update[index],update[index-1]]=[update[index-1],update[index]];
        setTasks(update);
    }
  }
  function moveTaskdown(index) {
    if(index<tasks.length-1)
        {
            const update=[...tasks];
            [update[index],update[index+1]]=[update[index+1],update[index]];
            setTasks(update);
        }
        
  }
  return (
    <div className="main-container">
      <h2>To-Do-List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={inputchange}
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={()=>deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={()=>moveTaskup(index)}>
              ☝️
            </button>
            <button className="move-button" onClick={()=>moveTaskdown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
