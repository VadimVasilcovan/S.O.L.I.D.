export function AddTask(tasks, newTask,) {
    return [...tasks, newTask]; 
  }
  
  export function DeleteTask(tasks, deleteIndex) {
    return tasks.filter((_, index) => index !== deleteIndex);
  }