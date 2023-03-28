import { useState } from 'react'
import './App.css'
import { useToggle } from './useToggle';

function App() {
  const [isVisible, toggle] = useToggle()
  return (
    <div className="App">
      <button onClick={toggle}>Show</button>
      {isVisible&&<h1>Hello World!</h1>}
    </div>
  )
}

export default App
