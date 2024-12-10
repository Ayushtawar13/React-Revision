import { createContext } from "react";
import ComponentA from "../../02. ReactHooks/4. ContextAPI_prop_passing/ComponentA";

export const Data = createContext();
export const Data1 = createContext();


function App() {
  const name = "ayush";
  const age = 20;

  return (
      <Data.Provider value={name }>
        <Data1.Provider value={age}>
            <ComponentA></ComponentA>
        </Data1.Provider>
           
      </Data.Provider>
  )
}

export default App;
