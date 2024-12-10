import UpdateUser from "../../02. ReactHooks/5. useContextHook/exercise/UpdateUser";
import UserProfile from "../../02. ReactHooks/5. useContextHook/exercise/UserProfile";
import { UserProvider } from "../../02. ReactHooks/5. useContextHook/exercise/UserContext";
// import UserProvider from "./UserContext";

function App() {
 

  return (
      <UserProvider>
        <UserProfile></UserProfile>
        <UpdateUser></UpdateUser>
      </UserProvider>
  )
}

export default App;
