import { useState } from "react";
import Input from "./components/input";

export default function ToDoList() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Input onchange={onchange} InputState={setData} />

      <p>{data}</p>
    </div>
  );
}
