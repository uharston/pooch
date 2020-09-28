import React, { Component } from 'react'; 
import {Container, Row, Card, Col, Button } from 'react-bootstrap'; 

class Pets extends Component {

    renderPhoto = (pet) => {
        return pet.primary_photo_cropped ? <Card.Img variant="top" src={pet.primary_photo_cropped.small} /> : <p> NO PHOTO FOUND </p>
    }

    renderBody = (pet) => {
        return (
            <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                    <Card.Text>
                        {pet.age} {pet.breeds.mixed ? pet.breeds.primary + ' Mix' : pet.breeds.primary }
                    </Card.Text>
                    <Button variant="primary">More Info...</Button>
            </Card.Body>

        )
    }

    render() {
        console.log(this.props.pets)
        return(
            <div className='pets'>
                <Container>
                    <Row xs={1} md={3} lg={3} >
                    { this.props.pets.map( pet => 
                            <Col >
                                <Card>
                                    {this.renderPhoto(pet)}
                                    {this.renderBody(pet)}
                                </Card>
                            </Col>)}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Pets
