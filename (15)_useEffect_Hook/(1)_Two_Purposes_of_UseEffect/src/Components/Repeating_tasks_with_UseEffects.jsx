import React, { useState, useEffect } from 'react';

function Repeating_tasks_with_UseEffects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // alert("useEffect Calling")
    console.log("useEffect Calling")
  },[count]); 

  return (
    <div>
      <h1>2 Purposes:- UseEffects along with repeating tasks</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr />
    </div>
  );
}

export default Repeating_tasks_with_UseEffects;