
//Submit button
export function AddTask(tasks, newTask,) {
    return [...tasks, newTask]; 
  }
  //Delete button
  export function DeleteTask(tasks, deleteIndex) {
    return tasks.filter((_, index) => index !== deleteIndex);
  }