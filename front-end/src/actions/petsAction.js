export const fetchBreeds = () => {
    return (dispatch) => {
        fetch("http://127.0.0.1:4000/breeds")
        .then(response => response.json())
        .then(breeds => dispatch({ type: 'ADD_BREEDS', breeds}))
    }
}

export const fetchPets = function(param) {

    return function(dispatch, getState)  {
        
        dispatch({ type: 'LOADING_PETS' })

        if( !getState().api_token.token || getState().api_token.expires - new Date().getTime() < 1 ) {
            debugger
            fetch("https://api.petfinder.com/v2/oauth2/token", {
                //abstract client secret and ID 
                body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_PETFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_PETFINDER_CLIENT_SECRET}`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST"})
                .then(response => response.json() )
                .then(responseJSON => dispatch({ type: 'ADD_API_TOKEN', responseJSON }) )
                .then(token => {
                    // console.log( token )
                    
                    fetch(param, {
                        headers: { 
                            Authorization: `Bearer ${token.responseJSON.access_token}`}
                        })
                        .then(response => response.json())
                        .then(responseJSON => {
                            // console.log(responseJSON)
                            dispatch({ 
                                type: 'ADD_PETS', 
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




