

export const fetchPets = function(param) {

    return function(dispatch, getState)  {
        
        dispatch({ type: 'LOADING_PETS' })

        if( !getState().api_token.token || getState().api_token.expires - new Date().getTime() < 1 ) {

            fetch("https://api.petfinder.com/v2/oauth2/token", {
                body: "grant_type=client_credentials&client_id=70TgEtMrkn14Jh5jt2TjSW2VCMDoVLwXPWF7VxfXMhFQ2SfJus&client_secret=L8OzS0UL8pwnrYwFtuDiADZ4sBSr3HOlIK5SkjK3",
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
                            console.log(responseJSON)
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




