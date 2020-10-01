import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/petsAction';
import PetsPagination from '../components/PetsPagination';
import Pets from '../components/Pets';



class PetsContainer extends Component {

    state = {
        houseTrained: false 
    }

    componentDidMount() {
        let breed 
        this.props.match.params.breed === 'all-dogs' ? breed = '' : breed = this.props.match.params.breed 
        let url = `https://api.petfinder.com/v2/animals?location=${this.props.match.params.city},%20${this.props.match.params.state}&type=dog${this.props.match.params.page}&breed=${breed}`
        this.props.fetchPets( url )
    }

    handleClick = () => {
        this.setState( prevState => ({
            houseTrained: !prevState.houseTrained 
        }))

    }

    filterProps = () => {
        return this.state.houseTrained ? this.props.pets.filter( pet => pet.attributes.spayed_neutered === true ) : this.props.pets
    }

    render() {
        return(
            <div className='search-container'>
                <button onClick={ () => this.handleClick() } >House-Trained </button>
                <Pets pets={ this.filterProps() } />
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