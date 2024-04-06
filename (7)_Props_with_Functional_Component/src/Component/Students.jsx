import React from "react";

const Students = (props) => {
    console.log(props)
  return (
    <div style={{backgroundColor: "skyblue"}}>
      <h3>Hello {props.name}</h3>
      <h4>Email {props.email}</h4>
      <h4>Address:- {props.address}</h4>
    </div>
  );
};

export default Students;
