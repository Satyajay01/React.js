import React from 'react'

const User = (props) => {
  return (<>
    <div>Call Props Function, Component User 1</div>
    <button onClick={props.data}>Click Me</button>
    </>
  )
}

export default User