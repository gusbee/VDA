import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

export default function Rewards(props){
    return (
        <View style={style.container}>
            <View style={{ flex: 1 }}>
                <Text>Tes récompenses</Text>
                <Text>Bien méritées !</Text>
                <Text>Disponibles</Text>
                <Text>Déjà utilisées</Text>
                <Text>Tes récompenses</Text>
                <Text>Bien méritées !</Text>
                <Text>Disponibles</Text>
                <Text>Déjà utilisées</Text>
            </View>
            <View style={{ flex: 2 }}>
                <Text>Tes récompenses</Text>
                <Text>Bien méritées !</Text>
                <Text>Disponibles</Text>
                <Text>Déjà utilisées</Text>
                <Text>Tes récompenses</Text>
                <Text>Bien méritées !</Text>
                <Text>Disponibles</Text>
                <Text>Déjà utilisées</Text>
            </View>
        </View>
        
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellowgreen"
    }
})