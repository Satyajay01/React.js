import React from 'react'
import MyButtom from './MyButtom'

const NavBar = ({count, setCount}) => {
  return (
    <div>
      <MyButtom count={count} setCount={setCount}/>
    </div>
  )
}

export default NavBar