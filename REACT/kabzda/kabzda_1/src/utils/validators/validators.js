import React from 'react'

export const required = (value) => {
    return value ? undefined : 'Field is empty'
}

export const maxLength = (maxValue) => value => {
    return value.length > maxValue ? `Max length is ${maxValue}!` : undefined
}