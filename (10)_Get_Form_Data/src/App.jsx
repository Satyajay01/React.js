import React, { useState } from 'react'

const App = () => {
  const [name, setName]=useState("")
  const [interest, seinterest]=useState("")
  const [tnc, seTnc]=useState(false)

  function getFormData(e) {
    console.log(name,interest,tnc)
    e.preventDefault()
  }
  return (
    <div>

      <h1>Handle From Data in React</h1>
      <form onSubmit={getFormData}>
        <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/> <br /> <br />
        <select onChange={(e)=>seinterest(e.target.value)}>
          <option>Select options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select> <br />
        <input type='checkbox' onChange={(e)=>seTnc(e.target.checked)}/> <span>Accept Terms and Conditions</span> <br /> <br />
        <button onClick={getFormData}>Submit</button>
      </form>
    </div>
  )
}

export default App