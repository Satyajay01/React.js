import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <h4>You typed: {inputValue}</h4>
    </div>
  );
}

export default App;
