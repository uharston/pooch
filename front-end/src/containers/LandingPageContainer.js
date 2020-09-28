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
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 text-center">
                            <LandingPageLogo /> 
                            <LandingPageSearchBar breeds={this.props.breeds} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        breeds: state.breeds 
    }
}

export default connect(mapStateToProps, { fetchBreeds } ) (LandingPageContainer)