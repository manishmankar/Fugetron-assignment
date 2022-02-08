import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return <div className="navbar">
      <div className='leftText'>Task</div>
      <div className='rightText'><NavLink to="/">Home</NavLink></div>
  </div>;
};

export default Navbar;
