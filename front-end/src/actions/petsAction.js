import  axios  from 'axios'; 

export const fetchBreeds = () => {
    return (dispatch) => {
        fetch("http://127.0.0.1:4000/breeds")
        .then(response => response.json())
        .then(breeds => dispatch({ type: 'ADD_BREEDS', breeds}))
    }
}

export const fetchPets = function(param) {

    return function(dispatch)  {
        
        dispatch({ type: 'LOADING_PETS' })
        axios.post("http://127.0.0.1:4000/pets", {url: param}, {withCredentials: true} )
            .then( petResponse => {
                
                console.log(petResponse)
                dispatch({ type: 'ADD_PETS', pets: petResponse.data.petfinder_response })
            })
}
}




