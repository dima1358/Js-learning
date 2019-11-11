let initialState = {
    navDataBase: [
        {path: '/profile', name: 'Profile'},
        {path: '/dialogs', name: 'Messages'},
        {path: '/users', name: 'Users'},
        {path: '/news', name: 'News'},
        {path: '/music', name: 'Music'},
        {path: '/settings', name: 'Settings'}
    ],
    friendsUsers: [
        {avaSrc: "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg", name: "Valera"},
        {avaSrc: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/44/1540913834-sigourneyweaveravatar.jpg?resize=480:*", name: "Andrew"},
        {avaSrc: "https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg", name: "Roman"}
    ]
}

let sidebarReducer = (state = initialState, action) => {
    return {...state}
}

export default sidebarReducer
