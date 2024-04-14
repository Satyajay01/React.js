import React, { useState } from 'react';
import Child from './Component/Child';

const App = () => {
  const [name, setName] = useState("Satyajay");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>App Component</h2>
      <hr />
      <Child name={name} onNameChange={handleNameChange} />
    </div>
  );
};

export default App;