import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/petsAction';
import PetsPagination from '../components/PetsPagination';
import Pets from '../components/Pets';
import { Button } from 'react-bootstrap';




class PetsContainer extends Component {

    state = {
        houseTrained: false, 
        puppy: false, 
        gender: false
    }

    componentDidMount() {
        let breed 
        this.props.match.params.breed === 'all-dogs' ? breed = '' : breed = this.props.match.params.breed 
        let url = `https://api.petfinder.com/v2/animals?location=${this.props.match.params.city},%20${this.props.match.params.state}&type=dog${this.props.match.params.page}&breed=${breed}`
        this.props.fetchPets( url )
    }

    handleClick = (e) => {
        let key = e.target.value 
        this.setState( prevState => ({
            [key]: !prevState[key]
        }))
    }


    filterProps = () => {
        let filtered 
        filtered = (this.state.houseTrained ? this.props.pets.filter( pet => pet.attributes.spayed_neutered === true ) : this.props.pets)
        return this.state.puppy ? filtered.filter( pet => pet.age === ('Young' || 'Baby') ) : filtered
    }

    render() {
        return(
            <div className='search-container'>
                <PetsPagination  pagination={this.props.pagination} fetchPets={this.props.fetchPets} handleButtonClick={this.handleClick}/> 

                {/* <Button value='houseTrained' onClick={ (e) => this.handleClick(e) } > House-Trained </Button>
                <Button value='puppy' onClick={ (e) => this.handleClick(e) } > Puppy </Button> */}

                <Pets pets={ this.filterProps() } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pets: state.pets,
        loading: state.loading, 
        pagination: state.pagination
    }
}

export default connect (mapStateToProps, { fetchPets } ) (PetsContainer)