import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((response) => {
        setdata(response);
      });
    });
  }, []);
  console.log("Users Data", data);

  return (
    <div>
      <h1>API Get Method</h1>
      <table border="1px">
        <thead>
          <tr>
            <td>ID: </td>
            <td>Name: </td>
            <td>UserName: </td>
            <td>Email: </td>
            <td>City: </td>
            <td>Full Address: </td>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id} </td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
              <td>
                {item.address.street}, {item.address.suite}, PinCode:
                {item.address.zipcode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
