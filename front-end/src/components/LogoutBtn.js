import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { Image, NavDropdown } from 'react-bootstrap';

import { GoogleLogout } from 'react-google-login';
import { fetchLogout } from '../actions/loginAction';


class LogoutBtn extends Component {
    onSuccess = (response) => {
        this.props.fetchLogout()
        alert('Logout successful')
    }

    render() {
        
        return(
            <span className='logout-btn'>
                <NavDropdown id='nav-dropdown' title={<Image className='profile-img' src={this.props.user.image_url} roundedCircle />}>
                        <NavDropdown.Item href='/user/favorites'>Favorites</NavDropdown.Item>
                        <NavDropdown.Item >
                        <GoogleLogout
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Logout"
                            onLogoutSuccess={this.onSuccess}
                            className="dropdown-item"
                            tag='a'
                            type='a'
                            icon={false}
                            disabledStyle={{}}
                            // disabledStyle='true'
                        />
                        </NavDropdown.Item>
                </NavDropdown>
            </span>
        )
    }
}

export default connect(null, { fetchLogout }) (LogoutBtn); 