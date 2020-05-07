import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native'
import {connect} from 'react-redux'

import CustomButton from '../components/CustomButton'
import TextAndLine from '../components/TextAndLine'
import { TouchableOpacity } from 'react-native-gesture-handler'

const {width} = Dimensions.get('window')
const sideWidth = width - width * 0.3
const mapStateToProps = (state) => {
    return {
        name: state.name,
        team: state.team
    }
}

function End(props){
    return (
        <View style={zones.container}>

            <View>
                <View style={style.picture}></View>
                <Text style={style.polaroid}>#lesvivresdelart   #parcoursfini</Text>
                <TextAndLine 
                    text='La photo est belle, je la partage'
                    uppercase={false}
                />
            </View>

            <View style={zones.share}>
                <TouchableOpacity style={style.sharingButton}>
                    <Image source={require('../images/icons/facebook.png')}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={style.sharingButton}>
                    <Image source={require('../images/icons/instagram.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={style.sharingButton}>
                    <Image source={require('../images/icons/twitter.png')}/>
                </TouchableOpacity>
            </View>

            <View style={zones.bubble}>
                <Image 
                    source={require('../images/elementsVDA/picasso-bubble.png')}
                    style={style.bubble}    
                />
                <Text style={style.team}>{props.team}</Text>
                <Text style={style.bold}>{props.name}, un test final ?</Text>
                <Text style={style.light}>(Allez, montre-moi qui tu es !)</Text>
            </View>


            <View style={zones.button}>
                <CustomButton 
                    title='Retour à la carte'
                    disabled={false}
                    action={() => props.navigation.navigate('MapVDA')}
                />
            </View>
        </View>
    )
}

export default connect(mapStateToProps)(End)

const zones = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: '7%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000000'
    },
    share:{
        width: 252,
        flexDirection: 'row',
        justifyContent: 'center',
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
})

const style = StyleSheet.create({
    picture:{
        width: sideWidth,
        height: sideWidth,
        borderColor: '#F2EEE3',
        borderWidth: 8,
    },
    polaroid:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        backgroundColor: '#F2EEE3',
        textAlign: 'center',
        marginBottom: 5,
        paddingBottom: 4,
    },
    sharingButton:{
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
    },
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
    }
})