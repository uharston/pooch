import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../logo-black.svg';
import LoginBtn from './LoginBtn'
import LogoutBtn from './LogoutBtn'


class NavBar extends Component {
    render() {
        return(
            <div className='navbar'>
                {/* <img style={{width: '20px'}} src={logo} /> */}
                {/* <NavLink to='/'>Home</NavLink>
                <NavLink to='#'>Log In</NavLink> */}
                <LoginBtn /> 
                <LogoutBtn />
            </div>
        )
    }
}

export default NavBar