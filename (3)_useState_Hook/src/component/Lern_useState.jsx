import React, { useState } from 'react';

const Lern_useState = () => {
  const [myData, setMyData] = useState(1);  
  const My_useState = () => {
    setMyData(myData + 1);
  };

  return (
    <>
      <h1>{myData}</h1>
      <button onClick={My_useState}>Click</button>
    </>
  );
};

export default Lern_useState;
