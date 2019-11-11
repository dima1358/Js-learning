import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let MapStateToProps = state => {
    return {
        auth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component) => {
    class withRedirectContainer extends React.Component {
        render() {
            if (!this.props.auth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
    let connectWithRedirectContainer = connect(MapStateToProps)(withRedirectContainer)
    return connectWithRedirectContainer
}

export default withAuthRedirect