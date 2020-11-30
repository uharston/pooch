import  axios  from 'axios'; 

export const fetchLogin = (response) => {
    return (dispatch) => {
        
        axios.post('https://safe-cliffs-66235.herokuapp.com/login', response, {withCredentials: true})
        .then(response => {
            if(!response.data.error) {
               dispatch({type: "LOGIN_USER", response})
            }
            else {
               dispatch({type: "LOGIN_ERROR", response})
            }
        })
    }
}

export const fetchLogout = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT_USER", logged_in: false })
    }
}