import React, { useReducer, useState } from 'react'

import { initialState ,counterReducer} from '../../../zero/src/counterReducer';

const Counter = () => {

  const [state , dispatch] = useReducer(counterReducer , initialState);  

   const [inputValue , setInputValue] = useState(0);

  const handleIncrement = () => dispatch({type:"increment"});
 
  const handleDecrement = () => dispatch({type:"decrement"});

//   const incrementByAmount = () => {
//                                     dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
//                                     setInputValue(0);
//                                 };
//   const decrementByAmount = () => {
//                                     dispatch({ type:"decrementByAmount" , payload : +inputValue});
//                                     setInputValue(0);
//                                 };


const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
    setInputValue(0); // Clear input after dispatch
  };

const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
    setInputValue(0); // Clear input after dispatch
  };

  return (
    <div>
        <h1>Use Reducer Example</h1>
        <h2>Counter : {state.count}</h2>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <div>
            <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleIncrementByAmount}>ADD</button>
            <button onClick={handleDecrementByAmount}>SUB</button> 
        </div>
    </div>
  ) 
}

export default Counter;