import { useState } from "react";
import Signin from "./Pages/SignIn";
import Welcome from "./Pages/Welcome";

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [signin, setsignin] = useState(true);

  return (
    <>
    <h1>salam</h1>
    {
      currentUser ? <Welcome/> : <Signin/> 
    }
    </>
  );
}

export default App;
