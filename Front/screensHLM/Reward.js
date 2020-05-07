import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function Reward({navigation}){
    return (
        <View>
            <Button 
                title="Back to Missions"
                onPress={() => navigation.navigate('Missions')}
            />
        </View>
    )
}