import React from 'react'
import './External.css'
import style from './Custom.module.css'

const App = () => {
  const internal_css = {
    backgroundColor: '#00f5d4',
    color: '#caf0f8',
           };
  return (
    <div>
      <h1 style={{backgroundColor: "#3a86ff", color:"#ffffff"}} > this is inline CSS</h1>
      <h1 style={internal_css} > this is internal CSS</h1>
      <h1 className='External_CSS'> this is External CSS</h1>
      <h1 className={style.modular_css}> this is Modular CSS</h1>
    </div>
  )
}

export default App