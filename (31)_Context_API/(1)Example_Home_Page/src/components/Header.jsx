import React from 'react'
import { CommonContext } from './CommonContext'

const Header = () => {

  return (
    <div>
      <CommonContext.Consumer >
        {
            ({color})=>(
                <h1 style={{backgroundColor: color}} >this is Header component</h1>
            )
        }
      </CommonContext.Consumer >
      
    </div>
  )
}

export default Header