import React from "react"
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<a href="#">
				<img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="logo"/>
			</a>
			<ul className={s.menu__list}>
				<li>
					<a href="#">Point 1</a>
				</li>
				<li>
					<a href="#">Point 2</a>
				</li>
				<li>
					<a href="#">Point 3</a>
				</li>
				<li>
					<a href="#">Point 4</a>
				</li>
			</ul>
			<div className={s.login__status}>
				{props.isAuth === true ? <div>{props.login}</div> : <NavLink to={'/login'}>login</NavLink>}
				{props.isAuth === true ? <button onClick={props.LogoutTC} className='btn'>Выйти</button> : ""}
			</div>
		</header>
	)
}

export default Header