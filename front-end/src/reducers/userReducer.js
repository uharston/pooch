const userReducer = ( state = { user: { name: '', email: '', image_url: '', logged_in: false, favorite_ids: [], favorite_pets: [] } }, action ) => {
    
    switch(action.type) {

        case "RETRIEVE_FAVORITES":     
            let updatedFavoriteList = state.user.favorite_pets
            updatedFavoriteList.push({...action.pets.animal, liked: true })
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
     
       
        case 'LOADING_PETS': 
            return { 
                ...state, 
                // pets: [ ...state.pets ], 
                loading: true
            }

        default: 
            return state 
    }
}

export default userReducer