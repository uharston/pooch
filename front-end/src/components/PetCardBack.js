import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { postFavoritePet } from '../actions/favoritesAction'
import {Card,  Button } from 'react-bootstrap'; 


class PetCardBack extends Component {

    handleSaveClick = () => {
        if(this.props.user.logged_in) {
            debugger
            this.props.postFavoritePet(this.props.pet)
        }
        else {
            alert("Please Log In First")
        }
    }

    render() {
        return(
            <Card className="bg-dark text-white">
                <Card.Body className='text-left'>
                        <Card.Title> About {this.props.pet.name}</Card.Title>
                        <Card.Subtitle>Description</Card.Subtitle>
                            <Card.Text>
                                <div>{this.props.pet.description ? this.props.pet.description : <span className='text-muted'>(No description)</span>}</div>
                                {this.props.pet.attributes.spayed_neutered ? 'Spayed/Neuterd' : null}
                                {this.props.pet.attributes.house_trained ? "House Trained" : null }
                            </Card.Text>
                            <Card.Text>
                                <h6>Contact Information</h6>
                                <div><strong>Email: </strong>{this.props.pet.contact.email}</div>
                                <strong>Phone: </strong>{this.props.pet.contact.phone}
                            </Card.Text>
                            <Card.Text>
                                <div><h5>Address</h5></div>
                                <div>{this.props.pet.contact.address.address1}</div>
                                <div>{this.props.pet.contact.address.city}, {this.props.pet.contact.address.state} {this.props.pet.contact.address.postcode}</div>



                            </Card.Text>
                            <Button variant="danger" onClick={ () => this.handleSaveClick() }>Save</Button>
                            <Button variant="primary" onClick={ () => this.props.handleFlip() }>Back</Button>
                            <Card.Text>
                                <small className='text-muted'>Last Updated: {this.props.pet.status_changed_at}</small>
                            </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user 
    }
}

export default connect(mapStateToProps, { postFavoritePet }) (PetCardBack) 