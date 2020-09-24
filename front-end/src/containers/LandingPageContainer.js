import React, { Component } from 'react'; 

import { connect } from 'react-redux'; 
import { fetchBreeds } from '../actions/petsAction';

import LandingPageLogo from '../components/LandingPageLogo'
import LandingPageSearchBar from '../components/LandingPageSearchBar'


class LandingPageContainer extends Component {

    componentDidMount() {
        this.props.fetchBreeds()
    }

    render() {
        return(
            <div className='landing-page-container'>
                <LandingPageLogo /> 
                <LandingPageSearchBar breeds={this.props.breeds} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        breeds: state.breeds 
    }
}

export default connect(mapStateToProps, { fetchBreeds }) (LandingPageContainer)