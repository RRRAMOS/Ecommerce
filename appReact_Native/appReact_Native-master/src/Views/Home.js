import React from 'react'
import { View,StyleSheet, Text, Image } from 'react-native'

const Home = (props) => {
    return (
            <View style={css.container}>
                <Text style={css.titulo}> Meu Livro de Receitas</Text>
                <Image source={require('../../assets/receitamada.jpg')} 
                style={css.logo}
      />
            
            </View>
    );
};

export default Home

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center 2.2',
        alignItems: 'center',
        backgroundColor: "#Dodger",
    },
    titulo: {
        fontSize: 50,
        Color: '#fff',
        justifyContent: 'center 2.2',
        alignItems: 'center',

    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 1000,
        height: 1000,

    },
})