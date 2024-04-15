import React from "react";
import { useState, useMemo } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(10);

  const multiCountMemo = useMemo(function multiCount() {
    console.log("MultiCount called");
    return count * 5;
  },[count]);
  return (
    <div>
      <h1>UseMemo_Hook</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setcount(count + 1)}>Update Count</button>
      <hr />
      <h1>{multiCountMemo}</h1>
      <hr />
      <h3>Item : {item}</h3>
      <button onClick={() => setitem(item * 10)}>Update Item</button>
    </div>
  );
};

export default App;
