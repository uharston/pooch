import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'; 
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'


class LandingPageSearchBar extends Component {

    state = {
        breed: '',
        location: ''
    }

    handleBreedChange = (event) => {
        this.setState({
            breed: event.target.value 
        })
    }

    handleLocationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    handleGoogleAutocomplete = (event) => {
        debugger
    }



    handleSubmit = (event) => {
        event.preventDefault();
        const place = event.target.getElementsByClassName('css-1uccc91-singleValue')[0].textContent
        let [city, state] = place.split(', ' ).slice(-3)
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
                    <label>Breed:</label>
                    <input type="text" onChange={ (e) => this.handleBreedChange(e)} /> 



                    <GooglePlacesAutocomplete 
                        apiKey="AIzaSyAogTqS8y_uMthvPq5C16K8RRLqLKqG5sE" 
                        autocompletionRequest={{
                            componentRestrictions: {
                                country: ['us', 'ca']
                            }
                        }}  
                    />




                    {/* <label>Enter location: </label>
                    <input type='text' onChange={ (e) => this.handleLocationChange(e) } /> */}
                    <input type='submit' value='Go'/>
                </form>
            </div>
        )
    }
}

export default withRouter(LandingPageSearchBar)