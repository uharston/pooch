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

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return(
            <div className="landing-page-search-bar">
                <form onSubmit={ (event) => this.handleSubmit(event) }>
                    <label>Enter location: </label>
                    <input type='text' onChange={ (e) => this.handleChange(e) } />
                    <input type='submit' value='Go'/>
                </form>
            </div>
        )
    }
}

export default LandingPageSearchBar