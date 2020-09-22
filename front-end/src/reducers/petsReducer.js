const petsReducer = ( state = { pets: [], loading: false}, action ) => {
   
    switch(action.type) {
        case 'LOADING_PETS': 
            return { 
                ...state, 
                pets: [ ...state.pets ], 
                loading: true
            }
        case 'ADD_PETS': 
            return {
                ...state, 
                pets: action.pets.animals, 
                loading: false
            }
        default: 
            return state 
    }
}

export default petsReducer