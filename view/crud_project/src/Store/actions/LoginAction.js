import axios from 'axios';
import actionTypes from '../constants/index'

const LoginAction = (loginObj) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.LOGIN_USER_LOADING,
        })
        
        if(loginObj){
            axios
            .post('http://localhost:5000/api/login',loginObj)
            .then(res => {
                console.log(res);
                // We'll need JWT for Login
            })
            .catch(error => {
                console.log(error);
            })
        } else{
            alert('Fill the Empty Fields')
        }
    }
}

export default LoginAction