import React, { useState } from 'react'

const Conditional_Rendering = () => {
    const [Condition, setCondition]=useState(5)

    // Condition 1,2,3

  return (
    <>
        {Condition==1?<h1>Welcome User 1</h1>
        :Condition==2?<h1>Welcome User 2</h1>
        :<h1>Welcome User 3</h1>}
    </>
  )
}

export default Conditional_Rendering