import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id, name, email } = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {id}</p>
      <p>User Name: {name}</p>
      <p>User Email: {email}</p>
    </div>
  );
};

export default User;
