import { useState } from "react"

function App() {

  // handling array of object using use state  

  const [movie  , setMovie ] = useState([
                            { id: 1, title: "Spider man", ratings: 3 },
                            { id: 2, title: "Superman", ratings: 6 },
                            ]);
  
  const handldeClick = () =>{
    setMovie( 
        movie.map( (m) => m.id == 1 ? {...m , title:"john wick"}:m )
    )
  }

  return (
    <div>
      {movie.map( (m) =>(<ul key={Math.random()}>
        <li>Id : {m.id}</li>
        <li>Title : {m.title}</li>
        <li>Ratings : {m.ratings}</li>
      </ul>
         
      ))}
      <button onClick={handldeClick}>Change Title</button>
    </div>
  )
}

export default App;
