import React from 'react'
import { CommonContext } from './CommonContext'

const MainPage = () => {

  return (
    <div>
      <CommonContext.Consumer >
        {
            ({color})=>(
                <h1 style={{backgroundColor: color}} >hello this is main page</h1>
            )
        }
      </CommonContext.Consumer >
      
    </div>
  )
}

export default MainPage