export const fetchPets = (arg) => {
    
    return (dispatch) => {
        
        dispatch({ type: 'LOADING_PETS' })
        fetch("url")
            .then(response => response.json())
            .then(responseJSON => {
                dispatch({ 
                    type: 'ADD_PETS', 
                    pets: responseJSON
                })
            })
    }
}