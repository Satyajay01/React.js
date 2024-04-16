import React, { useRef } from 'react';

function Ref_uncontrolled_component() {
  const inputRef = useRef(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input value:', inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>with useRef</h3>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Ref_uncontrolled_component;
