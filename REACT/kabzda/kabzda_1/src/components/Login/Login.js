import React from 'react'
import {Field, reduxForm} from "redux-form"
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {LoginTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = formData => {
        props.LoginTC(formData.login, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div>
            <h1 className='pageTitle'>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} type="text" placeholder={'login'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={'password'} type="password" placeholder={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'} id={'rememberMe'} type="checkbox" component='input'/>
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            {props.error && <div className='error__message'>{props.error}</div>}
            <div>
                <button className={'btn'}>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

let MapStateToProps = state => ({isAuth: state.auth.isAuth})
export default connect(MapStateToProps, {LoginTC})(Login)