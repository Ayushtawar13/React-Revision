import { Data,Data1 } from "../../zero/src/App";

const ComponentC = () => {
    return(
        <Data.Consumer>
            { (name) =>{
                return (
                    <Data1.Consumer>
                        {
                            (age) => {
                                return <h1> my name is {name} and i am {age} years old</h1>
                            }
                        }
                    </Data1.Consumer>
                )
            }}
        </Data.Consumer>
    )
}

export default ComponentC;