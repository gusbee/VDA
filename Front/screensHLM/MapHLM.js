import React, {useRef} from 'react'
import { StyleSheet, View, Text, Image, Dimensions, PanResponder, Animated } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import mapStyle from '../configMap'
import markers from '../data/markersHLM'
import { connect } from 'react-redux'

import CustomButton from '../components/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'


const {width, height} = Dimensions.get('window')


const mapStateToProps = (state) => {
    return {
        name: state.name,
        team: state.team
    }
}

class MapHLM extends React.Component{

    constructor(props){
        super(props)
        this.state={
            showInstructions: false,
            posY: 0,
        }
    }
    
    render(){

        const mission = this.props.route.params.mission

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gestureState) => {
                if(e.nativeEvent.pageY >= 150){
                    return false
                } else {
                    return true
                }
            },
            onStartShouldSetPanResponderCapture: () => false,
            onPanResponderGrant: (e, gestureState) => {
                if(e.nativeEvent.pageY < 150 && this.state.showInstructions){
                    this.setState({showInstructions: false})
                }
            }
        })

        return (
            <View style={{flex:1, position: 'relative'}} {...panResponder.panHandlers}>
                <MapView 
                    style={{flex:1}}
                    provider={PROVIDER_GOOGLE}
                    customMapStyle={mapStyle}
                    initialRegion={{
                        latitude: markers.mission1[0].coordinates.latitude,
                        longitude: markers.mission1[0].coordinates.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                >
                    {mission.markers.map((marker, index) => (
                            <Marker 
                                key={index}
                                coordinate={marker.coordinates}
                                title={marker.name}
                                image={marker.done ? (
                                    require('../images/icons/marker-done.png')
                                ) : (
                                    require('../images/icons/marker1.png')
                                )}
                                onPress={() => this.setState({showInstructions: true})}
                            />
                        ))}
                </MapView>
                {this.state.showInstructions ? (
                    <View style={zones.instructionsContainer}>
                        <ScrollView>
                            
                            {/* BUBBLE */}
                            <View style={zones.bubble}>
                                <Image 
                                    source={require('../images/elementsVDA/picasso-bubble.png')}
                                    style={style.bubble}    
                                />
                                <Text style={style.team}>{this.props.team}</Text>
                                <Text style={style.bold}>{this.props.name}, suis mes instructions</Text>
                                <Text style={style.light}>(Je connais la ville comme ma poche)</Text>
                            </View>

                            {/* INSTRUCTIONS */}
                            <View>
                                <View style={zones.instructions}>
                                    <View style={style.verticalLine}></View>
                                    {markers.mission1[0].instructions.map((step, index) => (
                                        <View key={index} style={style.instruction}>
                                            <Text style={style.stepNumber}>{index + 1}</Text>
                                            <Text style={style.stepText}>{step}</Text>
                                        </View>
                                    ))}
                                </View>

                                <View style={zones.button}>
                                    <CustomButton 
                                        title="J'ai trouvé"
                                        disabled={false}
                                        action={() => this.props.navigation.navigate(
                                            'PlaceChecking', 
                                            {mission: mission}
                                        )}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                ) : (
                    <></>
                )}
            </View>
        )
    }
}

export default connect(mapStateToProps)(MapHLM)

const zones = StyleSheet.create({
    instructionsContainer:{
        minHeight: height - 150,
        backgroundColor: '#000000', 
        position:'absolute', 
        top: 150, 
        width: '100%', 
        paddingVertical: 30, 
        paddingHorizontal: '7%'
    },
    bubble:{
        width: '100%',
        alignItems: 'center',
        position: 'relative'
    },
    button:{
        width: '100%',
        alignItems: 'center',
    },
    instructions:{
        marginVertical: 30,
        position: 'relative',
        justifyContent: 'center',
    }
})

const style = StyleSheet.create({
    bubble:{
        width: 75,
        height: 75,
        marginBottom: 10,
    },
    team:{
        fontFamily: 'Gilroy-Light',
        fontSize: 14,
        color: '#FFFFFF',
        textTransform: 'capitalize',
        position: 'absolute',
        top: 62,
        left: width / 2 + 4,
    },
    bold:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    light:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    instruction:{
        marginVertical: 15,
        flexDirection: 'row',
    },
    stepNumber:{
        width: 20,
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 33,
        color: '#373737',
        backgroundColor: '#000000',
        textAlign: 'center',
        marginRight: 20,
    },
    stepText:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        color: '#FFFFFF',
        paddingTop: 4,
        flexShrink: 1,
    },
    verticalLine:{
        width: 1,
        height: '80%',
        backgroundColor: '#373737',
        position: 'absolute',
        left: 10,
    }
})