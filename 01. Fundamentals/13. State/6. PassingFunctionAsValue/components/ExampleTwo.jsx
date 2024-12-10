import { useState } from "react";

const ExampleTwo = () => {
    const [number , setNumber] = useState( () =>{
        const randomNumber = Math.floor(Math.random()*100+1);
        return randomNumber;
    })

    const generateNumber = () =>{
        let num = Math.floor(Math.random()*100+1);
        setNumber(num);
    }
    return (
        <div>
            <h1>
                Random Number : {number}
            </h1>
            <button onClick={generateNumber}>Generate Number </button>
        </div>
    )
}

export default ExampleTwo;