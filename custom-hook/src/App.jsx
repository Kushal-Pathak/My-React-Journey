import { useState } from 'react'
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
