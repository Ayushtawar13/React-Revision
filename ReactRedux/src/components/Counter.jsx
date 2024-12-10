import { useSelector,useDispatch } from "react-redux";
import { increment , decrement } from "../App/features/counterSlice";

const Counter = () => {
    // read data from the store 
    const count = useSelector( (state ) => state.counter.value );

    // changing the data by sending the to the store 
    const dispatch = useDispatch();

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch( increment() ) }>+</button>
            <button onClick={ () => dispatch( decrement() )}>-</button>
        </div>
    )

};

export default Counter;