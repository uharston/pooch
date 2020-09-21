import React, { Component } from 'react'; 
import LandingPageSearchBar from '../components/LandingPageSearchBar'

class LandingPageContainer extends Component {

    render() {
        return(
            <div className='landing-page-container'>
                <LandingPageSearchBar />
            </div>
        )
    }
}

export default LandingPageContainer