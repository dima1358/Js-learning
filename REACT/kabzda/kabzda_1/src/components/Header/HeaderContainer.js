import React from 'react'
import Header from './Header'
import {connect} from "react-redux";
import {checkAuth, LogoutTC} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.checkAuth()
	}

	render() {
		return <Header {...this.props}/>
	}
}

let MapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(MapStateToProps, {checkAuth, LogoutTC})(HeaderContainer)