import { useState } from "react";
import Button from "../UI/Button";

import Input from "../UI/input";
export default function ToDoList() {
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    setTasks(TaskService.add(tasks, data));
    setData(""); // Clear input after adding
  };

  const handleDelete = (index) => {
    setTasks(TaskService.delete(tasks, index));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <Input value={data} onChange={setData} placeholder="Enter a task..." />
      <Button onClick={handleAdd} label="Add Task" />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <Button onClick={() => handleDelete(index)} label="Delete" />
          </li>
        ))}
      </ul>
    </div>
  );
}
