import React, { Component } from 'react'
import { Text } from 'react-native'

import Container from '../components/container/container'

class SettingsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log('hello world')
        return (
            <Container>
                <Text>
SettingsScreen
                </Text>
            </Container>
        )
    }
}

export default SettingsScreen
