import React from 'react'
import s from './FriendItem.module.css'
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {

	return (
		<li className={s.friendItem}>
			<a href="#">
				<img src={props.userObj.avaSrc} alt="avatar"/>
				<span>{props.userObj.name}</span>
			</a>
		</li>
	)
}

export default FriendItem