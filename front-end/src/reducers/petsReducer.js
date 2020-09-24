// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     pets: petsReducer
// })

// export default rootReducer; 

const petsReducer = ( state = { pets: [], loading: false, api_token: {}, breeds: [] }, action ) => {
   
    switch(action.type) {
     
        case 'ADD_BREEDS': 
       
         const sanitizedBreeds = action.breeds.map( e => e.name )
            return {
                ...state, 
                breeds: sanitizedBreeds
            }
        case 'ADD_API_TOKEN':
            
            return {
                ...state, 
                api_token: { 
                    token: action.responseJSON.access_token,
                    tokenType: action.responseJSON.token_type, 
                    expires: new Date().getTime() + (action.responseJSON.expires_in * 1000)
                }
            }

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
                loading: false, 
                pagination: action.pets.pagination
            }
        default: 
            return state 
    }
}

export default petsReducer