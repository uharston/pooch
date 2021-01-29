import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'; 
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

    handleSubmit = (event) => {
        event.preventDefault();
    
        const place = event.target.getElementsByClassName(' css-uv499-singleValue')[0].textContent
        const [breed, state, city] = this.sanitizeRouteParams(place) 
        let route = `${breed}/${state}/${city}`
        this.props.history.push(`search/${route}/&page=1`)
    }

    sanitizeRouteParams = (place) => {
        //BREED
        let breed
        this.state.breed === 'Any Breed' ? breed = 'all-dogs' : breed = this.state.breed
        const sanitizedBreed = breed.split(' ').map( word => word.toLowerCase().trim() ).join('-')
        //CITY AND STATE
        let [city, state] = place.split(', ' ).slice(-3)
        const sanitizedCity = city.split(' ').map( word => word.toLowerCase().trim() ).join('-')
        const sanitizedState = state.toLowerCase().trim() 
        return [sanitizedBreed, sanitizedState, sanitizedCity, ]
    }

    render() {
        return(
            <div className="landing-page-search-bar">

                <Form inline className='justify-content-center' onSubmit={ (event) => this.handleSubmit(event) }>
                    <FormControl  type='text' list='breeds' placeholder="Enter A Breed" className='dropdown' onChange={ (e) => this.handleBreedChange(e) } />
                    <datalist id='breeds'>
                        <option value="Any Breed"/>
                        {this.props.breeds.map( (breed, k) => <option key={k} value={breed} /> )}
                    </datalist>
                    <GooglePlacesAutocomplete 
                        apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY} 
                        autocompletionRequest={{
                            componentRestrictions: {
                                country: ['us', 'ca']
                            }
                        }}
                        selectProps={{
                            placeholder: "Enter Location....",
                            styles: {
                                input: (provided) => ({
                                  ...provided,
                                  color: 'black',
                                  width: 200
                                }),
                                option: (provided) => ({
                                  ...provided,
                                  color: 'black',
                                }),
                                singleValue: (provided) => ({
                                  ...provided,
                                  color: 'black',
                                  width: 200
                                }),
                              },
                        }}
                        
                    />
                    <Button type="submit">Go</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(LandingPageSearchBar)