import React from 'react'
import Profile from "./Profile"
import {connect} from "react-redux"
import {addPost, getStatus, setUser, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || this.props.authorizedUserId || this.props.history.push('/login')
		this.props.setUser(userId)
		this.props.getStatus(userId)
	}

	onAddPost = (formData) => {
		this.props.addPost(formData.postText);
	}

	render() {
		return <Profile {...this.props}
						onAddPost={this.onAddPost}
						statusText={this.props.statusText}/>
	}
}

let MapStateToProps = state => {
	return {
		userData: state.profilePage.userData,
		postsDataBase: state.profilePage.postsDataBase,
		statusText: state.profilePage.statusText,
		authorizedUserId: state.auth.userId
	}
}

export default compose(connect(MapStateToProps, {setUser, addPost, getStatus, updateStatus}), withRouter)(ProfileContainer)
