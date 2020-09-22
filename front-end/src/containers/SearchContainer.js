import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/petsAction';



class SearchContainer extends Component {

    componentDidMount() {
        
        let path = this.props.location.pathname.split('/')
        let param = path[ path.length - 1 ]
        this.props.fetchPets(param)
        // debugger
        // CALL DISPATCH 
        // DO FETCH CALL
    }

    render() {
        console.log(this.props)
        return(
            <div className='search-container'>
                { this.props.pets.map( pet => pet.url ) }
                {this.props.location.pathname}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pets: state.pets,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch 
}

export default connect (mapStateToProps, { fetchPets} ) (SearchContainer)