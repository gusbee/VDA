import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import config from '../configMap'
import markers from '../data/markers'

export default function MapVDA({navigation}){
    return (
        <View style={{flex:1}}>
                <MapView 
                    style={{flex:1}}
                    provider={PROVIDER_GOOGLE}
                    customMapStyle={config}
                    initialRegion={{
                        latitude: 44.864144,
                        longitude: -0.549275,
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001
                    }}
                >
                    <Marker 
                        coordinate={{
                            latitude: 44.864356,
                            longitude: -0.549605
                        }}
                        title="Les Vivres de l'Art"
                        description="Les Vivres de l'Art"
                        image={require('../images/icons/pin.png')}
                    />
                    {markers.map((marker, index) => (
                        <Marker 
                            key={index}
                            coordinate={marker.coordinates}
                            title={marker.title}
                            image={marker.marker}
                            onPress={() => navigation.navigate('Element', {data: marker})}
                        />
                    ))}
                </MapView> 
            </View>
    )
}