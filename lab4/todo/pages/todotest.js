import { useState } from "react"

const Todo = () => {

   const [tasks, setTasks] = useState(
    [
        {id: 1, name: 'Reading a book'},
        {id: 2, name: 'Sleep at night'}]

   )
   const [name, setName] = useState('')

   const [idEdit, setIdEdit] = useState(0)
    
    const renderTask = () => {
        return tasks.map((task, index) => 
            ( <li key = {index}> 
                {task.id}
                {(+idEdit !== +task.id)?
                    task.name:
                    (
                        <input type ="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    )
                }
                
                <button onClick={() => editTask(task.id,task.name)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>

                </li>))
    }

    const editTask = (id) => {
        setIdEdit(id)
        let t = tasks.find((task) => +task.id === +id)
        setName(t.name)
        if (+idEdit === +id) { //Press Edit again
            let newTasks = tasks.map((task, index) => {
                if (+task.id === +id)
                    tasks[index].name = name
                return task
            })
            setTasks(newTasks)
            setIdEdit(0)
        }
 

    }

    const deleteTask = (id) => {
        console.log('Delete')
        let newTasks = tasks.filter((task) => ( +task.id !== +id))
        setTasks(newTasks)
    }

    const addTask = () => {
        console.log('Add!!')
        const id = tasks[tasks.length-1].id+1;
        setTasks([ ...tasks, { id, name} ])
    }

    // return ( <h1>Todo</h1>)
    return (
        <div>
           <h1>Todo</h1>
           <input type ="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => addTask(name)}>Add</button>
            <ul>
                {renderTask()}
            </ul> 
        </div>
        
    )
}

export default Todo