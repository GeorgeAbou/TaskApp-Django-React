import { Link } from "react-router-dom"

export function  Navigation(){

    return (
      <div>
        <Link to="/tasks">Task App</Link><br />
        <Link to="/task/create">Create Task</Link>
      </div>
    )
  
}

