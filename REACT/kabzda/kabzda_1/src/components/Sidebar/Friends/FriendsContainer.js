import React from 'react'
import {connect} from "react-redux"
import Friends from "./Friends"

let MapStateToProps = state => ({friendsUsers: state.sidebar.friendsUsers})
const FriendsContainer = connect(MapStateToProps)(Friends)

export default FriendsContainer