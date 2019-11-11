import React from 'react'
import NavItem from "./NavItem/NavItem";

const Navigation = (props) => {

	let navItemsArr = props.navDataBase.map(item => <NavItem itemObj={item}/>)

	return (
		<ul>
			{navItemsArr}
		</ul>
	)
}

export default Navigation