import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <li className={s.post__item}>
            <div className={s.post__itemLeft}>
                <img src={props.postObj.avaSrc} alt="avatar"/>
                <span>{'likes ' + props.postObj.likesCount}</span>
            </div>
            <div className={s.post__itemRight}>
                <p>{props.postObj.textMessage}</p>
            </div>
        </li>
    )
}

export default Post