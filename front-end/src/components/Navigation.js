import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux'; 

import { NavLink } from 'react-router-dom';
import logo from '../logo-black.svg';
import LoginBtn from './LoginBtn'
import LogoutBtn from './LogoutBtn'


class Navigation extends Component {
    
    render() {
        return(
            <div className='navigation'>
                <Navbar bg='light' variant='dark' expand='lg'  className='justify-content-between' >
                    <NavLink to='/'><img className="navigation-logo" src={logo} alt='pooch logo' /></NavLink>
                    <Nav className='ml-auto'>
                        { this.props.user.logged_in ? <LogoutBtn user={this.props.user} /> : <LoginBtn/> }
                    </Nav>
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