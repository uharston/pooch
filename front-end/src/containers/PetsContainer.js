import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/petsAction';

import PetsPagination from '../components/PetsPagination'



class PetsContainer extends Component {



    componentDidMount() {
        let path = this.props.location.pathname.split('/')
        console.log('mount', path)
        if( path.slice(-1)[0].includes('page') ) {
            let params = Object.assign( {}, {city: path[path.length - 2], state: path[path.length - 3], page: path[path.length - 1]} )
            let url = `https://api.petfinder.com/v2/animals?location=${params.city},%20${params.state}&type=dog/${params.page}`
            this.props.fetchPets( url )
        }
        else {
            let params = Object.assign( {}, {city: path[path.length - 1], state: path[path.length - 2] } )
            let url = `https://api.petfinder.com/v2/animals?location=${params.city},%20${params.state}&type=dog`
            this.props.fetchPets( url )
        }
        
    }

    componentDidUpdate() {
        // if(!!this.props.pets[0]){
        //     let path = this.props.location.pathname.split('/')
        //     console.log('update', path)
        //     debugger
        //     let cityAndState = Object.assign( {}, {city: path[path.length - 1], state: path[path.length - 2] } )
        //     let param = `https://api.petfinder.com/v2/animals?location=${cityAndState.city},%20${cityAndState.state}&type=dog`
        // }
        // this.props.fetchPets( param )
    }

    renderPhoto = (pet) => {
        return pet.primary_photo_cropped ? <img src={pet.primary_photo_cropped.small} /> : <p> NO PHOTO FOUND </p>
    }

    // renderPagination = (pagination) => {
    //     return pagination ? <h3>{this.props.pagination.current_page} of {this.props.pagination.total_pages}</h3> : null 
    // }

    render() {
        // console.log(this.props)
        return(
            <div className='search-container'>
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

const mapDispatchToProps = dispatch => {
    // return {
    //     fetchPets: 
    // }
}

export default connect (mapStateToProps, { fetchPets } ) (PetsContainer)