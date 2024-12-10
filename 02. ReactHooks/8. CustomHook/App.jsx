import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../02. ReactHooks/8. CustomHook/useFetch'
// const App = () => {
//   const [data,setData]=useState([]);
//   useEffect( ()=>{
//     const fetchData = async() =>{
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const data = await response.json();
//       setData(data)
//     }
//     fetchData();
//   },[]);
  // return (
  //   <div>
  //     {
  //        data.map( (item) => <li key={item.id}>Title : {item.title}</li> )
  //     }
  //   </div>
//   )
// }

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
  return (
    <div>
      {
        data && data.map( (item) => <li key={item.id}>Title : {item.title}</li> )
      }
    </div>
  )
}

export default App
