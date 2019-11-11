import React, {Component} from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.js'
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/appReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initializeSuccess) {
            return <Preloader/>
        }
        return (
            <div>
                <HeaderContainer/>
                <div className='wrap'>
                    <Sidebar/>
                    <div className='content__wrap'>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        )
    }
}

let MapStateToProps = state => ({
    initializeSuccess: state.app.initializeSuccess
})

export default compose(
    withRouter,
    connect(MapStateToProps, {initializeApp}))(App)
