import React, { useRef } from 'react'

const App = () => {
  const inputElement = useRef(null);
  const focusAnsWrite =()=>{
    inputElement.current.focus();
    inputElement.current.value = "ayush it is";
  }
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusAnsWrite}>Focus and Write Ayush</button>
    </div>
  )
}

export default App