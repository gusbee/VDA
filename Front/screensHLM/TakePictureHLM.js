import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function TakePictureHLM({navigation}){
    return (
        <View>
            <Button 
                title="Go To PictureResult"
                onPress={() => navigation.navigate('PictureResult')}
            />
        </View>
    )
}