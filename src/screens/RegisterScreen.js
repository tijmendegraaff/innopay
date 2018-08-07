import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Container from '../components/container/container'

class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Text>
RegisterScreen
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <View>
                        <Text>
go Back
                        </Text>
                    </View>
                </TouchableOpacity>
            </Container>
        )
    }
}

export default RegisterScreen
