import { useState } from 'react'
import React from 'react'
import NavBar from './Comonents/NavBar'
import {counterContext} from "./context/Counterapi"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <counterContext.Provider value={{count, setCount}}>
          <NavBar  />

      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      </counterContext.Provider>
    </>
  )
}

export default App
