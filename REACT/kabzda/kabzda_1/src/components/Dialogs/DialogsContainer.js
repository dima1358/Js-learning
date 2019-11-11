import React from 'react'
import {addMessage} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import {compose} from "redux";

class DialogsContainer extends React.Component {
	onAddMessage = (formData) => {
		this.props.addMessage(formData.messageBody)
	}

	render() {
		return <Dialogs dialogsPage={this.props.dialogsPage}
						onAddMessage={this.onAddMessage}/>
	}
}

let MapStateToProps = state => ({dialogsPage: state.dialogsPage})

export default compose(connect(MapStateToProps, {addMessage}), withAuthRedirect)(DialogsContainer)