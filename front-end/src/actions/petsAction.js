import  axios  from 'axios'; 

export const fetchBreeds = () => {
    return (dispatch) => {
        fetch("https://safe-cliffs-66235.herokuapp.com/breeds")
        .then(response => response.json())
        .then(breeds => dispatch({ type: 'ADD_BREEDS', breeds}))
    }
}

export const fetchPets = function(param) {

    return function(dispatch)  {
        
        dispatch({ type: 'LOADING_PETS' })
        axios.post("https://safe-cliffs-66235.herokuapp.com/pets", {url: param}, {withCredentials: true} )
            .then( petResponse => {
                
                console.log(petResponse)
                dispatch({ type: 'ADD_PETS', pets: petResponse.data.petfinder_response })
            })
}
}




