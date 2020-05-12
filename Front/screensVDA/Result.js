import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {connect} from 'react-redux'

import CustomButton from '../components/CustomButton'
import CustomButtonReverse from '../components/CustomButtonReverse'
import TextAndLine from '../components/TextAndLine'

const mapStateToProps = (state) => {
    return {
        team: state.profileReducer.team
    }
}

function Result(props){

    const isValid = props.route.params.isValid

    return (
        <View style={zones.container}>
            <View style={zones.header}>
                <Text style={style.mainTitle}>
                    {isValid ? 'bravoooo' : 'ooooooh'}
                </Text>
                <Text style={style.subTitle}>
                    {isValid ? 'tu es incollable' : 'Dommage c\'était pas ça...'}
                </Text>
            </View>

            <View>
                <Text style={style.team}>{props.team}</Text>
                <Image 
                    source={require('../images/elementsVDA/picasso-fail.png')}
                    style={style.image}
                />
                <TextAndLine 
                    text={isValid ? 'Tu avances dans ton parcours' : 'On fait quoi ?'}
                    uppercase={isValid ? false : true}
                />
            </View>

            <View style={zones.button}>
                { isValid ? (
                    <CustomButton 
                        title='Allez, je continue'
                        disabled={false}
                        action={() => props.navigation.navigate('TakePictureVDA')}
                    />
                ) : (
                    <>
                        <CustomButtonReverse 
                            title='Je veux rejouer...'
                            disabled={false}
                            action={() => props.navigation.goBack()}
                        />
                        <View style={{height:30}}></View>
                        <CustomButton 
                            title='Allez, je continue'
                            disabled={false}
                            action={() => props.navigation.navigate('TakePictureVDA')}
                        />
                    </>
                )}
            </View>
            
        </View>
    )
}

export default connect(mapStateToProps)(Result)

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
    header:{
        minHeight: 72,
        alignItems: 'center',
        position: 'relative',
        marginBottom: 15,
    },
    button:{
        width: '100%',
        alignItems: 'center',
    },
})

const style = StyleSheet.create({
    mainTitle:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 50,
        color:'#F5EA3E',
        textTransform: 'uppercase'
    },
    subTitle:{
        fontFamily: 'Madame',
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'absolute',
        top: 50,
    },
    team:{
        fontFamily: 'Gilroy-Light',
        fontSize: 14,
        color: '#FFFFFF',
        textTransform: 'capitalize',
        textAlign: 'right'
    },
    image:{
        borderRadius: 13,
        marginVertical: 10,
    }
})