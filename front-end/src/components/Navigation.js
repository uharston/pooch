import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux'; 

import { NavLink } from 'react-router-dom';
import logo from '../logo-black.svg';
import LoginBtn from './LoginBtn'
import LogoutBtn from './LogoutBtn'


class Navigation extends Component {
    
    render() {
        return(
            <div className='navigation'>
                <Navbar bg='light' variant='dark' expand='lg' >
                    <NavLink to='/'><img class="navigation-logo" src={logo} alt='pooch logo' /></NavLink>
                    <NavLink to='#'>Favorites</NavLink>
                    { this.props.user.logged_in ? <LogoutBtn/> : <LoginBtn/> }
                </Navbar> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps) (Navigation)