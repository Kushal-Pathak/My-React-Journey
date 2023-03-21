export default function Task({ task, deleteTask, completeTask }) {
  return (
    <div
      key={task.id}
      style={{ backgroundColor: task.completed ? "lime" : "white" }}
    >
      <h1>{task.taskName}</h1>
      <button onClick={() => completeTask(task.id)}>Completed</button>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}
