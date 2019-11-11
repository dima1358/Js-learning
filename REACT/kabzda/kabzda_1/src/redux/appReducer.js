import {checkAuth} from "./authReducer";

const SET_INITIALIZE = 'SET_INITIALIZE'

let initialState = {
    initializeSuccess: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIALIZE': {
            return {
                ...state,
                initializeSuccess: true
            }
        }
        default:
            return state
    }
}

export const setInitialize = () => ({type: SET_INITIALIZE})

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(checkAuth())
        promise.then(() => dispatch(setInitialize()))
    }
}

export default appReducer

