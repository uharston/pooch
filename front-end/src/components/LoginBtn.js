import React from 'react' 
import { GoogleLogin } from 'react-google-login';
import { axios } from 'axios'; 
// import { refreshTokenSetup } from '../utils/refreshToken'; 
const clientId = '948600984023-pdgk9pe9roiei64t8flvdam435sfiss9.apps.googleusercontent.com';

function LoginBtn() {
    const onSuccess = (response) => {
        
        console.log('[Login Success] currentUser:', response );
        //send username: email, password: googleId as a post request to rails api 
        //axios withCredentials 
        //find or create user
        //on front end use reponse to set store data for that user
        //set Session? I forgot how to implement that
        // refreshTokenSetup(response)
    }

    const onFailure = (response) => {
        console.log('[Login Failure] response:', response)
    }

    return(
        <div className='login-btn'>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    )
}

export default LoginBtn; 