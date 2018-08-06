import React, { Component } from 'react'
import { View } from 'react-native'

import Mainnav from './src/navigation'

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Mainnav />
            </View>
        )
    }
}
