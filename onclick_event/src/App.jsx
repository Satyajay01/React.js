import React from 'react'

const App = () => {
  function onclick_event() {
    alert(" this is onclick event ")
    
  }
  return (
      <>
        <h1>Click this Button</h1>

        <button onClick={onclick_event}>Click</button>
      
      </>
  )
}

export default App