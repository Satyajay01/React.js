import React, { useState } from 'react'

const Get_Value_with_Button = () => {
  const [data, setdata] = useState("");
  const [print, setprint] = useState("");

  function getData(My_Value) {
      console.log(My_Value.target.value)
      setdata (My_Value.target.value)
      setprint(false) 
      
    }
  return (
    <>
    <h1>Get Value with Button</h1>
    {
      print?
      <h4> {data}</h4>
      :null

    }
    <input type="text" onChange={getData} />
    <button onClick={()=>setprint(true)} > Click</button>


    </>
  )
}

export default Get_Value_with_Button