import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return(
            <div className='navbar'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/search'>Search</NavLink>
                Pooch Logo Left - Sign Up Right - Log In Right
            </div>
        )
    }
}

export default NavBar