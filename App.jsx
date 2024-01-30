import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10);
  const addValue = ()=>{
    counter = counter + 1;
    setCounter(counter)
  }
  const removeValue = ()=>{
    counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
    <h1>React with Swapnanil</h1>
    <h2>Count value : {counter}</h2>
    <button onClick={addValue}>Increment: {counter}</button>
    <button onClick={removeValue}>Decrement:{counter}</button>

     
    </>
  )
}

export default App
