import ComponentB from "./ComponentB";
const ComponentA = ({name}) => {
return(
    <ComponentB name={name}></ComponentB>
)
}

export default ComponentA;