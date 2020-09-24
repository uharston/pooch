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
        event.preventDefault();
        let [city, state] = this.state.query.split(',')
        let cityAndState = `${ state.toLowerCase().trim() }/${ city.toLowerCase().trim() }`
        this.props.history.push(`search/${cityAndState}/&page=1`)
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