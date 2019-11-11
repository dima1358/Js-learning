import React from 'react'
import s from './Dialogs.module.css'
import DialogsUser from "./DialogsUser/DialogsUser"
import DialogsMessage from "./DialogsMessages/DialogsMessage"
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";

const maxLength50 = maxLength(50)

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field placeholder='Введите текст сообщения...' name={'messageBody'} component={Textarea} validate={[required, maxLength50]}/>
			<button className='btn'>Send</button>
		</form>
	)
}

const ReduxAddMessageForm = reduxForm({form: 'AddMessageForm'})(AddMessageForm)

const Dialogs = (props) => {

    let usersArr = props.dialogsPage.usersDialogs.map(user => {
        return <DialogsUser userObj={user}/>
    })
    let messagesArr = props.dialogsPage.messagesDialogs.map(message => {
        return <DialogsMessage messageObj={message}/>
    })

	return (
		<div className={s.dialogs__wrap}>
			<h2 className='pageTitle'>Dialogs</h2>
			<div className={s.dialogs__content}>
				<ul className={s.dialogs__list}>
                    {usersArr}
				</ul>
				<div className={s.dialogs__messages}>
					<ul className={s.dialogs__messagesList}>
						{messagesArr}
					</ul>
					<div className={s.dialogs__input}>
						<ReduxAddMessageForm onSubmit={props.onAddMessage}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs