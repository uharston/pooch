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
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
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
        breeds: state.breeds, 
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchBreeds } ) (LandingPageContainer)