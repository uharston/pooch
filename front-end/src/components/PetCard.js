import React, { Component } from 'react'; 
import ReactCardFlip from 'react-card-flip';
import Pet from './Pet';
import PetCardBack from './PetCardBack'

class PetCard extends Component {

    state = {
        isFlipped: false
    }

    handleFlip = () => {
        this.setState( prevState => ({
            isFlipped: !prevState.isFlipped
        }))
    }

    render() {
        return(
            <div className='pets'>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <Pet pet={this.props.pet} handleFlip={this.handleFlip} />
                    <PetCardBack pet={this.props.pet} handleFlip={this.handleFlip} />
                </ReactCardFlip>            
            </div>
        )
    }
}

export default PetCard
