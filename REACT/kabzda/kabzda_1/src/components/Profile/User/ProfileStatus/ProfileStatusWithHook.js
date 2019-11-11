import React from 'react'
import {useState, useEffect} from 'react'
import s from "../User.module.css";

const ProfileStatusWithHook = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [statusText, setStatusText] = useState(props.statusText)

    let activateEdit = () => {
        setEditMode(true)
    }
    let deactivateEdit = () => {
        setEditMode(false)
        props.updateStatus(statusText)
    }
    let onChangeStatus = (e) => {
        setStatusText(e.target.value)
    }

    useEffect(() => {
        setStatusText(props.statusText)
    }, [props.statusText])

    return (
        <div className={s.status__wrap}>
            {!editMode && <p onDoubleClick={activateEdit}>{props.statusText || '-----'}</p>}
            {editMode &&
            <input autoFocus={true} onChange={onChangeStatus} onBlur={deactivateEdit} type="text"
                   value={statusText}/>}
        </div>
    )
}

export default ProfileStatusWithHook