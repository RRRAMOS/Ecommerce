import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Views/Home'
import Login from '../Views/Login'
import Lista from '../Views/Lista'

const routerDrawer = createDrawerNavigator()


const Drawer = () => {
    return (
        <routerDrawer.Navigator initialRouteName="Home">
            <routerDrawer.Screen name="Home" componente={Home}/>
            <routerDrawer.Screen name="Login" componente={Login}/>
            <routerDrawer.Screen name="Lista" componente={Lista}/>
        </routerDrawer.Navigator>
    )
}

export default Drawer