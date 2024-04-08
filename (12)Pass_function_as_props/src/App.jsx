import React from "react";
import User from "./Component/User";
import User2 from "./Component/User2";

const App = () => {
  function Myfunction() {
    alert("passing function from props");
  }
  return (
    <>
      <User data={Myfunction} />
      <div style={{float:"right"}}>
        <User2 data={Myfunction} />
      </div>
    </>
  );
};

export default App;
