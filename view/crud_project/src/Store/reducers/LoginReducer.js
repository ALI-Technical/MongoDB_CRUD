import actionTypes from '../constants/index'

const INITIAL_STATE = {
    user: {},
    userLoading: false,
    userError: "",
}

const LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_LOADING:
            return {
                ...state,
                userLoading: true
            }
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                userLoading: false,
                userError: "",
            }

        case actionTypes.LOGIN_USER_ERROR:
            return {
                ...state,
                userError: action.payload,
                userLoading: false,
                user: {},
            }
        default:
            return {...state}
    }
}

export default LoginReducer
