import React from 'react';

const Child = ({ name, onNameChange }) => {
  return (
    <div>
      <p>Child Component</p>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={onNameChange} />
    </div>
  );
};

export default Child;