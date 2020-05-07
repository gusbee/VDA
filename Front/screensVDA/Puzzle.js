import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import CustomButton from '../components/CustomButton'
import TextAndLine from '../components/TextAndLine'

export default function Puzzle({navigation}){
    return (
        <View style={zones.container}>

            <View style={zones.header}>
                <TextAndLine 
                    text='Charlie, un petit jeu ?'
                    uppercase={true}
                />
                <Text style={style.instructions}>Déplace les images pour découvrir l'oeuvre</Text>
            </View>

            <View style={zones.button}>
                <CustomButton 
                    title='Je valide'
                    disabled={false}
                    action={() => navigation.navigate('Result', {isValid: false})}
                />
            </View>
        </View>
    )
}

const zones = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: '7%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000000'
    },
    header:{
        width: '100%',
    },
    button:{
        width: '100%',
        alignItems: 'center',
    },
})

const style = StyleSheet.create({
    instructions:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF'
    }
})