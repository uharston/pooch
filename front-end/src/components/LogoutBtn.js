import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { Image, Dropdown } from 'react-bootstrap';

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
                <Dropdown>
                    <Dropdown.Toggle>
                        <Image className='profile-img' src={this.props.user.image_url} roundedCircle />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href='#'>Favorites</Dropdown.Item>
                        <Dropdown.Item >
                        <GoogleLogout
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Logout"
                            onLogoutSuccess={this.onSuccess}
                        />
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </span>
        )
    }
}

export default connect(null, { fetchLogout }) (LogoutBtn); 