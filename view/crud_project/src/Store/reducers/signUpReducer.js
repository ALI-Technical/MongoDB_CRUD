import actionTypes from '../constants/index'

const INITIAL_STATE = {
    createUser: {},
    createUserLoading: false,
    createUserError: "",
}

const signUpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CREATE_USER_LOADING:
            return {
                ...state,
                createUserLoading: true
            }
        case actionTypes.CREATE_USER:
            return {
                ...state,
                createUser: action.payload,
                createUserLoading: false,
                createUserError: "",
            }

        case actionTypes.CREATE_USER_ERROR:
            return {
                ...state,
                createUserError: action.payload,
                createUserLoading: false,
                createUser: {},
            }
        default:
            return {...state}
    }
}

export default signUpReducer
