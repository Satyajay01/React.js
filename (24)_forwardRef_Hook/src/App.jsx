import React, { useRef } from 'react'
import User from './User'

const App = () => {
  const inputRef=useRef(null);
  function updateInput() {

    inputRef.current.value="Satyajay";
    inputRef.current.style.color = "blue";
    
  }
  return (
    <div>
      <h1>ForwardRef in React</h1>
      <User ref={inputRef} />
      <button onClick={updateInput}>Update Input</button>
    </div>
  )
}

export default App