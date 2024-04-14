import React from "react";

const App = () => {
  const users = [
    {
      Name: "Jay",
      Email: "jay@gmail.com",
      Address: [
        { H_no: "10", City: "Raipur", Country: "india" },
        { H_no: "11", City: "Bilaspur", Country: "india" },
        { H_no: "12", City: "Janjgir Champa", Country: "india" },
        { H_no: "13", City: "Raigarh", Country: "india" },
      ],
    },
    {
      Name: "Satyajay",
      Email: "Satyajay@gmail.com",
      Address: [
        { H_no: "10", City: "Raipur", Country: "india" },
        { H_no: "11", City: "Bilaspur", Country: "india" },
        { H_no: "12", City: "Janjgir Champa", Country: "india" },
        { H_no: "13", City: "Raigarh", Country: "india" },
      ],
    },
    {
      Name: "Abhi",
      Email: "Abhi@gmail.com",
      Address: [
        { H_no: "10", City: "Raipur", Country: "india" },
        { H_no: "11", City: "Bilaspur", Country: "india" },
        { H_no: "12", City: "Janjgir Champa", Country: "india" },
        { H_no: "13", City: "Raigarh", Country: "india" },
      ],
    },
    {
      Name: "Satya",
      Email: "Satya@gmail.com",
      Address: [
        { H_no: "10", City: "Raipur", Country: "india" },
        { H_no: "11", City: "Bilaspur", Country: "india" },
        { H_no: "12", City: "Janjgir Champa", Country: "india" },
        { H_no: "13", City: "Raigarh", Country: "india" },
      ],
    },
  ];

  return (
    <div>
      <h3>List with Nested Array</h3>
      <table border={1}>

          <tr>
            <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
    
        {users.map((item, i) => (
          <tr key={i}>
            <td>{i+1}</td>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <td>
              {item.Address.map((data) => (
                <tr>
                  <td>H_no: {data.H_no}</td>
                  <td>City: {data.City}</td>
                  <td>Country: {data.Country}</td>
                </tr>
              ))}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
