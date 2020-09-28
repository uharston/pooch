import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class PetsPagination extends Component {

    handleClick = (page) => {
        const newPage = this.findPage(page)
        const splitUrl = this.props.match.url.split('=')
        splitUrl.splice(-1, 1, newPage)
        this.props.history.push(splitUrl.join('='))
        let breed 
        this.props.match.params.breed === 'all-dogs' ? breed = '' : breed = this.props.match.params.breed 
        let url = `https://api.petfinder.com/v2/animals?breed=${breed}&location=${this.props.match.params.city},%20${this.props.match.params.state}${splitUrl.join('=').split('/').slice(-1)[0]}&type=dog`
        this.props.fetchPets(url)
    }

    findPage = (page) => {
        let currentPage
        switch(page) {
            case 'next':
                currentPage = this.props.pagination.current_page 
                return currentPage + 1 
            case 'previous': 
                currentPage = this.props.pagination.current_page 
                return currentPage - 1 
            case 'first': 
                return 1 
            case 'last': 
                return this.props.pagination.total_pages
        }
    }

    render = () => {
        if(this.props.pagination) {
            return (
                <div className='pets-pagination'>
                    <Pagination>
                        <Pagination.First onClick={() => this.handleClick('first')}/>
                        <Pagination.Prev onClick={() => this.handleClick('previous')}/>
                        <Pagination.Item active >{this.props.pagination.current_page}</Pagination.Item>
                        <Pagination.Next onClick={() => this.handleClick('next')} />
                        <Pagination.Last onClick={() => this.handleClick('last')} />
                    </Pagination>



                    <h3>{this.props.pagination.current_page} of {this.props.pagination.total_pages}</h3>
                    <button onClick={() => this.handleClick()}>Next Page</button>
                </div>
            )
        }
        return null    
    }

}

export default withRouter(PetsPagination)