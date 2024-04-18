
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const basename = "./Pages";


  return (
    <div className='w-screen flex justify-center gap-5'>
      <Link to={`/Home`}><li>Home</li></Link> 
      <Link to={`/About`}><li>About</li></Link> 
      <Link to={`/Contact`}><li>Contact</li></Link> 
    </div>
  );
};

export default NavBar;
