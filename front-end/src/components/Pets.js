import React, { Component } from 'react'; 
import {Container, Row, Col } from 'react-bootstrap'; 
import PetCard from './PetCard'

class Pets extends Component {

    render() {
        return(
            <div className='pets'>
                <Container>
                    <Row xs={1} md={3} lg={3} > 
                        { this.props.pets.map( pet => 
                            <Col>
                                <PetCard pet={pet} />
                            </Col> 
                        ) }
                    </Row>
                </Container>   
            </div>
        )
    }
}

export default Pets
