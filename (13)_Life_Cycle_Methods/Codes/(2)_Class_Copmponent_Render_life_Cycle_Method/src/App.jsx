import React, { useState } from 'react'
import User from './Component/User'


const App = () => {
  const [name, setName]=useState("Satya")
  return (
    <div>
      <User name={name}/>
      <button onClick={()=>setName("Jay")}>Update name</button>
    </div>
  )
}

export default App