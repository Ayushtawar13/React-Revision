import { useState } from "react";

const Todo = () => {

    const [todos , setTodos] = useState([]);
    
    const [inputValue  , setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim()){
            setTodos( [ ...todos , inputValue]);
            setInputValue("");
        }

    } 

    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }
    return(
        <div>

            <h1>Todo List </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={changeHandler} value={inputValue} placeholder="Add a new Todo" />
                <button type="submit" onClick={handleSubmit}>Add Todo</button>
            </form>

            <h2>
                Element in Todo
            </h2>
            <ul>
                { todos.map( (todo , index) => ( <li key={index}>{todo}</li> ))}
            </ul>

        </div>
    )
}

export default Todo;