import React, { Component } from 'react'
import { Text } from 'react-native'

import Container from '../components/container/container'
import LoginForm from '../components/LoginForm/LoginForm'

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log('hello world')
        return (
            <Container>
                <LoginForm />
            </Container>
        )
    }
}

export default LoginScreen
