import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/petsAction';



class SearchContainer extends Component {

    componentDidMount() {
        let path = this.props.location.pathname.split('/')
        let param = path[ path.length - 1 ]
        this.props.fetchPets(param)
        debugger
        // CALL DISPATCH 
        // DO FETCH CALL
    }

    render() {
        
        return(
            <div className='search-container'>
                Search Container
                {this.props.location.pathname}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state 
}

export default connect (mapStateToProps, { fetchPets } ) (SearchContainer)