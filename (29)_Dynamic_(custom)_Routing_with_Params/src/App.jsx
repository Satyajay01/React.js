import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import User from './User';

const App = () => {
  let users = [
    { id: 1, name: "Satyajay", email: 'satyajaydibya9@gmail.com' },
    { id: 2, name: "Satya", email: 'satya@gmail.com' },
    { id: 3, name: "jay", email: 'jay@gmail.com' },
    { id: 4, name: "aashish", email: 'aashish@gmail.com' },
    { id: 5, name: "Abhisek", email: 'Abhisek@gmail.com' },
    { id: 6, name: "Ravi", email: 'Ravi@gmail.com' }
  ];

  return (
    <div>
      <Router>
        <h1>Dynamic (custom) Routing with Params</h1>
        {users.map((item) => (
          <div key={item.id}>
            <Link to={`/user/${item.id}/${item.name}/${item.email}`}>
              <h3>{item.name}</h3>
            </Link>
          </div>
        ))}
        <Routes>
          <Route path="/user/:id/:name/:email" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
