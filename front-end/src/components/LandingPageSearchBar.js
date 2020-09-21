import React, { Component } from 'react'; 

class LandingPageSearchBar extends Component {

    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return(
            <div className="landing-page-search-bar">
                <form>
                    <label>Enter location: </label>
                    <input type='text' onChange={ (e) => this.handleChange(e) }/>
                    <input type='submit' value='Go'/>
                </form>
            </div>
        )
    }
}

export default LandingPageSearchBar