import React, { Component } from 'react'; 

import { connect } from 'react-redux'; 
import { GoogleLogin } from 'react-google-login';
import { fetchLogin } from '../actions/loginAction';

// import { refreshTokenSetup } from '../utils/refreshToken'; 

class LoginBtn extends Component {

    onSuccess = (response) => {
        this.props.fetchLogin(response)
        console.log('[Login Success] currentUser:', response );
    }

    onFailure = (response) => {
        console.log('[Login Failure] response:', response)
    }

    render = () => {
        return(
            <div className='login-btn'>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{marginTop: '100px'}}
                    isSignedIn={true}
                />
            </div>
        )
        }
}

export default connect( null, { fetchLogin } ) (LoginBtn); 

