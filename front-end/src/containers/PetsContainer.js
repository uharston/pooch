import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/petsAction';



class PetsContainer extends Component {



    componentDidMount() {
        let path = this.props.location.pathname.split('/')
        let param = Object.assign( {}, {city: path[path.length - 1], state: path[path.length - 2] } )
        this.props.fetchPets( param )
    }

    renderPhoto = (pet) => {
        return pet.primary_photo_cropped ? <img src={pet.primary_photo_cropped.small} /> : <p> NO PHOTO FOUND </p>
    }

    renderPagination = (pagination) => {
        return pagination ? <h3>{this.props.pagination.current_page} of {this.props.pagination.total_pages}</h3> : null 
    }

    render() {
        console.log(this.props)
        return(
            <div className='search-container'>
                <h1>Search</h1>
                { this.renderPagination(this.props.pagination) }
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