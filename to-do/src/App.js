import "./App.css";
import { useState } from "react";
import Task from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = (event) => {
    if (newTask) {
      setTodoList([
        ...todoList,
        { taskName: newTask, id: Math.random(), completed: false },
      ]);
      setNewTask("");
    }
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id == id) {
          task.completed = true;
        }
        return task;
      })
    );
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} value={newTask} type="text"></input>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        {todoList.map((task) => (
          <Task
            completeTask={completeTask}
            key={task.id}
            task={task}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
