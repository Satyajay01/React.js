import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <h3>High order component(HOC)</h3>
      <HOCRed cmp={Counter}/>
      <HOCBlue cmp={Counter}/>
      <HOCGreen cmp={Counter}/>
    </div>
  );
};

function HOCRed(props) {
  const Component = props.cmp;
  return <div style={{ backgroundColor: "red", width: 100 }}><Component /></div>;
}

function HOCBlue(props) {
  const Component = props.cmp;
  return <div style={{ backgroundColor: "blue", width: 100 }}><Component /></div>;
}

function HOCGreen(props) {
  const Component = props.cmp;
  return <div style={{ backgroundColor: "green", width: 100 }}><Component /></div>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Update</button>
    </>
  );
}

export default App;
