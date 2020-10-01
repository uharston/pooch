import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/petsAction';
import PetsPagination from '../components/PetsPagination';
import Pets from '../components/Pets';



class PetsContainer extends Component {

    state = {
        
    }

    componentDidMount() {
        let breed 
        this.props.match.params.breed === 'all-dogs' ? breed = '' : breed = this.props.match.params.breed 
        let url = `https://api.petfinder.com/v2/animals?location=${this.props.match.params.city},%20${this.props.match.params.state}&type=dog${this.props.match.params.page}&breed=${breed}`
        console.log('a')
        this.props.fetchPets( url )
        console.log('b')
    }

    handleClick = () => {
        console.log(this.props)
        console.log(this.props.pets.filter( pet => pet.attributes.spayed_neutered === true ))
    }

    render() {
        return(
            <div className='search-container'>
                <button onClick={ () => this.handleClick() } >House-Trained </button>
                <Pets pets={ this.props.pets } />
                <PetsPagination pagination={this.props.pagination} fetchPets={this.props.fetchPets} /> 
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