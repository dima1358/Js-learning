import React from 'react'
import s from './Users.module.css'
import defaultAvatar from '../../assets/images/user.png'
import {NavLink} from "react-router-dom"

const Users = (props) => {
    let countPages = Math.ceil(props.totalCount / props.pageSize)
    let paginationArr = []

    for (let i = 1; i <= countPages; i++) {
        paginationArr.push(i)
    }
    return (
        <div className={s.users__wrap}>
            <h2 className="pageTitle">Users</h2>
            <ul className={s.users__pagination}>
                {
                    paginationArr.map(p => {
                        return <li onClick={() => props.onPageChanged(p)}
                                   className={props.currentPage === p ? s.active : undefined}>{p}</li>
                    })
                }
            </ul>
            <ul className={s.users__list}>
                {
                    props.usersData.map(user => <li className={s.user__item} key={user.id}>
                        <div className={s.user__avatar}>
                            <NavLink to={'profile/' + user.id}>
                                <img src={user.photos.small === null ? defaultAvatar : user.photos.small} alt="avatar"/>
                            </NavLink>
                            {
                                user.followed ? <button disabled={props.followingProgressStatus.some(userId => userId === user.id)} onClick={() => {props.unfollowUser(user.id)}} className='btn'>Unfollow</button> :
                                    <button disabled={props.followingProgressStatus.some(userId => userId === user.id)} onClick={() => {props.followUser(user.id)}} className='btn'>Follow</button>
                            }
                        </div>
                        <div className={s.user__info}>
                            <div className={s.user__name}>
                                <span className={s.name}>{user.name}</span>
                                <span
                                    className={s.status}>{user.status === null ? "Default status text" : user.status}</span>
                            </div>
                            <div className={s.user__address}>
                                <span className={s.country}>user.country</span>
                                <span className={s.city}>user.city</span>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )

}

export default Users