import React, { Component } from 'react'
import {
    View, Text, TouchableOpacity, TextInput,
} from 'react-native'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        console.log(this.props)
        return (
            <View>
                <Text>
username
                </Text>
                <TextInput
                    autoCapitalize="none"
                    secureTextEntry={false}
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                    underlineColorAndroid="transparent"
                    placeholder="username"
                />
                <Text>
password
                </Text>
                <TextInput
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry
                    underlineColorAndroid="transparent"
                    placeholder="password"
                />
                <TouchableOpacity onPress={() => console.log(this.state)}>
                    <View>
                        <Text>
Submit
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <View>
                        <Text>
Register
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LoginForm
