import {useState,useEffect} from "react";
function Todo(){
    const [todos,setTodos]=useState([]);
    const [task,setTask]=useState("");
    const addTodo=()=>{
        setTodos([...todos,task]);
        setTask('');
    }
    return (
        <div>
            <input type="text" placeholder="TODOLIST" onChange={(e)=>{setTask(e.target.value)}}/>
            <button onClick={addTodo}>ADD TASK</button>
            <ul>
                {
                    todos.map((task,index)=>(
                        <li key={index}>{task}</li>

                    ))}


                    
                
            </ul>
        </div>
    )
}
export default Todo;