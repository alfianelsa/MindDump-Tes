import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Create from '../pages/Create';
import Form from '../pages/Form'

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})