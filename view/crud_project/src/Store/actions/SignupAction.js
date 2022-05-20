import axios from 'axios';
import actionTypes from '../constants/index'

const SignUpAction = (userObj) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CREATE_USER_LOADING,
        })
        
        if(userObj){
            axios
            .post('http://localhost:5000/api/signup',userObj)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
        } else{
            alert('Fill the Empty Fields')
        }
    }
}

export default SignUpAction