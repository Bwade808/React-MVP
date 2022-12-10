import React, { useState } from 'react';
import { Link, useInRouterContext } from 'react-router-dom';
import { FaCog, FaHome, FaClipboardList } from 'react-icons/fa';
import EditModal from './EditModal';


const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userRecords, setUserRecords] = useState({
        test: 1234,
        test2: 5678,
        brandon808: 123456,
    })
    const [userPwd, setUserPwd] = useState({
        user: '',
        pwd: '',
    });
  return (
    <div className='outer-header'>
        <div className='header'>
            <div className='brand'>
                <span className='b1'>Chore</span><span className='b2'>Bank</span>
            </div>
            <div className='nav-bar'>
                <Link id='nav-link' to='./home'>Home</Link>
                <Link id='nav-link' to='./create'>Create</Link>
                <Link id='nav-link' to='./plan'>View</Link>
                <Link id='nav-link' to='./settings'><FaCog /></Link>
            </div>
        </div>
        {/* {!loggedIn && <LoggedOut userPwd={userPwd} setUserPwd={setUserPwd} 
        loggedIn={loggedIn} setLoggedIn={setLoggedIn} userRecords={userRecords}/>}
        {loggedIn && <LoggedIn loggedIn={loggedIn} 
            setLoggedIn={setLoggedIn} userPwd={userPwd}/>} */}
    </div>
    
  )
}

export const Home = () => {
    return(
    <div className='home-container'>
        <div className='in-home'>
            <h1>Welcome to ChoreBank<p id='desktop'>(Desktop version)</p></h1>
            <p>This app was designed for your go-getter child(or children) with a desire
                to earn money.  Whether it be to buy the hottest new game out or to stash
                it all in the piggy bank like I did as a kid, the ability to earn money 
                is an awesome way to give your child what they want while also keeping your 
                floors clean!  
            </p><br />
            <p>ChoreBank provides you and your child with an opportunity to map out a chore plan
                with designated dollar amounts for each chore assigned.  You can assign chores on 
                a daily, weekly, or monthly basis.  This teaches your child work ethic and the 
                value of money, and also teaches them accountability...in a fun way.  
                Click <Link id='home-nav-link' to='/create'>Create </Link> to get started! 
            </p>
        </div>
    </div>
    )
}




export default Header
