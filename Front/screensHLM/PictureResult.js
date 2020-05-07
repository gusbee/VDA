import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function PictureResult({navigation}){
    return (
        <View>
            <Button 
                title="Go To Reward"
                onPress={() => navigation.navigate('Reward')}
            />
            <Button 
                title="Go To Next Step"
                onPress={() => navigation.navigate('Missions')}
            />
        </View>
    )
}