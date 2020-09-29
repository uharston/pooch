import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import dogLogo from '../dog_logo.png'
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
            <Card >
                <Card.Body>
                    <Card.Title>Contact Info</Card.Title>
                        <Card.Text>
                            {this.props.pet.age} {this.props.pet.breeds.mixed ? this.props.pet.breeds.primary + ' Mix' : this.props.pet.breeds.primary }
                        </Card.Text>
                        <Button variant="danger" onClick={ () => this.handleSaveClick() }>Save</Button>
                        <Button variant="primary" onClick={ () => this.props.handleFlip() }>More Info...</Button>
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