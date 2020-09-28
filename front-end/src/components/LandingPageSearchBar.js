import React, { Component } from 'react';
import Select from 'react-select'
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
        debugger
        const place = event.target.getElementsByClassName(' css-tt72xr-singleValue')[0].textContent
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

                <Form inline onSubmit={ (event) => this.handleSubmit(event) }>
                    <FormControl  type='text' list='breeds' placeholder="Enter A Breed" onChange={ (e) => this.handleBreedChange(e) } />
                    <datalist id='breeds'>
                        <option value="Any Breed"/>
                        {this.props.breeds.map( breed => <option value={breed} /> )}
                    </datalist>
                    <GooglePlacesAutocomplete 
                        apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY} 
                        autocompletionRequest={{
                            componentRestrictions: {
                                country: ['us', 'ca']
                            }
                        }}
                        selectProps={{
                            styles: {
                                className: (provided) => ({
                                    ...provided,
                                    class: 'form-control'
                                }),
                                input: (provided) => ({
                                  ...provided,
                                  color: 'black',
                                }),
                                option: (provided) => ({
                                  ...provided,
                                  color: 'blue',
                                }),
                                singleValue: (provided) => ({
                                  ...provided,
                                  color: 'blue',
                                }),
                              },
                        }}
                        
                    />
                    <Button type="submit">Go</Button>
                </Form>

                {/* <form onSubmit={ (event) => this.handleSubmit(event) }>
                   
                    <input type='text' list='breeds' onChange={ (e) => this.handleBreedChange(e) }/>
                    <datalist id='breeds'>
                        <option value="Any Breed"/>
                        {this.props.breeds.map( breed => <option value={breed} /> )}
                    </datalist>

                    <GooglePlacesAutocomplete 
                        apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY} 
                        autocompletionRequest={{
                            componentRestrictions: {
                                country: ['us', 'ca']
                            }
                        }}  
                    />


                    {/* <label>Enter location: </label>
                    <input type='text' onChange={ (e) => this.handleLocationChange(e) } /> */}
                    {/* <input type='submit' value='Go'/>
                </form> */} 
            </div>
        )
    }
}

export default withRouter(LandingPageSearchBar)