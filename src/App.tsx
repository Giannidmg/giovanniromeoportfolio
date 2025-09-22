import { useState } from "react";
import "./App.css";
import { Tobe } from "./component/Tobe";

function App() {
  const [count, setCount] = useState(0);
  const [tobe, setTobe] = useState(true);

  return(
    <>
      {tobe && <Tobe />}
    </>
  )
}

export default App;
