import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { getFavoritePets } from '../actions/favoritesAction'
import Pets from '../components/Pets';


class FavoritesContainer extends Component {

    componentDidUpdate() {
        // debugger
        if(this.props.user.logged_in) {
            this.props.user.favorite_ids.map( fav => {
               return this.props.getFavoritePets(`https://api.petfinder.com/v2/animals/${fav.petfinder_id}`)
            })
        }
    }

 
    
    render() {
        debugger
        return(
            <div className='favorites-container'>
                <Pets pets={this.props.user.favorite_pets} />

                {/* {this.props.user.favorite_pets.map( pet => <p>{pet.name}</p>)} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { getFavoritePets }) (FavoritesContainer)