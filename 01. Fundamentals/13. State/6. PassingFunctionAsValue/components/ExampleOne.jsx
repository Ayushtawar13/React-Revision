import { useState } from "react";


const ExampleOne = () =>{

    const [count , setCount ] = useState( () => {
        const initialCount  = 10 ;
        return initialCount;
    })

    const increment = () => ( setCount( count +1));

    return(
        <div>
            <h1>Initial Count : {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    ) 
}

export default ExampleOne;