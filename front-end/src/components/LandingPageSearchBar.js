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

    // handleLocationChange = (event) => {
    //     this.setState({
    //         location: event.target.value
    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        const place = event.target.getElementsByClassName('css-1uccc91-singleValue')[0].textContent
        const [breed, state, city] = this.sanitizeRouteParams(place) 
        let route = `${breed}/${state}/${city}`
        this.props.history.push(`search/${route}/&page=1`)
    }

    sanitizeRouteParams = (place) => {
        let breed
        this.state.breed === 'Any Breed' ? breed = 'all-dogs' : breed = this.state.breed
        const sanitizedBreed = breed.split(' ').map( word => word.toLowerCase().trim() ).join('-')
        let [city, state] = place.split(', ' ).slice(-3)
        const sanitizedCity = city.split(' ').map( word => word.toLowerCase().trim() ).join('-')
        const sanitizedState = state.toLowerCase().trim() 
        return [sanitizedBreed, sanitizedState, sanitizedCity, ]
    }

    render() {
        console.log(this.props.breeds)
        return(
            <div className="landing-page-search-bar">

                <form onSubmit={ (event) => this.handleSubmit(event) }>
                    {/* <label>Breed:</label>
                    <input type="text" onChange={ (e) => this.handleBreedChange(e) } />  */}
                    <input type='text' list='breeds' onChange={ (e) => this.handleBreedChange(e) }/>
                    <datalist id='breeds'>
                        <option value="Any Breed"/>
                        {this.props.breeds.map( breed => <option value={breed} /> )}
                    </datalist>

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