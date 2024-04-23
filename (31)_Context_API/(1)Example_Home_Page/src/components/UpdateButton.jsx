import React from 'react'
import { CommonContext } from './CommonContext'

const UpdateButton = () => {

  return (
    <div>
      <CommonContext.Consumer >
        {
            ({updateColor})=>(
                    <div>
               <button onClick={()=>updateColor('yellow')}>Update Color Yellow</button>
               <button onClick={()=>updateColor('blue')}>Update Color Blue</button>
               <button onClick={()=>updateColor('red')}>Update Color Red</button>

                    </div>
            )
        }
      </CommonContext.Consumer >
      
    </div>
  )
}

export default UpdateButton