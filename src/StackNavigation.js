
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PlayerScreen from './PlayerScreen'
import GameScreen from './GameScreen'

const stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName='PlayerScreen' screenOptions={{ headerShown: false }}>
                <stack.Screen component={PlayerScreen} name='PlayerScreen' />
                <stack.Screen component={GameScreen} name='GameScreen' />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation