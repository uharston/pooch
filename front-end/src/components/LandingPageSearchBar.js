import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'; 


class LandingPageSearchBar extends Component {

    state = {
        query: ''
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        // fetch pets dispatch here 
        event.preventDefault();
        this.props.history.push(`search/${this.state.query}`)

    }

    render() {
     
        return(
            <div className="landing-page-search-bar">
                <p> Search by: </p> 
                <button>Breed</button>
                <button>Location</button>
                <form onSubmit={ (event) => this.handleSubmit(event) }>
                    <label>Enter location: </label>
                    <input type='text' onChange={ (e) => this.handleChange(e) } />
                    <input type='submit' value='Go'/>
                </form>
            </div>
        )
    }
}

export default withRouter(LandingPageSearchBar)