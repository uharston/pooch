import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { GoogleLogout } from 'react-google-login';
import { fetchLogout } from '../actions/loginAction';


class LogoutBtn extends Component {
    onSuccess = (response) => {
        this.props.fetchLogout()
        alert('Logout successful')
    }

    render() {
        return(
            <div className='logout-btn'>
                <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Logout"
                    onLogoutSuccess={this.onSuccess}
                />
            </div>
        )
    }
}

export default connect(null, { fetchLogout }) (LogoutBtn); 