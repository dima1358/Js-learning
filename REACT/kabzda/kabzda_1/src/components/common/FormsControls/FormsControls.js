import React from 'react'
import s from './FormsControls.module.css'

const FormControl = (props) => {
    let validError = props.meta.error && props.meta.touched
    return (
        <div className={s.formControl + ' ' + (validError ? s.error : '')}>
            {props.children}
            {validError && <span>{props.meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}