import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import dogLogo from '../dog_logo.png'
import { postFavoritePet } from '../actions/favoritesAction'
import {Card,  Button, Carousel } from 'react-bootstrap'; 
import * as Icon from 'react-bootstrap-icons';


class PetCardFront extends Component {

    state = {
        liked: false
    }

    renderPhoto = (pet) => {
        return pet ? <Card.Img variant="top" className='card-img' src={pet} /> : <Card.Img variant="top" className='card-img' src={dogLogo} />
    }

    handleSaveClick = () => {
        if(this.props.user.logged_in) {
            this.setState( prevState => ({
                liked: !prevState.liked
            }))
            // this.props.dispatch({type: })
            this.props.postFavoritePet(this.props.pet)
        }
        else {
            alert("Please Log In First")
        }
    }

    renderCarousel = () => {
        if (!this.props.pet.primary_photo_cropped) {
            return  <Carousel.Item>
                        <Card.Img variant="top" className='card-img' src={dogLogo} />
                        <button class='like-btn' onClick={ () => this.handleSaveClick() } >{this.state.liked ? <Icon.HeartFill/> : <Icon.Heart /> }</button>
                    </Carousel.Item>
        }
        else {
            return this.props.pet.photos.map( photo =>
                <Carousel.Item>
                    <Card.Img variant="top" className='card-img' src={photo.medium} /> 
                    <button class='like-btn' onClick={ () => this.handleSaveClick() } >{this.state.liked ? <Icon.HeartFill/> : <Icon.Heart /> }</button>
                </Carousel.Item>
            )
        }
            
    }
    
    render() {
        
        return(
            <Card>
                <Carousel onSelect={this.handleSelect} interval={null} indicators={this.props.pet.photos.length > 1 ? true : false } controls={this.props.pet.photos.length > 1 ? true : false }>
                    {this.renderCarousel()}
                </Carousel>
                <Card.Body>
                    <Card.Title>{this.props.pet.name}</Card.Title>
                        <Card.Text>
                            {this.props.pet.age} {this.props.pet.breeds.mixed ? this.props.pet.breeds.primary + ' Mix' : this.props.pet.breeds.primary }
                        </Card.Text>
                        {/* <Button variant="danger" onClick={ () => this.handleSaveClick() }>Save</Button> */}
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

export default connect(mapStateToProps, { postFavoritePet } ) (PetCardFront) 