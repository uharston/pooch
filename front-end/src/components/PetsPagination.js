import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PetsPagination extends Component {

    handleClick = () => {
        const currentPage = this.props.pagination.current_page 
        const splitUrl = this.props.match.url.split('=')
        splitUrl.splice(-1, 1, currentPage + 1)
        this.props.history.push(splitUrl.join('='))
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

export default withRouter(PetsPagination)