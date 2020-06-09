import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function Splash(props) {
    return (
        <View style={style.container}>
            <Image
                source={require('../images/start/Splash.png')}
                style={style.image}
                onLoad={props.onLoad}
            />
        </View>
    ) 
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width:239,
        height: 309,
    }
})