import React, { useState } from 'react'

const App = () => {
  const [Data, setDate]=useState("Satya")
  
  function DataUpdate() {
    setDate("Jay")
  }
  
  return (
    <div>

      <h1>My name is * {Data} * </h1>
      <h2>This code is written by * {Data} *</h2>
      <p>This GitHub account belongs to * {Data} *</p>
      <button onClick={DataUpdate}>Update Name</button>

    </div>
  )
}

export default App