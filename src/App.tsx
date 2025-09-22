import { useState } from "react";
import "./App.css";
import { Tobe } from "./component/Tobe";

function App() {
  const [tobe] = useState(true);

  return(
    <>
      {tobe && <Tobe />}
    </>
  )
}

export default App;
