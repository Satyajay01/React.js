import React from "react";

function DOM_uncontrolled_component() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = document.getElementById("myInput").value;
    console.log("Input value:", inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>with Direct DOM</h3>
        <input type="text" id="myInput" />
        <button type="submit">Submit</button>
        <p>open console</p>
      </form>
    </div>
  );
}

export default DOM_uncontrolled_component;
