import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PetsPagination extends Component {

    handleClick = () => {
        const newPath = this.props.location.pathname + '/&page=' + this.props.pagination._links.next.href.split('=').slice(-1)[0]
        this.props.history.push(newPath)
        // this.props.fetchPets(`https://api.petfinder.com${this.props.pagination._links.next.href}`)
    }

    componentDidUpdate() {
        console.log("pagination update")
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