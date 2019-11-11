import React from 'react'
import s from './DialogsUser.module.css'
import {NavLink} from "react-router-dom"

const DialogsUser = (props) => {
	return (
		<li className={s.dialogs__item}>
			<NavLink activeClassName={s.active} to={'/dialogs/' + props.userObj.id}>{props.userObj.name}</NavLink>
		</li>
	)
}

export default DialogsUser