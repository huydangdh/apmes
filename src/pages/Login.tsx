import { Component, ReactNode, useState } from 'react'
import LoginForm from '../compoments/LoginForm'

export default class Login extends Component {
    constructor(props: any) {
        super(props)
    }

    render(): ReactNode {
        return (
            <LoginForm></LoginForm>
        )
    }
}
