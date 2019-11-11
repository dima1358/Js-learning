import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'

let initialState = {
    usersData: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingProgressStatus: []
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                usersData: action.usersArr
            }
        }
        case 'SET_TOTAL_COUNT': {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
               currentPage: action.currentPage
            }
        }
        case 'TOGGLE_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'SET_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingProgressStatus: action.progressStatus ?
                    [...state.followingProgressStatus, action.userId] :
                    state.followingProgressStatus.filter(userId => userId !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (id) => ({type: FOLLOW, userId: id})
export const unfollowSuccess = (id) => ({type: UNFOLLOW, userId: id})
export const setUsers = (users) => ({type: SET_USERS, usersArr: users})
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, totalCount: count})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching: isFetching})
export const setFollowingProgress = (progressStatus, userId) => ({type: SET_FOLLOWING_PROGRESS, progressStatus, userId})

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleFetching(true))
        usersAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(toggleFetching(false))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId))
        usersAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
                dispatch(setFollowingProgress(false, userId))
            }
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId))
        usersAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
                dispatch(setFollowingProgress(false, userId))
            }
        })
    }
}

export default usersReducer

