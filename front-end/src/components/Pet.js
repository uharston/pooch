import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import {Card, Col, Button } from 'react-bootstrap'; 


class Pet extends Component {

    renderPhoto = (pet) => {
        return pet.primary_photo_cropped ? <Card.Img variant="top" className='card-img' src={pet.primary_photo_cropped.small} /> : <p> NO PHOTO FOUND </p>
    }

    renderBody = (pet) => {
        return (
            <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                    <Card.Text>
                        {pet.age} {pet.breeds.mixed ? pet.breeds.primary + ' Mix' : pet.breeds.primary }
                    </Card.Text>
                    <Button variant="danger" onClick={ () => this.handleSaveClick() }>Save</Button>
                    <Button variant="primary" onClick={ () => this.handleMoreInfoClick() }>More Info...</Button>
            </Card.Body>

        )
    }

    // handleSaveClick = () => {

    //     if(this.props.user) {

    //     }
    //     else {
    //         alert("Please Log In First")
    //     }
    // }

    render() {
        return(
            <div className='pet'>
                <Col >
                    <Card>
                        {this.renderPhoto(this.props.pet)}
                        {this.renderBody(this.props.pet)}
                    </Card>
                </Col>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         user: state.user 
//     }
// }

// export default connect(mapStateToProps) (Pet) 