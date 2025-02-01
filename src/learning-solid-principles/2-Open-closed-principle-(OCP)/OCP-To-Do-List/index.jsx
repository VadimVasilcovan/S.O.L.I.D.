import { useState } from "react";
import Input from "./components/input";
import Button from "./components/button/button.jsx";
import { AddTask, DeleteTask } from "./components/button/submit-button.jsx";

export default function ToDoList() {
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    setTasks(AddTask(tasks, data)); 
    setData(""); 
  };

  const handleDelete = (index) => {
    setTasks(DeleteTask(tasks, index)); 
  };
  return (
    <div>
      <Input value={data} InputState={setData} />
      <Button onClick={handleAdd} ButtonName="Add" />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <Button onClick={() => handleDelete(index)} ButtonName="Delete" />
          </li>
        ))}
      </ul>
    </div>
  );
}
