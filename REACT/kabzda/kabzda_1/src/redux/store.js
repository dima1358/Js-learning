import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        sidebar: {
            navDataBase: [
                {path: '/profile', name: 'Profile'},
                {path: '/dialogs', name: 'Messages'},
                {path: '/news', name: 'News'},
                {path: '/music', name: 'Music'},
                {path: '/settings', name: 'Settings'}
            ],
            friendsUsers: [
                {avaSrc: "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg", name: "Valera"},
                {avaSrc: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/44/1540913834-sigourneyweaveravatar.jpg?resize=480:*", name: "Andrew"},
                {avaSrc: "https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg", name: "Roman"}
            ]
        },
        profilePage: {
            userDataBase: [
                {
                    avaSrc: 'https://www.washingtonpost.com/resizer/kPkFQsQjvSIjfXG-mFXDEpxq6-4=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg',
                    userName: 'Dmitriy K',
                    birthday: '8 November',
                    city: 'Kiev',
                    education: 'NTU `14',
                    webSite: 'test.com'
                }
            ],
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
            newPostsText: ''
        },
        dialogsPage: {
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
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    callSubcriber() {
        console.log("State changed")
    },
    subscribe(observer) {
        this.callSubcriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this.callSubcriber(this._state)
    }
}

export default store