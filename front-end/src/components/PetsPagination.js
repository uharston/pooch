import React, { Component } from 'react';
import { Pagination, Button, DropdownButton, Dropdown, Container, Row, Col } from 'react-bootstrap';
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
            default: 
                return null 
        }
    }

    render = () => {
        if(this.props.pagination) {
            return (
                <span className='pets-pagination'>
                    <Container>
                        <Row>
                            <Col>
                                <DropdownButton id="dropdown-item-button" title="Filter Results" >
                                    <Dropdown.Item as='button' onClick={ (e) => this.props.handleButtonClick(e) } value='houseTrained' >
                                        House Trained
                                    </Dropdown.Item>
                                    <Dropdown.Item as='button' onClick={ (e) => this.props.handleButtonClick(e) } value='puppy' >
                                        Puppy
                                    </Dropdown.Item>
                                </DropdownButton>
                                
                            </Col>
                            <Col>
                            </Col>
                            <Col className='text-right' md={{ span: 3, offset: 6}} >
                                <Pagination >
                                    <Pagination.First onClick={() => this.handleClick('first')}/>
                                    { this.props.pagination.current_page !== 1 ? <Pagination.Prev onClick={() => this.handleClick('previous')}/> : null }
                                    <Pagination.Item active >{this.props.pagination.current_page}</Pagination.Item>
                                    {this.props.pagination.current_page === this.props.pagination.total_pages - 1 || this.props.pagination.current_page === this.props.pagination.total_pages ? null : <Pagination.Next onClick={() => this.handleClick('next')} />}
                                    {this.props.pagination.current_page === this.props.pagination.total_pages ? <Pagination.Last disabled onClick={() => this.handleClick('last')} /> : <Pagination.Last onClick={() => this.handleClick('last')} />}

                                </Pagination>
                            </Col>
                        </Row>
                    </Container>
                   
                        

               
                </span>
            )
        }
        return null    
    }

}

export default withRouter(PetsPagination)