import  axios  from 'axios'; 

export const postFavoritePet = (response) => {
    return (dispatch, state) => {
        axios.post('http://localhost:4000/user', {pet: response, user: state().user}, {withCredentials: true})
            .then(response => {
                dispatch({type: "ADD_FAVORITE_PET", response})
            })
    }
}


