const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    usersDialogs: [
        {name: 'Andrew', id: '1'},
        {name: 'Petr', id: '2'},
        {name: 'Alex', id: '3'},
        {name: 'Sasha', id: '4'},
        {name: 'Valera', id: '5'}
    ],
    messagesDialogs: [
        {
            avaSrc: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/21/10/avatar-neytiri.jpg',
            name: 'Andrew',
            textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, consequatur dicta distinctio dolor dolore doloribus enim fugit hic impedit inventore natus pariatur placeat provident quasiэб reiciendis voluptas! Id, magnam.',
            className: "fromInterlocutor"
        },
        {
            avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpN0lRPTr4wi0FzTNQOdndPuUjEMpqD0jehYcWYDYAXSp1IU65',
            name: 'Dmitriy',
            textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, magnam. Lorem ipsum dolor sit amet, consectetur',
            className: "fromUser"
        },
        {
            avaSrc: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/21/10/avatar-neytiri.jpg',
            name: 'Valera',
            textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, magnam.',
            className: "fromInterlocutor"
        }
    ]
}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage = {
                avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpN0lRPTr4wi0FzTNQOdndPuUjEMpqD0jehYcWYDYAXSp1IU65',
                name: 'Dmitriy',
                textMessage: action.messageBody,
                className: 'fromUser'
            };
            return {
                ...state,
                messagesDialogs: [...state.messagesDialogs, newMessage]
            }
        }
        default:
            return state
    }
}

export const addMessageActionCreator = (messageBody) => ({type: ADD_MESSAGE, messageBody})

export const addMessage = (messageBody) => {
    return (dispatch) => {
        dispatch(addMessageActionCreator(messageBody))
    }
}

export default dialogsReducer