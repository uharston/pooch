import React, { Component } from 'react'; 
import { Redirect } from 'react-router-dom'; 

class LandingPageSearchBar extends Component {

    state = {
        query: '',
        submitted: false
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true 
        })
    }

    redirect = (query) => {
        if(this.state.submitted) {
            return <Redirect to={"/search/" + query} />
        }
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
                
                { this.redirect(this.state.query) }
            </div>
        )
    }
}

export default LandingPageSearchBar