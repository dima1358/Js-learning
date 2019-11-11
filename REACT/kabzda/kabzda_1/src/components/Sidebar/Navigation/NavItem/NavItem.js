import React from 'react'
import s from './NavItem.module.css'
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className={s.sidebar__item}>
            <NavLink to={props.itemObj.path} activeClassName={s.active}>{props.itemObj.name}</NavLink>
        </li>
    )
}

export default NavItem