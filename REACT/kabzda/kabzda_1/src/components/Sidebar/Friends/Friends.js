import React from 'react'
import s from './Friends.module.css'
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

	let friendsItemsArr = props.friendsUsers.map(user => <FriendItem userObj={user}/>)

	return (
		<div className={s.sidebar__friends}>
			<h4 className={s.title}>Friends</h4>
			<ul>
				{friendsItemsArr}
			</ul>
		</div>
	)
}

export default Friends