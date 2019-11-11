import React from 'react'
import s from './Sidebar.module.css'
import NavigationContainer from "./Navigation/NavigationContainer";
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = () => {
	return (
		<div className={s.sidebar}>
			<NavigationContainer />
			<FriendsContainer />
		</div>
	)
}

export default Sidebar