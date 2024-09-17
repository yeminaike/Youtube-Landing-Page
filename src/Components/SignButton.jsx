import { useState } from "react";
import React from "react";



export default function TodoApp() {

const [todos, setTodos] = useState([]);
const [task, setTask] = useState("");


const handleInputChange = (e) =>{
 setTask(e.target.value)
}


const addTodo = (e) => {
  e.preventDefault();
setTodos(todos.concat(task))
setTask("")
  console.log(addTodo, "uuuu")
}

const deleteTodo =(id) => {

setTodos(task.filter(task=> task.id !== id))
}
  
  return (
    <div className="">

<div className="bg-gradient-to-r from-slate-400 to-blue-600 h-screen ">
     <h1>TO DO LIST APP</h1>


<form>
<input
type="text"
value={task}
placeholder="add a new task"
onChange={handleInputChange}
className="outline-none rounded-full border border-red-800 text-center"

/>
<div className="bg-gradient-to-l from-emerald-500 to-emerald-900 w-[20rem] rounded-md text-center text-[#fff] mt-3 py-2">
  <button onClick={addTodo}>Add task</button>
</div>
<div className="bg-gradient-to-l from-emerald-500 to-emerald-900 w-[20rem] rounded-md text-center text-[#fff] mt-3 py-2">
  <button onClick={deleteTodo}>delete task</button>
</div>



</form>
<div>

  <ul>

    {todos.length > 0 ? (

      todos?.map((lists, index) => (
        <li className="" key={index}>
            {lists}
        </li>

      

      ))
    ):(

      <p>No To do list yet</p>
    )}
  </ul>
</div>





     
    </div>



    </div>
   
  );
}
