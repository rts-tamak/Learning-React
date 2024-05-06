import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const IncrementValueHandler = () => {
    if(counter == 20) return;
    setCounter(counter+1);
  }

  const DecrementValueHandler = () => {
    if(counter == 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Project</h1>

      <h2>Counter value : {counter}</h2>
      <button onClick={IncrementValueHandler}>Increment Value</button>
      <button onClick={DecrementValueHandler}>Decrement Value</button>
    </>
  )
}

export default App
