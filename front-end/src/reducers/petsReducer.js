
const petsReducer = ( state = { pets: [], loading: false, api_token: {}, breeds: [], user: { name: '', email: '', image_url: '', logged_in: false, favorite_ids: [], favorite_pets: [] } }, action ) => {
    
    switch(action.type) {

        case "RETRIEVE_FAVORITES": 
            let updatedFavoriteList = state.user.favorite_pets
            updatedFavoriteList.push(action.pets.animal)
            return {
                ...state, 
                user: { ...state.user, 
                    favorite_pets: updatedFavoriteList
                }
            }
            
        
        case 'ADD_FAVORITE_PET':
            
            let updatedFavoriteIds = state.user.favorite_ids.push(action.response.data.pet_id)
            return {
                ...state, 
                user: { favorites: updatedFavoriteIds }
            }
        
        case 'LOGIN_USER': 
            return {
                ...state, 
                user: {
                    name: action.response.data.name,
                    email: action.response.data.email,
                    image_url: action.response.data.image_url,
                    logged_in: true,
                    favorite_ids: action.response.data.pets,
                    favorite_pets: []
                }
            }
        case 'LOGIN_ERROR': 
        
            return {
                ...state, 
                user: action.response.data 
            }
        case 'LOGOUT_USER': 
        
            return{ 
                ...state, 
                user: {logged_in: action.logged_in}
            }
     
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
                // pets: [ ...state.pets ], 
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