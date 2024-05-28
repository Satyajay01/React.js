import React, { useContext } from 'react'
import { counterContext } from '../context/Counterapi'

const MyButtom = () => {
  const {count, setCount} = useContext(counterContext)
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>click me {count}</button>

    </div>
  )
}

export default MyButtom