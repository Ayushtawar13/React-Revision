import { useEffect, useState } from "react";

const CounterEffect = () => {
    const [value , setValue] = useState(0);
    const decrement = () =>{
        setValue(value-1);
    }
    const increment = () =>{
        setValue(value+1);
    }
    useEffect( () =>{
         console.log("counter updated");
    } ,[value]);

    return(
        <div>
            <h2>Counter App</h2>
            <h3>Value : {value}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default CounterEffect;