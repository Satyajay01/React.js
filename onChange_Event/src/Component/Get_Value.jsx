import React, { useState } from 'react'

const Get_Value = () => {
    const [data, setdata] = useState("");

    function getData(My_Value) {
        console.log(My_Value.target.value)
        setdata (My_Value.target.value)
        
      }

  return (
    <div>
    <h4> {data}</h4>
    <input type="text" onChange={getData} />
        <hr />
</div>
  )
}

export default Get_Value