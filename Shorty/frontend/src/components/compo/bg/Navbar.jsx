import React from 'react'
import './navabr.css'
import { useNavigate } from 'react-router-dom';
function Navbar() {

const navigate = useNavigate();

const  handlenavigation = ()=> {
    navigate('/');
}

  return (
   <nav className='nav' onClick={handlenavigation}>
    Logout
   </nav>
  )
}

export default Navbar;
