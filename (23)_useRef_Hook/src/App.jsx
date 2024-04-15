import React, { useRef } from 'react'

const App = () => {

  const inputRef=useRef(null);

  function handleInpute() {
    console.log("Function Call");

    // inputRef.current.focus();
    inputRef.current.value="Satyajay";
    inputRef.current.style.color = "blue";
    
  }
  return (
    <div>
      <h1>useRef in React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInpute}>Handle Input</button>
    </div>
  )
}

export default App