import React, { useState } from 'react'
import "../style.css"

const generateId =()=>{
    const id = Math.floor(Math.random()*10);
    return id;
}


const Todo = () => {
    const [todos , setTodo] = useState([]);
    const [input , setInput] = useState("");
    
     
    
    // const handleClick = () =>{
    //     setTodo( (todos) => 
        // todos.concat({
    //         text:input,
    //         id:generateId()
    //     }));
    //     setInput("");
    // }

    const handleClick= () => {
        setTodo((todos) =>
          todos.concat({
            text: input,
            id: generateId(),
          })
        );
        setInput("");
      };

    const removeTodo = (id) => {
        setTodo( (todos) => {
           return  todos.filter( (t) => t.id != id );
        })
    }

  return(
    <div className='container'>
        <input type="text" 
        placeholder='enter new todo' 
        value={input}
        onChange={(e) => setInput(e.target.value)} />

        <button onClick={handleClick}>Add</button>

        <ul className='todo-list'>
            {todos.map( ({text , id}) => {
                return <li key={id} className='todo'>
                    <span>{text}</span>
                    <button onClick={() => removeTodo(id)}>X</button>
                </li>

            })}
        </ul>
    </div>
  )
}

export default Todo