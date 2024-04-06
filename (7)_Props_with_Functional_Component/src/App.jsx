import React from "react";
import Students from "./Component/Students";

const App = () => {
  return (
    <>
      <div>
        <h1>React props</h1>
        <Students name={"Satyajay"} email="satyajay@gmail.com"  address='Raipur'/>
        <Students name={"Abhi"} email="abhi@gmail.com"/>
        <Students name={"Ravi"} email="ravi@gmail.com"/>
      </div>
    </>
  );
};

export default App;




