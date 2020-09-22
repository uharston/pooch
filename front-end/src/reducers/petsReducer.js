const petsReducer = ( state = { cats: [], loading: false}, action ) => {
   
    switch(action.type) {
        case 'LOADING_PETS': 
            return state 
        case 'ADD_PETS': 
            return state 
        default: 
            return state 
    }
}

export default petsReducer