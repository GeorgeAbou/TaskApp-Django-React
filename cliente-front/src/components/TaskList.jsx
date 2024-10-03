import { useEffect,useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard"




export function  TaskList() {

   const [tasks,setTasks]=useState([])


  //useEffect se ejecuta apenas cargue la pagina  
  useEffect(() => {
     async function loadTasks() {
        const res =  await getAllTasks();//llama funcion q hace el get al backend
        setTasks(res.data);
     }
     loadTasks();

   },[])
   return (
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          //componente de cards 
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    );



}


