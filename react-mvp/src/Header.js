import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaHome, FaClipboardList } from 'react-icons/fa';


const Header = () => {
  return (
    <div className='header'>
      <div className='brand'>
        <span className='b1'>Chore</span><span className='b2'>Bank</span>
      </div>
      <div className='nav-bar'>
        <Link id='nav-link' to='./create'>Create</Link>
        <Link id='nav-link' to='./plan'><FaClipboardList /></Link>
        <Link id='nav-link' to='./home'><FaHome /></Link>
        <Link id='nav-link' to='./settings'><FaCog /></Link>
      </div>
    </div>
  )
}

export const Home = () => {
    return(
    <div className='home-container'>
        <h1>HOME PAGE</h1>
    </div>
    )
}


export default Header
