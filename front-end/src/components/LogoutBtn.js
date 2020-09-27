import React from 'react' 
import { GoogleLogout } from 'react-google-login';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

function LogoutBtn() {
    const onSuccess = () => {
        alert('Logout successful')
    }

    return(
        <div className='logout-btn'>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default LogoutBtn; 