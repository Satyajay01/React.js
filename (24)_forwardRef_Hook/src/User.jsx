import React,{forwardRef} from 'react'

const User = (props,data) => {
  return (
    <div>
        <input type="text" ref={data} />
    </div>
  )
}

export default forwardRef(User)