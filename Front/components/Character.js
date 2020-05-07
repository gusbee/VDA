import React from 'react'
import { StyleSheet, Image, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/**
 * PROPS
 * name (string)
 * selected (string)
 * 
 */
export default function Character(props){

    function getSource(name, selected){
        switch (name){
            case 'picasso':
                if(selected == name || selected == ''){
                    return require('../images/start/picasso.png')
                } else {
                    return require('../images/start/picasso-grey.png')
                }
                break
            case 'michel-ange':
                if(selected == name || selected == ''){
                    return require('../images/start/michel-ange.png')
                } else {
                    return require('../images/start/michel-ange-grey.png')
                }
                break
            case 'hitchcock':
                if(selected == name || selected == ''){
                    return require('../images/start/hitchcock.png')
                } else {
                    return require('../images/start/hitchcock-grey.png')
                }
                break  
            case 'beethoven':
                if(selected == name || selected == ''){
                    return require('../images/start/beethoven.png')
                } else {
                    return require('../images/start/beethoven-grey.png')
                }
                break
        }
    }

    return(
        <TouchableOpacity
            style={style.container}
            onPress={() => props.handleTeam(props.name)}
        >
            <Image 
                source={getSource(props.name, props.selected)}
                style={props.name == props.selected ? style.imageSelected : style.image}
            />
            <Text style={style.text}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        width: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        borderRadius: 13,
        opacity: .3,
    },
    imageSelected:{
        borderRadius: 13,
    },
    text:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        textTransform: 'capitalize',
        marginVertical: 4
    }
})