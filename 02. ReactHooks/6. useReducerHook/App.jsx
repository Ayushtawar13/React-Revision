import React, { useReducer } from 'react'

const initialState = {count:0};

const reducer = (state , action) => {
  switch (action.type) {
    case "increment":
          return { ...state , count : state.count +1}
          break;
    case "decrement":
      return { ...state , count : state.count -1}
      break;
    case "reset":
      return { ...state , count: 0}
      break;
    default:
      break;
  }
}

const App = () => {
  const [state , dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({type : "increment"})}>+</button>
      <button onClick={()=>dispatch({ type : "decrement"})}>-</button>
      <button onClick={() => dispatch({ type : "reset" })}>Reset</button>
    </div>
  )
}

export default App