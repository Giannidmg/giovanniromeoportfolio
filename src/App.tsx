import { useState } from 'react'
import logo from '/favicon.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="tobe">
        <img id="tobelogo" src="public/favicon.png" alt="tobelogo"></img>
        <h1>Stay Tuned!</h1>
        <h2>Under construction will arrive in a few days...</h2>
    </div>
    </>
  )
}

export default App
