import  axios  from 'axios'; 

export const fetchBreeds = () => {
    return (dispatch) => {
        fetch("https://mypooch.dog/breeds")
        .then(response => response.json())
        .then(breeds => dispatch({ type: 'ADD_BREEDS', breeds}))
        .catch(error => console.log('fetchBreeds =>', error))
    }
}

export const fetchPets = function(param) {

    return function(dispatch)  {
        console.log('fetchPets')
        dispatch({ type: 'LOADING_PETS' })
        axios.post("https://mypooch.dog/pets", {url: param}, {withCredentials: true} )
            .then( petResponse => {
                
                console.log(petResponse)
                dispatch({ type: 'ADD_PETS', pets: petResponse.data.petfinder_response })
            })
            .catch(error => console.log('fetchPets =>', error))
}
}




