import React from 'react'
import * as axios from 'axios'

const instatnce = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '7236727a-e9e6-4d55-96de-1665e55e0122'}
})

export const usersAPI = {
    getUsers(pageSize = 5, currentPage = 1) {
        return instatnce.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return instatnce.post('follow/' + userId).then(response => response.data)
    },
    unfollowUser(userId) {
        return instatnce.delete('follow/' + userId).then(response => response.data)
    },
    setUser(userId) {
        console.log("Obsolete object!")
        return profileAPI.setUser(userId)
    }
}

export const profileAPI = {
    setUser(userId) {
        return instatnce.get('profile/' + userId).then(response => response.data)
    },
    getStatus(userId) {
        return instatnce.get('profile/status/' + userId).then(response => response.data)
    },
    updateStatus(statusText) {
        return instatnce.put('profile/status/', {status: statusText}).then(response => response.data.resultCode)
    }
}

export const authAPI = {
    checkAuth() {
        return instatnce.get('auth/me').then(response => response.data)
    },
    login(login, password, rememberMe) {
        return instatnce.post('auth/login', {email: login, password: password, rememberMe: rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instatnce.delete('auth/login').then(response => response.data)
    }
}

