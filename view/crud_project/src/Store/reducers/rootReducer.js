import { combineReducers } from "redux";

import signUpReducer from './signUpReducer'
import LoginReducer from './LoginReducer'


const rootReducer = combineReducers({
    signUpReducer,
    LoginReducer,
})

export default rootReducer;