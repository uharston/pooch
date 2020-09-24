import React, { Component } from 'react'; 

import { connect } from 'react-redux'; 

import LandingPageLogo from '../components/LandingPageLogo'
import LandingPageSearchBar from '../components/LandingPageSearchBar'


class LandingPageContainer extends Component {

    handleClick = () => {
        fetch("https://api.petfinder.com/v2/types/dog/breeds", {
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MFRnRXRNcmtuMTRKaDVqdDJUalNXMlZDTURvVkx3WFBXRjdWeGZYTWhGUTJTZkp1cyIsImp0aSI6IjJmZDAzNGU3MDVlZmM2NjA4MGIyNjliYzI4ZThiNjYzYWVkMjZjYWQyZWZkYTFlNjVjZWI3Y2I1ZDY2YTk4M2E4OWY5NmZiMGFkZTYzYjMyIiwiaWF0IjoxNjAwOTY4Njk2LCJuYmYiOjE2MDA5Njg2OTYsImV4cCI6MTYwMDk3MjI5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.i2pd5hbGfW18VcFXtwwPMUVhD7_8dtnH-aphAqeW644ibLvQ-zQxI1xyAAaC-r-i0RNIuyxkqWFiHhrRML227NPFoBa4SVeXr8F6M4Ck65W4YxHAyz_bb_kYj06P_OYpV5otjniMdXWoEcIKoOLVNwHrzkLQvHYQqTQJccGBwHOq1kUr9Fhgu-awcyimlysjp-VluVfsyemlHK-bZVXSIZA9opabtIsk_pMRncGh_XfaISs0-u6UazeDCgY0f2OibeLtCMBd8YYyo5TlFY4QnQc6AHqtOBVZ_JkbAro70N9Xqw6ZRyg-rU8Aknvp2OwdK5BOTsVQTNP_0AH1piTc4Q"
            }
        })
        .then( response => response.json() )
        .then ( responseJSON => console.log(responseJSON.breeds.map( breed => breed.name )))
    }


    render() {
        return(
            <div className='landing-page-container'>
                <button onClick={() => this.handleClick()}>Fetch Name</button>
                <LandingPageLogo /> 
                <LandingPageSearchBar />
            </div>
        )
    }
}

export default connect() (LandingPageContainer)