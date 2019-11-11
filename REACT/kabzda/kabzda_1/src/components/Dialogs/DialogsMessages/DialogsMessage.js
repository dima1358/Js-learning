import React from 'react'
import s from './DialogsMessage.module.css'
import {NavLink} from "react-router-dom"

const DialogsMessage = (props) => {
    return (
        <li className={s.dialogs__message + " " + props.messageObj.className}>
            <div className={s.user}>
                <img src={props.messageObj.avaSrc} alt="avatar" className={s.avatar}/>
                <span className={s.name}>{props.messageObj.name}</span>
            </div>
            <div className={s.message}>
                <p>{props.messageObj.textMessage}</p>
            </div>
        </li>
    )
}

export default DialogsMessage