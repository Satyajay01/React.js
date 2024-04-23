import React from 'react'
import { CommonContext } from './CommonContext'

const Footer = () => {

  return (
    <div style={{marginTop: "60vh"}}>
      <CommonContext.Consumer >
        {
            ({color})=>(
                <h1 style={{backgroundColor: color}} >this is Footer Component</h1>
            )
        }
      </CommonContext.Consumer >
      
    </div>
  )
}

export default Footer