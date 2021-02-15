import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,

} from '../types';
import axios from 'axios'

export default (state, action) => {
    switch(action.type) {
        case USER_LOADED:
            return {
                ...state,
                idsAuthenticated: true,
                loading: false,
                user: action.payload.user_id
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            const setUpdatePreference = async () => {
                const res = await axios.get(`/home/updatepreference`);
                console.log("User preference updating", res)
            }
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
                intervalFunction: setInterval(setUpdatePreference, 30000)
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user : null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}