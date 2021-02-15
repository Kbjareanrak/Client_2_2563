import { useState } from 'react'
import styles from '../styles/novel.module.css'

const Novel = () => {
 
    const [tasks, setTasks] = useState([
        { id: 1, name: 'เชอร์ล็อก โฮมส์ ตอน เหตุอื้อฉาวในโบฮีเมีย (A Scandle in Bohemie)', nameType: 'สืบสวน สอบสวน'},
        { id: 2, name: 'เชอร์ล็อก โฮมส์ ตอน คู่หมั้นจำแลง (A Case of Identity)', nameType: 'สืบสวน สอบสวน' }
    ])
    
    const [name, setName] = useState('')

    const [nameType, setTypeName] = useState('')

    const [idEdit, setIdEdit] = useState(0)

    const renderTasks = () => {
        if (tasks !== null)
            return tasks.map((task, index) => (
                <li key={index} className={styles.listItem}>
                   {index+1}&nbsp;
                    {(idEdit !== task.id) ?
                       task.name :
                       (<input type="text"
                           name="name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                       />)
                    }&nbsp;
                    {(idEdit !== task.id) ?
                       task.nameType :
                       (<input type="text"
                           nameType="nameType"
                           value={nameType}
                           onChange={(e) => setTypeName(e.target.value)}
                       />)}

                    <div className={styles.buttonContainer}>
                        <button className={`${styles.button} ${styles.btnEdit}`}
                            onClick={() => editTask(task.id)}>Edit</button>
                        <button className={`${styles.button} ${styles.btnDelete}`}
                            onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
               </li>))
    }

    const addTask = (name,nameType) => {
        setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, name,nameType }])
        console.log(tasks)
    }

    const deleteTask = (id) => {
        console.log('delete id: ', id)
        let newTasks = tasks.filter((task) => task.id !== +id)
        setTasks(newTasks)
    }

    const editTask = (id) => {
        setIdEdit(id)
        let t = tasks.find((task) => +task.id === +id)
        setName(t.name)
        setTypeName(t.nameType)
        if (+idEdit === +id) { //Press Edit again
            let newTasks = tasks.map((task, index) => {
                if (+task.id === +id)
                    tasks[index].name = name
                    tasks[index].nameType = nameType
                return task
            })
            setTasks(newTasks)
            setIdEdit(0)
        }
    }
 
 
  
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Novel List</h1>
            <div className="addContainer">
                <input class={styles.inP} type="text"
                    name="addTask" 
                    onChange={(e) => (setName(e.target.value))}
                />
                <input class={styles.inP} type="text"
                    nameType="addTypeTask" 
                    onChange={(e) => (setTypeName(e.target.value))}
                />
                <button  className={styles.btnAdd} onClick={() => addTask(name,nameType)}>Add</button>
            </div>
            <ul className={styles.list}>
                {renderTasks()}
            </ul>
  
        </div>
    )
 }
  
 export default Novel