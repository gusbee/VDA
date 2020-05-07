import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

/**
 * PROPS
 * text (string)
 */

export default function TextAndLine(props){
    return(
        <View style={style.container}>
            <View style={style.line}></View>
            <Text style={props.uppercase ? style.textUpper : style.text}>{props.text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        height: 26,
        position: 'relative',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    text:{
        backgroundColor: '#000', 
        color:'#FFF', 
        paddingRight: 10,
        position: 'absolute',
        fontFamily: 'Gilroy-Light',
        fontSize: 17,
    },
    textUpper:{
        backgroundColor: '#000', 
        color:'#FFF', 
        paddingRight: 25,
        position: 'absolute',
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    line:{
        backgroundColor: '#F2D314', 
        height:2
    }
})