import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
// Auth Screens
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
// Main navigationScreens
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'

const AuthRoutes = createStackNavigator(
    {
        Login: LoginScreen,
        Register: RegisterScreen,
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
            gesturesEnabled: false,
        },
        initialRouteName: 'Login',
    },
)

const AppRoutes = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
})

const user = true

const MainNav = () => {
    if (!user) {
        return <AuthRoutes />
    }
    return <AppRoutes />
}

export default MainNav
