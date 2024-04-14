import React from 'react'

const App = () => {
  const users =[
    { name: "Jay", Email:"jay@gmail.com", contact: "1111"},
    { name: "Satyajay", Email:"Satyajay@gmail.com", contact: "2222"},
    { name: "Abhi", Email:"Abhi@gmail.com", contact: "3333"},
    { name: "Satya", Email:"Satya@gmail.com", contact: "4444"}
  ]
  return (
   <>
   
    <div>
      <table border={1}>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>

        {users.map((item)=>
        <tr>
          <td>{item.name}</td>
          <td>{item.Email}</td>
          <td>{item.contact}</td>
        </tr>)}
      </table>
    </div>
   
   </>
  )
}

export default App