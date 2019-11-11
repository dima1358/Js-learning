import React from 'react'
import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    postsDataBase: [
        {
            id: 1,
            avaSrc: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/21/10/avatar-neytiri.jpg',
            likesCount: '2',
            textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque illo vitae officia laboriosam inventore eligendi doloribus architecto saepe. Iusto numquam placeat necessitatibus. Qui doloribus eos libero porro illum, veritatis placeat!'
        },
        {
            id: 2,
            avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpN0lRPTr4wi0FzTNQOdndPuUjEMpqD0jehYcWYDYAXSp1IU65',
            likesCount: '11',
            textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    ],
    userData: null,
    statusText: ''
}

it('new element should be added', () => {
    // 1
    let action = addPost('testing')

    //2
    let newState = profileReducer(state, action)

    //3
    expect(newState.postsDataBase.length).toBe(3)
});

it('new element should be "testing"', () => {
    // 1
    let action = addPost('testing')

    //2
    let newState = profileReducer(state, action)

    //3
    expect(newState.postsDataBase[2].textMessage).toBe('testing')
});

it('length should be decrement', () => {
    // 1
    let action = deletePost(1)

    //2
    let newState = profileReducer(state, action)

    //3
    expect(newState.postsDataBase.length).toBe(1)
});