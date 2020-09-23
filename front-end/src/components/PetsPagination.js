import React, { Component } from 'react';

class PetsPagination extends Component {

    handleClick = () => {
        this.props.fetchPets(`https://api.petfinder.com${this.props.pagination._links.next.href}`)
    }

    render = () => {
        if(this.props.pagination) {
            
            return (
                <div className='pets-pagination'>
                    <h3>{this.props.pagination.current_page} of {this.props.pagination.total_pages}</h3>
                    <button onClick={() => this.handleClick()}>Next Page</button>
                </div>
            )
        }
        return null    
    }

}

export default PetsPagination