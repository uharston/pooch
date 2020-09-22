
export const fetchPets = function(param) {
  
    return function(dispatch)  {
        
        dispatch({ type: 'LOADING_PETS' })
        
        fetch("https://api.petfinder.com/v2/oauth2/token", {
            body: "grant_type=client_credentials&client_id=70TgEtMrkn14Jh5jt2TjSW2VCMDoVLwXPWF7VxfXMhFQ2SfJus&client_secret=L8OzS0UL8pwnrYwFtuDiADZ4sBSr3HOlIK5SkjK3",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"})
            .then(response => response.json() )
            .then(responseJSON => fetch(`https://api.petfinder.com/v2/animals?location=${param.city},%20${param.state}&type=dog`, {
                headers: { 
                    Authorization: `Bearer ${responseJSON.access_token}`}
                })
                .then(response => response.json())
                .then(responseJSON => {
                    console.log(responseJSON)
                    dispatch({ 
                        type: 'ADD_PETS', 
                        //this response will update state in the store and be available to SearchContainer for displaying 
                        pets: responseJSON
                    })
                })
            )
        }
    }


