import React from 'react' 
import { GoogleLogout } from 'react-google-login';

function LogoutBtn() {
    const onSuccess = () => {
        alert('Logout successful')
    }

    return(
        <div className='logout-btn'>
            {/* <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            /> */}
        </div>
    )
}

export default LogoutBtn; 