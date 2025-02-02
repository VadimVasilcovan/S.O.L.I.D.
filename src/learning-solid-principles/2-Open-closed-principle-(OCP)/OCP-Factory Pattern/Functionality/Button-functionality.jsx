const ButtonActions = {
    add: (tasks, newTask) => [...tasks, newTask],


    delete: (tasks, deleteIndex) => tasks.filtes((_, index) => index !== deleteIndex )
}


export default ButtonActions