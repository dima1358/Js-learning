import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH = 'SET_USER_AUTH'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_AUTH': {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export const setUserAuth = (userId, login, email, isAuth) => ({type: SET_USER_AUTH, payload: {userId, email, login, isAuth}})

export const checkAuth = () => {
    return (dispatch) => {
        return authAPI.checkAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setUserAuth(id, login, email, true))
            }
        })
    }
}

export const LoginTC = (login, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(login, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(checkAuth())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Unknown error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}

export const LogoutTC = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserAuth(null, null, null, false))
            }
        })
    }
}

export default authReducer

