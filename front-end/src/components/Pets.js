import React, { Component } from 'react'; 
import {Container, Row, Card, Col, Button } from 'react-bootstrap'; 
import Pet from './Pet';

class Pets extends Component {

    render() {
        return(
            <div className='pets'>
                <Container>
                    <Row xs={1} md={3} lg={3} >   
                        { this.props.pets.map( pet => <Pet pet={pet}/> ) }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Pets
