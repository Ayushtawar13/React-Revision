import { useContext } from "react";

const ComponentB = () =>{
    const name = useContext(Data);
    const age = useContext(Data1);
    return (
        <h1> my name {name} and i am {age} years old</h1>
    )
}

export default ComponentB;