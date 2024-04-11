import React, { useState, useEffect } from 'react';

function Before_Running_useEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // alert("useEffect Calling")
    console.log("useEffect Calling")
  },[]); // [count] 

  return (
    <div>
      <h1>1 Purposes:- UseEffect before Repeating task</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr />
    </div>
  );
}

export default Before_Running_useEffect