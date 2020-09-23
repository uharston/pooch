import React, { Component } from 'react';

class PetsPagination extends Component {

    renderPagination = (pagination) => {
        return pagination ? <h3>{this.props.pagination.current_page} of {this.props.pagination.total_pages}</h3> : null 
    }

    render() {
        return(
            <div className='pets-pagination'>
                { this.renderPagination(this.props.pagination) }
            </div>
        )
    }
}

export default PetsPagination