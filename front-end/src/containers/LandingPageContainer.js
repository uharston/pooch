import React, { Component } from 'react'; 
import LandingPageLogo from '../components/LandingPageLogo'
import LandingPageSearchBar from '../components/LandingPageSearchBar'


class LandingPageContainer extends Component {

    render() {
        return(
            <div className='landing-page-container'>
                <LandingPageLogo /> 
                <LandingPageSearchBar />
            </div>
        )
    }
}

export default LandingPageContainer