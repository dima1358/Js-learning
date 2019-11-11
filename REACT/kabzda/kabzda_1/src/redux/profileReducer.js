import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postsDataBase: [
        {
            avaSrc: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/21/10/avatar-neytiri.jpg',
            likesCount: '2',
            textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque illo vitae officia laboriosam inventore eligendi doloribus architecto saepe. Iusto numquam placeat necessitatibus. Qui doloribus eos libero porro illum, veritatis placeat!'
        },
        {
            avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpN0lRPTr4wi0FzTNQOdndPuUjEMpqD0jehYcWYDYAXSp1IU65',
            likesCount: '11',
            textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    ],
    userData: null,
    statusText: ''
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST': {
            let newPost = {
                avaSrc: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/21/10/avatar-neytiri.jpg',
                likesCount: 0,
                textMessage: action.postText
            };
            return {
                ...state,
                postsDataBase: [...state.postsDataBase, newPost]
            }
        }
        case 'SET_USER_DATA': {
            return {
                ...state,
                userData: action.userData
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                statusText: action.statusText
            }
        }
        case 'DELETE_POST': {
            return {
                ...state,
                postsDataBase: state.postsDataBase.filter(p => p.id === action.postId)
            }
        }
        default:
            return state
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText})
export const setUserData = (userData) => ({type: SET_USER_DATA, userData})
export const setStatus = (statusText) => ({type: SET_STATUS, statusText})
export const deletePost = (postId) => ({type: 'DELETE_POST', postId})

export const setUser = (userId) => {
    return (dispatch) => {
        usersAPI.setUser(userId).then(data => {
            dispatch(setUserData(data))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(statusText => {
            dispatch(setStatus(statusText))
        })
    }
}

export const updateStatus = (statusText) => {
    return (dispatch) => {
        profileAPI.updateStatus(statusText).then(resultCode => {
            if (resultCode === 0) {
                dispatch(setStatus(statusText))
                console.log((statusText))
            }
        })
    }
}

export default profileReducer

