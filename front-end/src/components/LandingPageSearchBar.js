import React from 'react'; 

const LandingPageSearchBar = () => {
    return(
        <div className="landing-page-search-bar">
            <form>
                <label>Enter location: </label>
                <input type='text' />
                <input type='submit' value='Go'/>
            </form>
        </div>
    )
}

export default LandingPageSearchBar