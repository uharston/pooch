import  axios  from 'axios'; 

export const postFavoritePet = (response) => {
    return (dispatch, state) => {
        axios.post('http://localhost:4000/user', {pet: response, user: state().user}, {withCredentials: true})
            .then(response => {
                dispatch({type: "ADD_FAVORITE_PET", response})
            })
    }
}

export const getFavoritePets = (param) => {
    return (dispatch, getState) => {
        dispatch({ type: 'LOADING_PETS' })
        debugger
        if( !getState().api_token.token || getState().api_token.expires - new Date().getTime() < 1 ) {

            fetch("https://api.petfinder.com/v2/oauth2/token", {
                body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_PETFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_PETFINDER_CLIENT_SECRET}`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST"})
                .then(response => response.json() )
                .then(responseJSON => dispatch({ type: 'ADD_API_TOKEN', responseJSON }) )
                .then(token => {
                    console.log('HERE', token )
                    
                    fetch(param, {
                        headers: { 
                            Authorization: `Bearer ${token.responseJSON.access_token}`}
                        })
                        .then(response => response.json())
                        .then(responseJSON => {
                             console.log('there', responseJSON)
                            dispatch({ 
                                type: 'RETRIEVE_FAVORITES', 
                                pets: responseJSON,
                            })
                        })
                })
                  
        }
        else {
            fetch(param, {
                headers: { 
                    Authorization: `Bearer ${getState().api_token.token}`}
                })
                .then(response => response.json())
                .then(responseJSON => {
                    // console.log(responseJSON)
                    dispatch({ 
                        type: 'ADD_PETS', 
                        pets: responseJSON
                    })
                })  
        }   
    }
}




