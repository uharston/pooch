import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/petsAction';



class SearchContainer extends Component {



    componentDidMount() {
        
        let path = this.props.location.pathname.split('/')
        
        let param = Object.assign( {}, {city: path[path.length - 1], state: path[path.length - 2] } )
       
        this.props.fetchPets( param )
        // debugger
        // CALL DISPATCH 
        // DO FETCH CALL
    }

    render() {
        console.log(this.props)
        return(
            <div className='search-container'>
                <h1>Search</h1>
                <ul>
                    { this.props.pets.map( pet => <li>{pet.name}</li> ) }
                </ul>
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
    // return {
    //     fetchPets: 
    // }
}

export default connect (mapStateToProps, { fetchPets } ) (SearchContainer)