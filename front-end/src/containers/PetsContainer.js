import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/petsAction';

import PetsPagination from '../components/PetsPagination'



class PetsContainer extends Component {

    componentDidMount() {
        let breed 
        this.props.match.params.breed === 'all-dogs' ? breed = '' : breed = this.props.match.params.breed 
        let url = `https://api.petfinder.com/v2/animals?location=${this.props.match.params.city},%20${this.props.match.params.state}&type=dog${this.props.match.params.page}&breed=${breed}`
        this.props.fetchPets( url )
    }

    renderPhoto = (pet) => {
        return pet.primary_photo_cropped ? <img src={pet.primary_photo_cropped.small} /> : <p> NO PHOTO FOUND </p>
    }

    // renderPagination = (pagination) => {
    //     return pagination ? <h3>{this.props.pagination.current_page} of {this.props.pagination.total_pages}</h3> : null 
    // }

    render() {
        return(
            <div className='search-container'>
                {/* <Route path={`${this.props.match.url}/:state/:city`} render{ routerProps => } */}
                <h1>Search</h1>
                <PetsPagination pagination={this.props.pagination} fetchPets={this.props.fetchPets} /> 
                {/* { this.renderPagination(this.props.pagination) } */}
                <ul>
                    { this.props.pets.map( pet => <li>{pet.name} {this.renderPhoto(pet)}</li> ) }
                </ul>
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