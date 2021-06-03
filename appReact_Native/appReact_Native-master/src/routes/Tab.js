import React from 'react'
import { createBottomTabNavigator } from '@react-navigation//bottom-tabs'
import Home from '../Views/Home'
import Login from '../Views/Login'
import Lista from '../Views/Lista'

const routeTab = createBottomTabNavigator()

const Tab = () => {
    return (
        <routeTab.Navigator initialRouteName="Home
        " tabBaroptions={{
            activeTintColor: 'red',
            //inactiveTintColor: 'blue',
            labelStyle: {fontSize: 30}
            }}>
            <routeTab.Screen name="Início" component={Home}/>
            <routeTab.Screen name="Abrir livro" component={Login}/>
            <routeTab.Screen name="Receitas" component={Lista}/>
        </routeTab.Navigator>
    )
}

export default Tab;