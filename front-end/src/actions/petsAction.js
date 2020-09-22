export const fetchPets = (arg) => {
    //we need to figure out how to call this PetFinder API. 
    //what information do I need? where will I store it?
    // 1. Client ID and Secret 
    // 2. query - in other words location, breed, and other filter information 
    //plug all that information into a variable called 'url' 
    return (dispatch) => {
        // does this dispatch just need a type? 
        dispatch({ type: 'LOADING_PETS' })
        debugger

        fetch("https://api.petfinder.com/v2/oauth2/token", {
            body: "grant_type=client_credentials&client_id=70TgEtMrkn14Jh5jt2TjSW2VCMDoVLwXPWF7VxfXMhFQ2SfJus&client_secret=L8OzS0UL8pwnrYwFtuDiADZ4sBSr3HOlIK5SkjK3",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"})
            .then(response => response.json() )
            .then(responseJSON => fetch(`https://api.petfinder.com/v2/animals?type=dog&location=87123`, {
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


